<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly, scale, blur } from 'svelte/transition';
	import committees from '../../data/committees';

	let activeIndex = 0;
	let autoSlideInterval: number | undefined;
	let mounted = false;
	let showStaffModal = false;
	let selectedCommittee: (typeof committees)[0] | null = null;
	let currentPage = 1;
	const staffPerPage = 20;

	// Intersection Observer variables
	let sliderSection: HTMLElement;
	let elementsVisible = {
		slider: false,
		thumbnails: false,
		arrows: false
	};

	onMount(() => {
		mounted = true;

		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.slider = true), 300);
						setTimeout(() => (elementsVisible.arrows = true), 800);
						setTimeout(() => (elementsVisible.thumbnails = true), 1200);

						// Start auto slide after animations
						setTimeout(() => {
							startAutoSlide();
						}, 1500);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (sliderSection) {
			observer.observe(sliderSection);
		}

		return () => {
			if (sliderSection) {
				observer.unobserve(sliderSection);
			}
		};
	});

	onDestroy(() => {
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
		}
	});

	function startAutoSlide() {
		if (autoSlideInterval) return; // Prevent multiple intervals
		autoSlideInterval = setInterval(() => {
			nextSlide();
		}, 5000);
	}

	function stopAutoSlide() {
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
			autoSlideInterval = undefined;
		}
	}

	function restartAutoSlide() {
		stopAutoSlide();
		startAutoSlide();
	}

	function nextSlide() {
		activeIndex = (activeIndex + 1) % committees.length;
	}

	function prevSlide() {
		activeIndex = activeIndex === 0 ? committees.length - 1 : activeIndex - 1;
	}

	function goToSlide(index: number) {
		activeIndex = index;
		restartAutoSlide();
	}

	function handleNext() {
		nextSlide();
		restartAutoSlide();
	}

	function handlePrev() {
		prevSlide();
		restartAutoSlide();
	}

	function openStaffModal(committee: (typeof committees)[0]) {
		selectedCommittee = committee;
		showStaffModal = true;
		currentPage = 1;
		stopAutoSlide();
	}

	function closeStaffModal() {
		showStaffModal = false;
		selectedCommittee = null;
		currentPage = 1;
		restartAutoSlide();
	}

	function handleModalClick(event: Event) {
		if (event.target === event.currentTarget) {
			closeStaffModal();
		}
	}

	$: paginatedStaff = selectedCommittee?.staff
		? selectedCommittee.staff.slice((currentPage - 1) * staffPerPage, currentPage * staffPerPage)
		: [];

	$: totalPages = selectedCommittee?.staff
		? Math.ceil(selectedCommittee.staff.length / staffPerPage)
		: 0;

	function goToPage(page: number) {
		currentPage = page;
	}

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}

	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}

	function getVisiblePages() {
		const pages = [];
		const maxVisible = 3; // Ubah ke 3!

		if (totalPages <= maxVisible) {
			// Jika total halaman <= 3, tampilkan semua
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			// Logic untuk menampilkan maksimal 3 navigasi
			if (currentPage <= 2) {
				// Di awal: 1, 2, 3, ...
				for (let i = 1; i <= maxVisible; i++) {
					pages.push(i);
				}
			} else if (currentPage >= totalPages - 1) {
				// Di akhir: ..., n-2, n-1, n
				for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
					pages.push(i);
				}
			} else {
				// Di tengah: ..., current-1, current, current+1, ...
				for (let i = currentPage - 1; i <= currentPage + 1; i++) {
					pages.push(i);
				}
			}
		}

		return pages;
	}

	$: visiblePages = getVisiblePages();
	$: showStartEllipsis = totalPages > 3 && visiblePages[0] > 1;
	$: showEndEllipsis = totalPages > 3 && visiblePages[visiblePages.length - 1] < totalPages;
</script>

<svelte:head>
	<title>Panitia | Soedirman Student Summit (S3) 2025</title>
	<meta
		name="description"
		content="Tim panitia Soedirman Student Summit (S3) - Berkenalan dengan orang-orang hebat di balik kesuksesan acara ini"
	/>
</svelte:head>

<div bind:this={sliderSection} class="slider pb-144 md:pb-184 xl:pb-196">
	<!-- Main Slider Items -->
	{#if elementsVisible.slider}
		<div class="list" in:fade={{ duration: 800, delay: 0 }}>
			{#each committees as committee, index}
				<div class="item {activeIndex === index ? 'active' : ''}">
					<img
						src={committee.imageBackground}
						alt="Background {committee.name}"
						class="profile-background"
					/>
					<div class="content">
						<p class="position">{committee.name}</p>
						<h2 class="profile-name">{committee.memberName}</h2>
						<p class="paragraph">{committee.description}</p>
						<div class="button-group">
							{#if committee.staff && committee.staff.length > 0}
								<button
									on:click={() => openStaffModal(committee)}
									class="staff extra-small-font-size"
								>
									Lihat Staff
								</button>
							{/if}
							{#if committee.instagram}
								<a
									href="https://instagram.com/{committee.instagram.replace('@', '')}"
									target="_blank"
									rel="noopener noreferrer"
									class="instagram-btn extra-small-font-size"
								>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="instagram-icon">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
									</svg>
									Instagram
								</a>
							{/if}
						</div>
						<img src={committee.image} alt={committee.memberName} class="profile-image" />
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<!-- Navigation Arrows -->
	{#if elementsVisible.arrows}
		<div class="arrows" in:scale={{ duration: 600, start: 0.8, delay: 0 }}>
			<button class="arrow-btn" on:click={handlePrev} aria-label="Previous slide">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</button>
			<button class="arrow-btn" on:click={handleNext} aria-label="Next slide">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M9 18l6-6-6-6" />
				</svg>
			</button>
		</div>
	{/if}

	<!-- Thumbnail Navigation -->
	{#if elementsVisible.thumbnails}
		<div class="thumbnail" in:fly={{ y: 100, duration: 800, delay: 0 }}>
			{#each committees as committee, index}
				<button
					class="item {activeIndex === index ? 'active' : ''}"
					on:click={() => goToSlide(index)}
					aria-label="Go to {committee.name} slide"
					in:scale={{ duration: 400, start: 0.8, delay: index * 100 }}
				>
					<img src={committee.imageBackground} alt={committee.name} />
					<div class="content">{committee.name}</div>
				</button>
			{/each}
		</div>
	{/if}
</div>

<!-- Enhanced Staff Modal with animations -->
{#if showStaffModal && selectedCommittee}
	<div class="modal-overlay" on:click={handleModalClick} in:fade={{ duration: 300 }}>
		<div class="modal-content" in:scale={{ duration: 400, start: 0.9 }}>
			<div class="modal-header">
				<h3 in:fly={{ x: -20, duration: 400, delay: 200 }}>Staff {selectedCommittee.name}</h3>
				<button
					class="close-btn"
					on:click={closeStaffModal}
					in:scale={{ duration: 300, start: 0.8, delay: 300 }}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M18 6L6 18M6 6l12 12" />
					</svg>
				</button>
			</div>

			<div class="modal-body">
				{#if selectedCommittee.staff && selectedCommittee.staff.length > 0}
					<div class="staff-grid">
						{#each paginatedStaff as staff, index}
							<div class="staff-card" in:scale={{ duration: 300, start: 0.8, delay: index * 50 }}>
								<div class="staff-avatar">
									{staff.charAt(0).toUpperCase()}
								</div>
								<p class="staff-name">{staff}</p>
							</div>
						{/each}
					</div>

					{#if totalPages > 1}
						<div class="pagination" in:fly={{ y: 20, duration: 400, delay: 500 }}>
							<!-- Previous Button -->
							<button
								class="pagination-btn"
								on:click={prevPage}
								disabled={currentPage === 1}
								aria-label="Previous page"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M15 18l-6-6 6-6" />
								</svg>
								Previous
							</button>

							<div class="page-numbers">
								<!-- First page + ellipsis jika diperlukan -->
								{#if showStartEllipsis}
									<button class="page-btn" on:click={() => goToPage(1)}>1</button>
									<span class="ellipsis">...</span>
								{/if}

								<!-- Visible pages (maksimal 3 pages) -->
								{#each visiblePages as page}
									<button
										class="page-btn {currentPage === page ? 'active' : ''}"
										on:click={() => goToPage(page)}
										aria-label="Go to page {page}"
										aria-current={currentPage === page ? 'page' : undefined}
									>
										{page}
									</button>
								{/each}

								<!-- Ellipsis + last page jika diperlukan -->
								{#if showEndEllipsis}
									<span class="ellipsis">...</span>
									<button class="page-btn" on:click={() => goToPage(totalPages)}
										>{totalPages}</button
									>
								{/if}
							</div>

							<!-- Next Button -->
							<button
								class="pagination-btn"
								on:click={nextPage}
								disabled={currentPage === totalPages}
								aria-label="Next page"
							>
								Next
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</div>
					{/if}
				{:else}
					<p class="no-staff" in:fade={{ duration: 400, delay: 300 }}>
						Belum ada staff yang terdaftar
					</p>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.slider {
		min-height: 100vh;
		color: #f1f5f9;
		position: relative;
	}

	.slider .list .item {
		position: absolute;
		inset: 0;
		overflow: hidden;
		opacity: 0;
		transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 1;
	}

	.slider .list .item.active {
		opacity: 1;
		z-index: 10;
	}

	.slider .list .item .profile-background {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.1);
		transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slider .list .item.active .profile-background {
		transform: scale(1);
	}

	.slider .list .item::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		background-image: linear-gradient(to top, #e23c64 10%, transparent);
		z-index: 2;
		opacity: 0;
		transition: opacity 0.8s ease;
	}

	.slider .list .item.active::after {
		opacity: 1;
	}

	.slider .list .item .content {
		position: absolute;
		left: 10%;
		top: 30%;
		width: 768px;
		max-width: 80%;
		z-index: 3;
	}

	.slider .list .item .content p.position {
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 1rem;
		margin: 0 0 0.5rem 0;
		color: rgba(255, 255, 255, 0.8);
	}

	.slider .list .item .content .profile-name {
		font-size: 3rem;
		font-weight: 900;
		margin: 0 0 1rem 0;
		color: #fff;
		line-height: 1.1;
	}

	.slider .list .item .content .paragraph {
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.6;
		margin: 0;
		color: rgba(255, 255, 255, 0.9);
	}

	.slider .list .item .content .staff {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: rgba(255, 255, 255, 0.1);
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 5px;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	.slider .list .item .content .staff:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.4);
		transform: translateY(-2px);
	}

	.button-group {
		display: flex;
		gap: 0.75rem;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.instagram-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: rgba(255, 255, 255, 0.1);
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 5px;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	.instagram-btn:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.4);
		transform: translateY(-2px);
	}

	.instagram-icon {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	.slider .list .item .content .profile-image {
		width: 296px;
		height: auto;
		position: absolute;
		right: -384px;
		bottom: -150px;
		z-index: -1;
		border-radius: 10px;
		transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slider .list .item.active .profile-image {
		transform: scale(1.05);
	}

	/* Enhanced animations for active slide */
	@keyframes showContent {
		from {
			transform: translateY(50px);
			filter: blur(10px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			filter: blur(0);
			opacity: 1;
		}
	}

	@keyframes slideInRight {
		from {
			transform: translateX(100px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	/* Set initial state for content - hidden by default */
	.slider .list .item .position,
	.slider .list .item .profile-name,
	.slider .list .item .paragraph,
	.slider .list .item .button-group {
		opacity: 0;
		transform: translateY(50px);
		filter: blur(10px);
	}

	.slider .list .item .profile-image {
		opacity: 0;
		transform: translateX(100px);
	}

	.slider .list .item.active .position,
	.slider .list .item.active .profile-name,
	.slider .list .item.active .paragraph,
	.slider .list .item.active .button-group {
		animation: showContent 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	.slider .list .item.active .profile-image {
		animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	.slider .list .item.active .position {
		animation-delay: 0.2s;
	}

	.slider .list .item.active .profile-name {
		animation-delay: 0.4s;
	}

	.slider .list .item.active .paragraph {
		animation-delay: 0.6s;
	}

	.slider .list .item.active .button-group {
		animation-delay: 0.8s;
	}

	.slider .list .item.active .profile-image {
		animation-delay: 0.3s;
	}

	/* Navigation Arrows */
	.arrows {
		position: absolute;
		top: 30%;
		right: 50px;
		z-index: 50;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.arrow-btn {
		background-color: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.3);
		width: 50px;
		height: 50px;
		border-radius: 50%;
		color: #fff;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(10px);
	}

	.arrow-btn:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
		transform: scale(1.1);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}

	.arrow-btn:active {
		transform: scale(0.95);
	}

	/* Thumbnail Navigation */
	.thumbnail {
		position: absolute;
		z-index: 11;
		display: flex;
		gap: 10px;
		width: 100%;
		height: auto;
		padding: 30px 50px 60px;
		box-sizing: border-box;
		justify-content: start;
		bottom: -48px;
		scrollbar-width: none;
		overflow-x: scroll;
	}

	.thumbnail::-webkit-scrollbar {
		display: none;
	}

	.thumbnail .item {
		width: 150px;
		height: 220px;
		filter: brightness(0.5) saturate(0.8);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		flex-shrink: 0;
		cursor: pointer;
		border: none;
		background: none;
		position: relative;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 30px;
	}

	.thumbnail .item:hover {
		transform: translateY(-10px);
		filter: brightness(0.8) saturate(1);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
	}

	.thumbnail .item.active {
		transform: translateY(-20px);
		filter: brightness(1.2) saturate(1.2);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
	}

	.thumbnail .item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.thumbnail .item:hover img {
		transform: scale(1.05);
	}

	.thumbnail .item.active img {
		transform: scale(1.1);
	}

	.thumbnail .item .content {
		position: absolute;
		bottom: 10px;
		left: 10px;
		right: 10px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff;
		text-align: center;
		background: rgba(0, 0, 0, 0.6);
		padding: 8px 5px;
		border-radius: 5px;
		backdrop-filter: blur(5px);
		transition: all 0.3s ease;
	}

	.thumbnail .item:hover .content {
		background: rgba(0, 0, 0, 0.8);
		transform: translateY(-2px);
	}

	/* Modal animations and improvements */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		backdrop-filter: blur(8px);
	}

	.modal-content {
		background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
		border-radius: 20px;
		width: 90%;
		max-width: 900px;
		max-height: 85vh;
		overflow: hidden;
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.05);
	}

	.modal-header h3 {
		margin: 0;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.close-btn {
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 50%;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.close-btn:hover {
		background-color: rgba(255, 255, 255, 0.1);
		transform: scale(1.1);
	}

	.modal-body {
		padding: 2rem;
		overflow-y: auto;
		max-height: calc(85vh - 120px);
	}

	.staff-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.staff-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 15px;
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	.staff-card:hover {
		transform: translateY(-8px);
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}

	.staff-avatar {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: linear-gradient(135deg, #e23c64, #ff6b9d);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		font-weight: bold;
		font-size: 1.4rem;
		color: #fff;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.staff-card:hover .staff-avatar {
		transform: scale(1.1);
	}

	.staff-name {
		margin: 0;
		color: #fff;
		font-weight: 500;
		font-size: 1rem;
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 2rem;
	}

	.pagination-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #fff;
		padding: 0.7rem 1.2rem;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		font-weight: 500;
	}

	.pagination-btn:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}

	.pagination-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.page-numbers {
		display: flex;
		gap: 0.5rem;
	}

	.page-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #fff;
		padding: 0.5rem 0.8rem;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		min-width: 45px;
		font-weight: 500;
	}

	.page-btn:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}

	.page-btn.active {
		background: linear-gradient(135deg, #e23c64, #ff6b9d);
		border-color: #e23c64;
		transform: translateY(-2px);
	}

	.no-staff {
		text-align: center;
		color: rgba(255, 255, 255, 0.7);
		font-style: italic;
		margin: 3rem 0;
		font-size: 1.1rem;
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.pagination-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #fff;
		padding: 0.7rem 1.2rem;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.pagination-btn:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.pagination-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.page-numbers {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.page-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #fff;
		padding: 0.5rem 0.8rem;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		min-width: 45px;
		font-weight: 500;
	}

	.page-btn:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.page-btn.active {
		background: linear-gradient(135deg, #e23c64, #ff6b9d);
		border-color: #e23c64;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(226, 60, 100, 0.4);
	}

	.ellipsis {
		color: rgba(255, 255, 255, 0.6);
		font-weight: bold;
		padding: 0.5rem 0.3rem;
		user-select: none;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 30px;
	}

	/* Responsive Design */
	@media screen and (max-width: 1200px) {
		.slider .list .item .content .profile-image {
			width: 256px;
			bottom: -96px;
			right: -100px;
		}
	}

	@media screen and (max-width: 768px) {
		.arrows {
			top: 30%;
			right: 20px;
		}

		.arrow-btn {
			width: 40px;
			height: 40px;
		}

		.thumbnail {
			justify-content: flex-start;
			bottom: -72px;
			padding: 20px 20px 80px;
		}

		.thumbnail .item {
			width: 120px;
			height: 180px;
			margin-bottom: 25px;
		}

		.thumbnail .item .content {
			font-size: 0.7rem;
		}

		.slider .list .item .content .profile-name {
			font-size: 2rem;
		}

		.slider .list .item .content p.position {
			font-size: 0.8rem;
		}

		.slider .list .item .content {
			width: 90%;
			top: 40%;
		}

		.slider .list .item .content .paragraph {
			font-size: 0.8rem;
		}

		.slider .list .item .content .profile-image {
			width: 196px;
			bottom: 0;
			right: -100px;
		}

		.modal-content {
			width: 95%;
			max-height: 90vh;
		}

		.modal-header {
			padding: 1rem 1.5rem;
		}

		.modal-body {
			padding: 1.5rem;
		}

		.staff-grid {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			gap: 1rem;
		}

		.staff-card {
			padding: 1rem;
		}

		.staff-avatar {
			width: 50px;
			height: 50px;
			font-size: 1.2rem;
		}

		.pagination {
			flex-direction: column;
			gap: 1rem;
		}

		.page-numbers {
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	@media screen and (max-width: 480px) {
		.slider {
			max-height: 100vh;
		}

		.arrows {
			right: 20px;
			top: 20%;
		}

		.slider .list .item .content {
			bottom: 30%;
			top: auto;
			left: 5%;
			width: 90%;
		}

		.slider .list .item .content p.position {
			font-size: 0.7rem;
		}

		.slider .list .item .content .profile-name {
			font-size: 1.5rem;
		}

		.slider .list .item .content .paragraph {
			font-size: 0.75rem;
		}

		.slider .list .item .content .profile-image {
			width: 150px;
			right: -30px;
			bottom: -50px;
		}

		.thumbnail {
			height: auto;
			bottom: -64px;
			padding: 20px 20px 60px;
		}

		.thumbnail .item {
			width: 100px;
			height: 150px;
			margin-bottom: 20px;
		}

		.staff-grid {
			grid-template-columns: 1fr 1fr;
		}

		.modal-header h3 {
			font-size: 1.2rem;
		}
	}
</style>
