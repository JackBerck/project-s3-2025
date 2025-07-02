<script lang="ts">
	import logos from '../../data/logo';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';

	let swiperContainer: HTMLElement;
	let logoSwiper: Swiper;

	onMount(() => {
		logoSwiper = new Swiper(swiperContainer, {
			effect: 'creative',
			grabCursor: true,
			centeredSlides: true,
			initialSlide: 2,
			speed: 600,
			preventClicks: true,
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			},
			creativeEffect: {
				perspective: true,
				prev: {
					shadow: false,
					translate: ['-175px', '20%', -200],
					origin: 'bottom'
				},
				next: {
					shadow: false,
					translate: ['175px', '20%', -200],
					origin: 'bottom'
				},
				limitProgress: 2,
				progressMultiplier: 2
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				click(swiper) {
					logoSwiper.slideTo(swiper.clickedIndex);
				},
				slideChange(swiper) {
					const activeIndex = swiper.realIndex;
					const logoTitle = document.querySelector('.logo-title') as HTMLElement;
					const logoDescription = document.querySelector('.logo-description') as HTMLElement;

					if (logoTitle && logoDescription) {
						// Add fade out effect
						logoTitle.style.opacity = '0';
						logoDescription.style.opacity = '0';

						setTimeout(() => {
							logoTitle.textContent = logos[activeIndex].title;
							logoDescription.textContent = logos[activeIndex].desc;

							// Add fade in effect
							logoTitle.style.opacity = '1';
							logoDescription.style.opacity = '1';
						}, 150);
					}
				}
			}
		});

		return () => {
			if (logoSwiper) {
				logoSwiper.destroy(true, true);
			}
		};
	});
</script>

<section
	id="logo-home"
	class="section-padding-x text-light-base relative bg-gradient-to-b from-[#E23C64] to-[#FEB3C5] to-20% pt-24 pb-36 md:pb-84 lg:pb-64 xl:pb-72 overflow-hidden"
>
	<div class="container mx-auto max-w-screen-xl">
		<!-- Header Section -->
		<div class="flex flex-col items-center justify-center pt-8 md:gap-2">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="animate-fade-in w-36 md:w-40 lg:w-54"
			/>
			<h2
				class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
			>
				Filosofi Logo
			</h2>
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="animate-fade-in w-36 scale-y-[-1] transform md:w-40 lg:w-54"
			/>
		</div>

		<!-- Swiper Container -->
		<div class="mb-4 flex flex-wrap items-center justify-center">
			<div class="swiper logo-swiper w-full max-w-6xl" bind:this={swiperContainer}>
				<div class="swiper-wrapper">
					{#each logos as logo}
						<div class="swiper-slide overflow-visible">
							<div
								class="group relative flex items-center justify-center rounded-xl transition-all"
							>
								<img
									src={logo.img}
									alt={logo.title}
									class="w-60 transition-transform duration-500 group-hover:scale-110 md:w-72"
									loading="lazy"
								/>
							</div>
						</div>
					{/each}
				</div>

				<!-- Navigation -->
				<div class="swiper-button-next text-rose-s3-base"></div>
				<div class="swiper-button-prev text-rose-s3-base"></div>

				<!-- Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</div>

		<!-- Content Section -->
		<div class="mx-auto max-w-screen-md px-4 text-center">
			<h3
				class="logo-title text-rose-s3-base font-berkshire-swash mb-4 font-bold transition-opacity duration-300"
			>
				{logos[2].title}
			</h3>
			<p
				class="logo-description font-plus-jakarta-sans small-font-size text-rose-s3-base leading-relaxed transition-opacity duration-300"
			>
				{logos[2].desc}
			</p>
		</div>
	</div>
</section>

<style>
	.logo-swiper {
		overflow: visible;
		padding: 50px 0;
	}

	.logo-swiper :global(.swiper-slide) {
		position: relative;
		width: 280px;
		height: 280px;
		border-radius: 14px;
		/* cursor: pointer; */
	}

	/* .logo-swiper :global(.swiper-slide img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
		user-select: none;
	} */

	.logo-swiper :global(.swiper-button-next),
	.logo-swiper :global(.swiper-button-prev) {
		color: #e23c64;
		background: white;
		border-radius: 50%;
		width: 44px;
		height: 44px;
		margin-top: -22px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transition: all 0.3s ease;
	}

	.logo-swiper :global(.swiper-button-next:hover),
	.logo-swiper :global(.swiper-button-prev:hover) {
		transform: scale(1.1);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
	}

	.logo-swiper :global(.swiper-button-next::after),
	.logo-swiper :global(.swiper-button-prev::after) {
		font-size: 16px;
		font-weight: bold;
	}

	.logo-swiper :global(.swiper-pagination-bullet) {
		background: #e23c64;
		opacity: 0.5;
		transition: all 0.3s ease;
	}

	.logo-swiper :global(.swiper-pagination-bullet-active) {
		opacity: 1;
		transform: scale(1.2);
	}

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

	.animate-fade-in {
		animation: fade-in 0.6s ease-out forwards;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		:global(.logo-swiper .swiper-slide) {
			width: 240px;
			height: 240px;
		}

		:global(.logo-swiper) {
			padding: 30px 0;
		}
	}

	@media (min-width: 1024px) {
		:global(.logo-swiper .swiper-slide) {
			width: 320px;
			height: 320px;
		}
	}
</style>
