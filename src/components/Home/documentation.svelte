<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Swiper from 'swiper/bundle';
	import 'swiper/swiper-bundle.css';

	const docsImage = [
		'./img/documentations/documentation-1.webp',
		'./img/documentations/documentation-2.webp',
		'./img/documentations/documentation-3.webp',
		'./img/documentations/documentation-4.webp',
		'./img/documentations/documentation-5.webp',
		'./img/documentations/documentation-6.webp',
		'./img/documentations/documentation-7.webp',
		'./img/documentations/documentation-8.webp',
		'./img/documentations/documentation-9.webp',
		'./img/documentations/documentation-10.webp',
		'./img/documentations/documentation-11.webp',
		'./img/documentations/documentation-12.webp'
	];

	let documentationSwiper: Swiper;
	let documentationSection: HTMLElement;
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
						}, 1200); // Wait for AOS animation
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (documentationSection) {
			observer.observe(documentationSection);
		}

		return () => {
			if (documentationSection) {
				observer.unobserve(documentationSection);
			}
		};
	});

	onDestroy(() => {
		if (documentationSwiper) {
			documentationSwiper.destroy(true, true);
		}
	});

	// Function to initialize swiper
	function initializeSwiper() {
		if (documentationSwiper) return; // Prevent double initialization

		documentationSwiper = new Swiper('.documentation-card', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			loop: true,
			loopedSlides: docsImage.length,
			loopAdditionalSlides: 2,
			initialSlide: Math.floor(docsImage.length / 2),
			speed: 300,
			preventClicks: false,
			slidesPerView: 'auto',
			spaceBetween: 0,
			watchSlidesProgress: true,
			coverflowEffect: {
				rotate: 0,
				stretch: 80,
				depth: 350,
				modifier: 1,
				slideShadows: true
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			},
			on: {
				click(params) {
					if (params.clickedIndex !== undefined) {
						documentationSwiper.slideTo(params.clickedIndex);
					}
				},
				init() {
					setTimeout(() => {
						this.update();
					}, 100);
				}
			}
		});
	}

	// Function to handle manual navigation
	function goNext() {
		if (documentationSwiper) {
			documentationSwiper.slideNext();
		}
	}

	function goPrev() {
		if (documentationSwiper) {
			documentationSwiper.slidePrev();
		}
	}
</script>

<div bind:this={documentationSection} class="documentation-container">
	{#if sectionVisible}
		<div
			class="swiper documentation-card relative"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="200"
		>
			<div class="swiper-wrapper">
				{#each docsImage as image, index}
					<div
						class="swiper-slide max-w-[240px] shadow-md sm:max-w-[360px] lg:max-w-[480px]"
						data-aos="zoom-in"
						data-aos-duration="600"
					>
						<img src={image} alt="documentation s3 {index + 1}" loading="lazy" />
					</div>
				{/each}
			</div>

			<!-- Navigation Buttons -->
			<button
				class="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:scale-110 hover:bg-white focus:outline-none"
				on:click={goPrev}
				aria-label="Previous slide"
				data-aos="fade-right"
				data-aos-duration="600"
				data-aos-delay="800"
			>
				<svg class="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<button
				class="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:scale-110 hover:bg-white focus:outline-none"
				on:click={goNext}
				aria-label="Next slide"
				data-aos="fade-left"
				data-aos-duration="600"
				data-aos-delay="800"
			>
				<svg class="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			<!-- Progress Indicator -->
			<div
				class="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2"
				data-aos="fade-up"
				data-aos-duration="600"
				data-aos-delay="1000"
			>
				{#each docsImage as _, index}
					<button
						class="h-2 w-2 rounded-full bg-white/50 transition-all hover:bg-white"
						class:!bg-white={documentationSwiper && documentationSwiper.realIndex === index}
						on:click={() => documentationSwiper?.slideTo(index)}
						aria-label="Go to slide {index + 1}"
					></button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.documentation-container {
		width: 100%;
		position: relative;
	}

	.swiper {
		width: 100%;
		padding: 50px 0;
	}

	.documentation-card {
		overflow: visible;
	}

	.swiper-slide {
		position: relative;
		aspect-ratio: 16/10;
		border-radius: 14px;
		transition: transform 0.3s ease;
		cursor: pointer;
	}

	.swiper-slide:hover {
		transform: translateY(-5px);
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
		user-select: none;
		transition:
			transform 0.3s ease,
			filter 0.3s ease;
	}

	.swiper-slide:hover img {
		transform: scale(1.05);
		filter: brightness(1.1);
	}

	/* Enhanced coverflow styling */
	.swiper-slide:global(.swiper-slide-active) {
		z-index: 2;
	}

	.swiper-slide:global(.swiper-slide-active) img {
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	/* Smooth transitions for coverflow */
	.swiper-slide {
		transition: transform 0.3s ease;
	}

	/* Navigation buttons responsive */
	@media (max-width: 640px) {
		.absolute.left-4 {
			left: 8px;
		}
		.absolute.right-4 {
			right: 8px;
		}
	}

	/* Hide navigation on very small screens */
	@media (max-width: 480px) {
		.absolute.left-4,
		.absolute.right-4 {
			display: none;
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
