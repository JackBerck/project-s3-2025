<script lang="ts">
	import { onMount } from 'svelte';
	import ukm from '../../data/ukm';
	import Card from '../../components/card.svelte';

	let mounted = false;
	let searchQuery = '';
	let selectedCategory = '';
	let selectedValue = '';
	let isDropdownOpen = false;
	let filteredUkm = ukm;

	// Categories for filtering
    const categories = [
        { label: 'Semua Daerah', value: '' },
        { label: 'Jawa Tengah', value: 'jawa tengah' },
        { label: 'Jawa Barat', value: 'jawa barat' },
        { label: 'Jawa Timur', value: 'jawa timur' },
        { label: 'Luar Pulau Jawa', value: 'luar pulau jawa' }
    ];

	onMount(() => {
		mounted = true;
		// Close dropdown when clicking outside
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	function handleClickOutside(event: MouseEvent) {
		const dropdown = document.getElementById('categoryDropdown');
		if (dropdown && !dropdown.contains(event.target as Node)) {
			isDropdownOpen = false;
		}
	}

	// Filter function
	function filterUkm() {
		filteredUkm = ukm.filter((item) => {
			const matchesSearch =
				item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.description.toLowerCase().includes(searchQuery.toLowerCase());

			// Simple category matching based on name
			const matchesCategory =
				selectedValue === '' || item.name.toLowerCase().includes(selectedValue.toLowerCase());

			return matchesSearch && matchesCategory;
		});
	}

	// Handle search input
	function handleSearch(event: Event) {
		searchQuery = (event.target as HTMLInputElement).value;
		filterUkm();
	}

	// Handle category selection
	function selectCategory(category: { label: string; value: string }) {
		selectedCategory = category.label;
		selectedValue = category.value;
		isDropdownOpen = false;
		filterUkm();
	}

	// Reset filters
	function resetFilters() {
		searchQuery = '';
		selectedCategory = '';
		selectedValue = '';
		filteredUkm = ukm;
		// Clear search input
		const searchInput = document.getElementById('searchName') as HTMLInputElement;
		if (searchInput) searchInput.value = '';
	}

	// Initialize filtered data
	$: if (mounted) {
		filterUkm();
	}
</script>

<svelte:head>
	<title>UKM | Soedirman Student Summit (S3)</title>
</svelte:head>

<section
	id="hero-ukm"
	class="from-rose-s3-secondary text-light-base section-padding-x to-rose-s3-secondary relative bg-gradient-to-br via-rose-600 bg-cover pt-36 pb-24 xl:pb-84"
>
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-[url('/img/patterns/batik-1.png')]"></div>

	<div class="relative z-10 container max-w-screen-xl">
		<div class="mb-6 flex flex-col items-center justify-center md:mb-8">
			<h1
				class="font-berkshire-swash mb-4 text-center font-bold md:text-4xl lg:text-5xl xl:text-6xl {mounted
					? 'animate-fade-in'
					: 'opacity-0'}"
			>
				<span class="text-yellow-s3-base">Paguyuban</span>
				<br class="sm:hidden" />
				<span class="text-light-base drop-shadow-lg">Mahasiswa Daerah</span>
			</h1>
			<p
				class="max-w-2xl text-center leading-relaxed {mounted ? 'animate-fade-in-up' : 'opacity-0'}"
			>
				Unit Kegiatan Mahasiswa atau UKM merupakan wadah bagi para Gensoed yang memiliki minat dan
				bakat tertentu untuk berkumpul, berbagi informasi, dan saling membantu untuk meningkatkan
				kemampuan mereka.
			</p>
		</div>

		<div class="flex justify-center">
			<form id="search" class="flex w-full max-w-2xl flex-col justify-center gap-4 sm:flex-row">
				<div class="relative flex-1">
					<input
						class="focus:ring-yellow-s3-base h-12 w-full appearance-none rounded-xl border-0 bg-white/90 px-4 py-3 pl-12 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 placeholder:text-gray-500 hover:shadow-xl focus:bg-white focus:ring-2 focus:outline-none"
						id="searchName"
						type="text"
						name="searchName"
						placeholder="Cari paguyuban yang kamu minati..."
						on:input={handleSearch}
						bind:value={searchQuery}
					/>
					<div class="absolute inset-y-0 left-0 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-4 h-5 w-5 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>
				</div>
				<div class="relative">
					<button
						type="button"
						id="categoryDropdown"
						class="focus:ring-yellow-s3-base flex h-12 w-full cursor-pointer items-center justify-between rounded-xl border-0 bg-white/90 px-4 py-3 text-left text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl focus:bg-white focus:ring-2 focus:outline-none sm:w-48"
						on:click={() => (isDropdownOpen = !isDropdownOpen)}
					>
						<span class="truncate">{selectedCategory || 'Semua Kategori'}</span>
						<svg
							class="ml-2 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 {isDropdownOpen
								? 'rotate-180'
								: ''}"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					{#if isDropdownOpen}
						<div class="absolute z-80 mt-2 w-full rounded-xl border-0 bg-white shadow-xl">
							{#each categories as category}
								<button
									type="button"
									class="w-full px-4 py-3 text-left text-gray-800 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-gray-100 {selectedValue ===
									category.value
										? 'bg-yellow-s3-base/10 text-yellow-s3-base font-medium'
										: ''}"
									on:click={() => selectCategory(category)}
								>
									{category.label}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</form>
		</div>

		<!-- Filter Results Info -->
		<!-- {#if searchQuery || selectedValue}
			<div class="mt-6 text-center">
				<p class="text-light-base/80 text-sm">
					Menampilkan <span class="text-yellow-s3-base font-semibold">{filteredUkm.length}</span>
					{filteredUkm.length === 1 ? 'UKM' : 'UKM'}
					{#if searchQuery}
						untuk "{searchQuery}"
					{/if}
					{#if selectedValue}
						dalam kategori "{selectedCategory}"
					{/if}
				</p>
				<button
					class="text-yellow-s3-base hover:text-yellow-s3-secondary mt-2 text-sm underline transition-colors duration-200"
					on:click={resetFilters}
				>
					Reset Filter
				</button>
			</div>
		{/if} -->
	</div>

	<!-- Gunung dan Pepohonan -->
	<div class="absolute -bottom-2 left-0">
		<img src="/img/elements/gunung-pepohonan.png" alt="Mountain and tree" class="w-full" />
	</div>
</section>

<section
	id="list-ukm"
	class="section-padding-x bg-size bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] pt-8 pb-24 md:pt-16"
>
	<div class="container max-w-screen-xl">
		{#if filteredUkm.length > 0}
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4" id="cards">
				{#each filteredUkm as item, index}
					<div class="mb-6 break-inside-avoid" style="animation-delay: {index * 100}ms">
						<Card
							href={item.href || `/ukm/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
							title={item.name}
							img="/img/placeholder.png"
							description={item.description}
						/>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Empty State -->
			<div class="py-16 text-center">
				<div class="mb-6">
					<svg
						class="mx-auto h-24 w-24 text-gray-400"
						fill="currentColor"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.7 328.7c22-22 53.9-40.7 91.3-40.7s69.3 18.7 91.3 40.7c11.1 11.1 20.1 23.4 26.4 35.4c6.2 11.7 10.3 24.4 10.3 35.9c0 5.2-2.6 10.2-6.9 13.2s-9.8 3.7-14.7 1.8l-20.5-7.7c-26.9-10.1-55.5-15.3-84.3-15.3l-3.2 0c-28.8 0-57.3 5.2-84.3 15.3L149.6 415c-4.9 1.8-10.4 1.2-14.7-1.8s-6.9-7.9-6.9-13.2c0-11.6 4.2-24.2 10.3-35.9c6.3-12 15.3-24.3 26.4-35.4zm-31.2-182l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"
						/></svg
					>
				</div>
				<h3 class="mb-2 text-xl font-medium text-gray-700">Tidak ada UKM ditemukan</h3>
				<p class="mb-6 text-gray-500">
					{#if searchQuery && selectedValue}
						Tidak ada UKM yang cocok dengan "{searchQuery}" dalam kategori "{selectedCategory}"
					{:else if searchQuery}
						Tidak ada UKM yang cocok dengan pencarian "{searchQuery}"
					{:else if selectedValue}
						Tidak ada UKM dalam kategori "{selectedCategory}"
					{:else}
						Tidak ada UKM tersedia saat ini
					{/if}
				</p>
				<button
					class="bg-rose-s3-base hover:bg-rose-s3-secondary rounded-xl px-6 py-3 font-medium text-white transition-colors duration-300"
					on:click={resetFilters}
				>
					Reset Filter
				</button>
			</div>
		{/if}
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.8s ease-out 0.3s forwards;
	}

	/* Ensure masonry layout works properly */
	#cards > div {
		animation: fade-in 0.6s ease-out forwards;
		opacity: 0;
	}

	/* Staggered animation for cards */
	#cards > div:nth-child(1) {
		animation-delay: 0.1s;
	}
	#cards > div:nth-child(2) {
		animation-delay: 0.2s;
	}
	#cards > div:nth-child(3) {
		animation-delay: 0.3s;
	}
	#cards > div:nth-child(4) {
		animation-delay: 0.4s;
	}
	#cards > div:nth-child(5) {
		animation-delay: 0.5s;
	}
	#cards > div:nth-child(6) {
		animation-delay: 0.6s;
	}
	#cards > div:nth-child(n + 7) {
		animation-delay: 0.7s;
	}
</style>
