<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import logos from '../../data/logo';

	let swiperContainer: HTMLElement;
	let logoSwiper: Swiper;
	let logoSection: HTMLElement;
	let sectionVisible = false;

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		// Intersection Observer for swiper initialization
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !sectionVisible) {
						sectionVisible = true;
						// Initialize swiper after AOS animation
						setTimeout(() => {
							initializeSwiper();
						}, 1200); // Wait for AOS animations
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (logoSection) {
			observer.observe(logoSection);
		}

		return () => {
			if (logoSection) {
				observer.unobserve(logoSection);
			}
			if (logoSwiper) {
				logoSwiper.destroy(true, true);
			}
		};
	});

	// Function to initialize swiper
	function initializeSwiper() {
		if (logoSwiper) return; // Prevent double initialization

		if (swiperContainer) {
			logoSwiper = new Swiper(swiperContainer, {
				effect: 'creative',
				grabCursor: true,
				centeredSlides: true,
				loop: true,
				initialSlide: Math.floor(logos.length / 2),
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
		}
	}
</script>

<section
	bind:this={logoSection}
	id="logo-home"
	class="section-padding-x text-light-base relative overflow-hidden bg-gradient-to-b from-[#E23C64] to-[#FEB3C5] to-20% pt-24 pb-36 md:pb-84 lg:pb-64 xl:pb-72"
>
	<div class="relative z-30 container mx-auto max-w-screen-xl">
		<!-- Header Section -->
		<div class="flex flex-col items-center justify-center pt-8 md:gap-2">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="w-36 md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="100"
			/>

			<h2
				class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="300"
			>
				Filosofi Logo
			</h2>

			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="w-36 scale-y-[-1] transform md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="500"
			/>
		</div>

		<!-- Swiper Container -->
		<div
			class="mb-4 flex flex-wrap items-center justify-center"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="700"
		>
			<div class="swiper logo-swiper w-full max-w-6xl" bind:this={swiperContainer}>
				<div class="swiper-wrapper">
					{#each logos as logo, index}
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
		<div
			class="mx-auto max-w-screen-md px-4 text-center"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="1000"
		>
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
		overflow: visible !important;
	}

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

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}
	}
</style>
