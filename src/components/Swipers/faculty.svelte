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
	}> = [];

	// Default data jika tidak ada props
	const defaultRagamInfo: Array<{
		title: string;
		desc: string;
		facultyColor: string;
	}> = [
		{
			title: 'Fakultas Ekonomi dan Bisnis',
			desc: 'Fakultas yang mengembangkan ilmu ekonomi, manajemen, dan akuntansi untuk menciptakan lulusan yang siap menghadapi tantangan dunia bisnis modern.',
			facultyColor: 'bg-blue-500'
		},
		{
			title: 'Fakultas Hukum',
			desc: 'Fakultas yang membentuk calon sarjana hukum dengan pemahaman mendalam tentang sistem hukum Indonesia dan internasional.',
			facultyColor: 'bg-red-500'
		},
		{
			title: 'Fakultas Teknik',
			desc: 'Fakultas yang menghasilkan insinyur handal dalam berbagai bidang teknik dengan penguasaan teknologi terkini.',
			facultyColor: 'bg-green-500'
		}
	];

	// State
	let swiper: Swiper | null = null;
	let swiperContainer: HTMLElement;
	let activeIndex: number = 0;

	// Use provided data or default
	$: displayData = fakultas.length > 0 ? fakultas : defaultRagamInfo;

	onMount(() => {
		if (swiperContainer) {
			initializeSwiper();
		}
	});

	onDestroy(() => {
		if (swiper) {
			swiper.destroy(true, true);
		}
	});

	function initializeSwiper(): void {
		const swiperOptions: SwiperOptions = {
			direction: getDirection(),
			mousewheel: true,
			slidesPerView: 1,
			spaceBetween: 30,
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

<div class="relative flex w-full">
	<!-- Swiper Container -->
	<div
		class="swiper mySwiper relative w-full bg-transparent md:flex md:w-3/4"
		bind:this={swiperContainer}
	>
		<div class="swiper-wrapper">
			{#each displayData as data, index}
				<div class="swiper-slide">
					<div class="md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
						<!-- Faculty Logo -->
						<!-- <div class="flex items-center justify-center">
							<div
								class="flex aspect-square w-32 items-center justify-center rounded-full md:w-48 lg:w-64 {data.facultyColor} shadow-lg"
							>
								<img
									src="/img/logos/unsoed.webp"
									alt={data.title}
									class="w-5/6 drop-shadow-lg"
									loading="lazy"
								/>
							</div>
						</div> -->

						<!-- Faculty Info -->
						<!-- <div class="overflow-visible px-2 md:max-w-lg lg:max-w-2xl"> -->
						<h3 class="font-berkshire-swash text-dark-base mb-4 text-center md:text-left">
							{data.title}
						</h3>
						<p class="text-justify text-gray-700">
							{data.desc}
						</p>
						<a
							href="/"
							class="group from-rose-s3-base to-rose-s3-secondary mt-4 inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r px-3 py-2 text-light-base"
							>Kunjungi Website
						</a>
						<!-- </div> -->
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
		class="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rose-s3-base text-dark-base hidden w-1/4 flex-col gap-1 overflow-y-auto rounded-lg border border-gray-200 bg-white/90 px-3 py-2 lg:px-6 lg:py-4 shadow-lg backdrop-blur-sm md:flex"
	>
		{#each displayData as data, index}
			<button
				class="cursor-pointer rounded-lg p-3 text-left text-sm transition-all duration-300 lg:text-base
                    {activeIndex === index
					? 'bg-rose-s3-base text-white shadow-md'
					: 'hover:bg-rose-s3-base/10 hover:text-rose-s3-base'}"
				on:click={() => slideTo(index)}
			>
				{data.title}
			</button>
		{/each}
	</div>
</div>

<style>
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
		transition: all 0.3s ease;
	}

	.mySwiper :global(.swiper-button-prev:hover),
	.mySwiper :global(.swiper-button-next:hover) {
		transform: scale(1.1);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
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
