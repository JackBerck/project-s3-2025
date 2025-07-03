<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';

	// Props
	import type { SwiperOptions } from 'swiper/types';

	// Props
	export let fakultas: Array<{
		title: string;
		desc: string;
		facultyColor: string;
		link?: string;
	}> = [];

	// Default data jika tidak ada props
	const defaultRagamInfo: Array<{
		title: string;
		desc: string;
		facultyColor: string;
		link?: string;
	}> = [
		{
			title: 'Fakultas Ekonomi dan Bisnis',
			desc: 'Fakultas yang mengembangkan ilmu ekonomi, manajemen, dan akuntansi untuk menciptakan lulusan yang siap menghadapi tantangan dunia bisnis modern.',
			facultyColor: 'bg-blue-500',
			link: 'https://feb.unsoed.ac.id/'
		},
		{
			title: 'Fakultas Hukum',
			desc: 'Fakultas yang membentuk calon sarjana hukum dengan pemahaman mendalam tentang sistem hukum Indonesia dan internasional.',
			facultyColor: 'bg-red-500',
			link: 'https://fh.unsoed.ac.id/'
		},
		{
			title: 'Fakultas Teknik',
			desc: 'Fakultas yang menghasilkan insinyur handal dalam berbagai bidang teknik dengan penguasaan teknologi terkini.',
			facultyColor: 'bg-green-500',
			link: 'https://ft.unsoed.ac.id/'
		}
	];

	// State
	let swiper: Swiper | null = null;
	let swiperContainer: HTMLElement;
	let activeIndex: number = 0;
	let mounted = false;

	// Use provided data or default
	$: displayData = fakultas.length > 0 ? fakultas : defaultRagamInfo;

	onMount(() => {
		mounted = true;
		// Delay initialization to ensure DOM is ready
		setTimeout(() => {
			if (swiperContainer && mounted) {
				initializeSwiper();
			}
		}, 100);
	});

	onDestroy(() => {
		mounted = false;
		if (swiper) {
			swiper.destroy(true, true);
		}
	});

	function initializeSwiper(): void {
		if (!mounted) return;

		const swiperOptions: SwiperOptions = {
			direction: getDirection(),
			mousewheel: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 600,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				slideChange: function (params) {
					activeIndex = params.activeIndex;
				},
				resize: function (params) {
					params.changeDirection(getDirection());
				}
			}
		};

		swiper = new Swiper(swiperContainer, swiperOptions);
	}

	function getDirection(): 'horizontal' | 'vertical' {
		return window.innerWidth > 768 ? 'vertical' : 'horizontal';
	}

	function slideTo(index: number): void {
		if (swiper) {
			swiper.slideTo(index);
		}
	}
</script>

<div class="faculty-swiper-container relative flex w-full">
	<!-- Swiper Container -->
	<div
		class="swiper mySwiper relative w-full bg-transparent md:flex md:w-3/4"
		bind:this={swiperContainer}
	>
		<div class="swiper-wrapper">
			{#each displayData as data, index}
				<div class="swiper-slide">
					<div class="md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
						<h3
							class="font-berkshire-swash text-dark-base animate-slide-in mb-4 text-center md:text-left"
						>
							{data.title}
						</h3>
						<p class="animate-fade-in-delayed text-justify text-gray-700">
							{data.desc}
						</p>
						<a
							href={data.link || '#'}
							target="_blank"
							class="from-rose-s3-base to-rose-s3-secondary text-light-base mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-3 py-2"
						>
							Kunjungi Website
						</a>
					</div>
				</div>
			{/each}
		</div>

		<!-- Navigation buttons for mobile -->
		<div class="swiper-button-prev text-rose-s3-base -translate-y-4 md:hidden"></div>
		<div class="swiper-button-next text-rose-s3-base -translate-y-4 md:hidden"></div>
	</div>

	<!-- Side Navigation for Desktop -->
	<div
		class="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rose-s3-base text-dark-base nav-sidebar hidden w-1/4 flex-col gap-1 overflow-y-auto rounded-lg border border-gray-200 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm md:flex lg:px-6 lg:py-4"
	>
		{#each displayData as data, index}
			<button
				class="no-hover cursor-pointer rounded-lg p-3 text-left text-sm lg:text-base
                    {activeIndex === index
					? 'bg-rose-s3-base text-white shadow-md'
					: 'bg-transparent text-gray-700'}"
				on:click={() => slideTo(index)}
			>
				{data.title}
			</button>
		{/each}
	</div>
</div>

<style>
	.faculty-swiper-container {
		opacity: 0;
		animation: fadeInUp 0.8s ease-out forwards;
		/* Remove all hover effects */
		transform: none !important;
		box-shadow: none !important;
	}

	.faculty-swiper-container:hover {
		transform: none !important;
		box-shadow: none !important;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fade-in-delayed {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.animate-slide-in {
		animation: slide-in 0.6s ease-out forwards;
	}

	.animate-fade-in-delayed {
		animation: fade-in-delayed 0.8s ease-out 0.3s forwards;
		opacity: 0;
	}

	.nav-sidebar {
		/* Force remove all hover effects */
		transform: none !important;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
		transition: none !important;
	}

	.nav-sidebar:hover {
		transform: none !important;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
	}

	.no-hover {
		transition: none !important;
		transform: none !important;
		box-shadow: none !important;
	}

	.no-hover:hover {
		background-color: transparent !important;
		color: #374151 !important;
		transform: none !important;
		box-shadow: none !important;
		scale: none !important;
	}

	.no-hover.bg-rose-s3-base:hover {
		background-color: #e23c64 !important;
		color: white !important;
	}

	.mySwiper :global(.swiper-wrapper) {
		overflow: visible;
	}

	.mySwiper :global(.swiper-slide) {
		height: auto;
		display: flex;
		align-items: center;
		justify-content: start;
	}

	.mySwiper :global(.swiper-button-prev),
	.mySwiper :global(.swiper-button-next) {
		color: #e23c64;
		background: white;
		border-radius: 50%;
		width: 44px;
		height: 44px;
		margin-top: -22px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		/* Remove hover effects */
		transition: none !important;
	}

	.mySwiper :global(.swiper-button-prev:hover),
	.mySwiper :global(.swiper-button-next:hover) {
		transform: none !important;
		scale: none !important;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
	}

	.mySwiper :global(.swiper-button-prev::after),
	.mySwiper :global(.swiper-button-next::after) {
		font-size: 16px;
		font-weight: bold;
	}

	@media (min-width: 768px) {
		.mySwiper :global(.swiper-button-prev),
		.mySwiper :global(.swiper-button-next) {
			display: none;
		}
	}

	/* Custom scrollbar */
	.scrollbar-thin::-webkit-scrollbar {
		width: 6px;
	}

	.scrollbar-track-gray-100::-webkit-scrollbar-track {
		background: #f3f4f6;
		border-radius: 10px;
	}

	.scrollbar-thumb-rose-s3-base::-webkit-scrollbar-thumb {
		background: #e23c64;
		border-radius: 10px;
	}

	.scrollbar-thumb-rose-s3-base::-webkit-scrollbar-thumb:hover {
		background: #c1355a;
	}
</style>
