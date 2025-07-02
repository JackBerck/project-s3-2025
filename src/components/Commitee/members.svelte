<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import committees from '../../data/committees';

	let activeIndex = 0;
	let autoSlideInterval: number | undefined;
	let mounted = false;
	let showStaffModal = false;
	let selectedCommittee: (typeof committees)[0] | null = null;
	let currentPage = 1;
	const staffPerPage = 20;

	// ...existing code...

	onMount(() => {
		mounted = true;
		startAutoSlide();
	});

	onDestroy(() => {
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
		}
	});

	function startAutoSlide() {
		autoSlideInterval = setInterval(() => {
			nextSlide();
		}, 5000);
	}

	function stopAutoSlide() {
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
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
</script>

<svelte:head>
	<title>Panitia | Soedirman Student Summit (S3)</title>
	<meta
		name="description"
		content="Tim panitia Soedirman Student Summit (S3) - Berkenalan dengan orang-orang hebat di balik kesuksesan acara ini"
	/>
</svelte:head>

<div class="slider">
	<!-- Main Slider Items -->
	<div class="list">
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
					{#if committee.staff && committee.staff.length > 0}
						<button on:click={() => openStaffModal(committee)} class="staff extra-small-font-size">
							Lihat Staff
						</button>
					{/if}
					<img src={committee.image} alt={committee.memberName} class="profile-image" />
				</div>
			</div>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	<div class="arrows">
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

	<!-- Thumbnail Navigation -->
	<div class="thumbnail">
		{#each committees as committee, index}
			<button
				class="item {activeIndex === index ? 'active' : ''}"
				on:click={() => goToSlide(index)}
				aria-label="Go to {committee.name} slide"
			>
				<img src={committee.imageBackground} alt={committee.name} />
				<div class="content">{committee.name}</div>
			</button>
		{/each}
	</div>
</div>

<!-- Staff Modal -->
{#if showStaffModal && selectedCommittee}
	<div class="modal-overlay" on:click={handleModalClick}>
		<div class="modal-content">
			<div class="modal-header">
				<h3>Staff {selectedCommittee.name}</h3>
				<button class="close-btn" on:click={closeStaffModal}>
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
						{#each paginatedStaff as staff}
							<div class="staff-card">
								<div class="staff-avatar">
									{staff.charAt(0).toUpperCase()}
								</div>
								<p class="staff-name">{staff}</p>
							</div>
						{/each}
					</div>

					{#if totalPages > 1}
						<div class="pagination">
							<button class="pagination-btn" on:click={prevPage} disabled={currentPage === 1}>
								Previous
							</button>

							<div class="page-numbers">
								{#each Array(totalPages) as _, i}
									<button
										class="page-btn {currentPage === i + 1 ? 'active' : ''}"
										on:click={() => goToPage(i + 1)}
									>
										{i + 1}
									</button>
								{/each}
							</div>

							<button
								class="pagination-btn"
								on:click={nextPage}
								disabled={currentPage === totalPages}
							>
								Next
							</button>
						</div>
					{/if}
				{:else}
					<p class="no-staff">Belum ada staff yang terdaftar</p>
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
		transition: opacity 0.5s ease-in-out;
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
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: rgba(255, 255, 255, 0.1);
		color: #fff;
		border-radius: 5px;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	.slider .list .item .content .staff:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.slider .list .item .content .profile-image {
		width: 296px;
		height: auto;
		position: absolute;
		right: -384px;
		bottom: -150px;
		z-index: -1;
		border-radius: 10px;
	}

	/* Animations for active slide */
	@keyframes showContent {
		from {
			transform: translateY(30px);
			filter: blur(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			filter: blur(0);
			opacity: 1;
		}
	}

	/* Set initial state for content - hidden by default */
	.slider .list .item .position,
	.slider .list .item .profile-name,
	.slider .list .item .paragraph,
	.slider .list .item .staff,
	.slider .list .item .profile-image {
		opacity: 0;
		transform: translateY(30px);
		filter: blur(20px);
	}

	.slider .list .item.active .position,
	.slider .list .item.active .profile-name,
	.slider .list .item.active .paragraph,
	.slider .list .item.active .staff,
	.slider .list .item.active .profile-image {
		animation: showContent 0.8s ease-out forwards;
	}

	.slider .list .item.active .position {
		animation-delay: 0.3s;
	}

	.slider .list .item.active .profile-name {
		animation-delay: 0.4s;
	}

	.slider .list .item.active .paragraph {
		animation-delay: 0.5s;
	}

	.slider .list .item.active .staff {
		animation-delay: 0.6s;
	}

	.slider .list .item.active .profile-image {
		animation-delay: 0.7s;
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
		transition: all 0.3s ease;
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
	}

	/* Thumbnail Navigation */
	.thumbnail {
		position: absolute;
		z-index: 11;
		display: flex;
		gap: 10px;
		width: 100%;
		height: auto; /* Change to auto */
		padding: 30px 50px 60px; /* Add more bottom padding */
		box-sizing: border-box;
		justify-content: center;
		bottom: -100px;
		scrollbar-width: none;
		overflow-x: auto;
		/* Remove overflow-y completely */
	}

	.thumbnail::-webkit-scrollbar {
		display: none;
	}

	.thumbnail .item {
		width: 150px;
		height: 220px;
		filter: brightness(0.5);
		transition: all 0.3s ease;
		flex-shrink: 0;
		cursor: pointer;
		border: none;
		background: none;
		position: relative;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 30px; /* Add margin for hover effect space */
	}

	.thumbnail .item:hover {
		transform: translateY(-10px);
		filter: brightness(0.8);
	}

	.thumbnail .item.active {
		transform: translateY(-20px);
		filter: brightness(1.2);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
	}

	.thumbnail .item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
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
		background: rgba(0, 0, 0, 0.5);
		padding: 5px;
		border-radius: 5px;
		backdrop-filter: blur(5px);
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
			bottom: -120px; /* Increase bottom space for mobile */
			padding: 20px 20px 80px; /* More bottom padding */
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
	}

	@media screen and (max-width: 480px) {
		.slider {
			max-height: 100vh;
		}

		.arrows {
			left: 20px;
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
			bottom: -100px;
			padding: 20px 20px 60px;
		}

		.thumbnail .item {
			width: 100px;
			height: 150px;
			margin-bottom: 20px;
		}
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		backdrop-filter: blur(5px);
	}

	.modal-content {
		background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
		border-radius: 15px;
		width: 90%;
		max-width: 800px;
		max-height: 80vh;
		overflow: hidden;
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
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
		transition: background-color 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.close-btn:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.modal-body {
		padding: 2rem;
		overflow-y: auto;
		max-height: calc(80vh - 120px);
	}

	.staff-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.staff-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		padding: 1.5rem;
		text-align: center;
		transition:
			transform 0.3s ease,
			background-color 0.3s ease;
	}

	.staff-card:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.1);
	}

	.staff-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: linear-gradient(135deg, #e23c64, #ff6b9d);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		font-weight: bold;
		font-size: 1.2rem;
		color: #fff;
	}

	.staff-name {
		margin: 0;
		color: #fff;
		font-weight: 500;
		font-size: 0.9rem;
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
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.pagination-btn:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.2);
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
		padding: 0.5rem 0.75rem;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 40px;
	}

	.page-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.page-btn.active {
		background: #e23c64;
		border-color: #e23c64;
	}

	.no-staff {
		text-align: center;
		color: rgba(255, 255, 255, 0.7);
		font-style: italic;
		margin: 2rem 0;
	}

	/* Animations for active slide */
	@keyframes showContent {
		from {
			transform: translateY(30px);
			filter: blur(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			filter: blur(0);
			opacity: 1;
		}
	}

	@media screen and (max-width: 768px) {
		.modal-content {
			width: 95%;
			max-height: 85vh;
		}

		.modal-header {
			padding: 1rem 1.5rem;
		}

		.modal-body {
			padding: 1.5rem;
		}

		.staff-grid {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			gap: 0.8rem;
		}

		.staff-card {
			padding: 1rem;
		}

		.staff-avatar {
			width: 40px;
			height: 40px;
			font-size: 1rem;
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
		.staff-grid {
			grid-template-columns: 1fr 1fr;
		}

		.modal-header h3 {
			font-size: 1.2rem;
		}
	}
</style>
