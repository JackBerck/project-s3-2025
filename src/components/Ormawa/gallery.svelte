<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Swiper from 'swiper/bundle';
	import 'swiper/swiper-bundle.css';

	export let galleries: { title: string; image: string }[] = [];

	let gallerySwiper: Swiper;
	let showLightbox = false;
	let currentImageIndex = 0;
	let lightboxSwiper: Swiper | null = null;

	onMount(() => {
		// Initialize AOS for this component
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 50,
			delay: 0
		});

		// Initialize Swiper after a delay to ensure DOM is ready
		setTimeout(() => {
			initializeSwiper();
		}, 1200); // Wait for AOS animations to complete
	});

	// Initialize Swiper
	function initializeSwiper() {
		if (galleries && galleries.length > 0) {
			const swiperContainer = document.querySelector('.gallery-swiper');
			if (swiperContainer) {
				gallerySwiper = new Swiper('.gallery-swiper', {
					effect: 'slide',
					grabCursor: false,
					allowTouchMove: false,
					simulateTouch: false,
					touchRatio: 0,
					loop: true,
					initialSlide: Math.floor(galleries.length / 2),
					centeredSlides: true,
					speed: 600,
					slidesPerView: 1,
					spaceBetween: 20,
					watchSlidesProgress: true,
					watchSlidesVisibility: true,
					breakpoints: {
						640: { slidesPerView: 1.5, spaceBetween: 20 },
						768: { slidesPerView: 2.5, spaceBetween: 30 },
						1024: { slidesPerView: 3, spaceBetween: 40 }
					},
					navigation: {
						nextEl: '.gallery-button-next',
						prevEl: '.gallery-button-prev'
					},
					pagination: {
						el: '.gallery-pagination',
						clickable: true,
						dynamicBullets: true
					},
					on: {
						init: function () {
							this.update();
						}
					}
				});
			}
		}
	}

	function openLightbox(index: number) {
		currentImageIndex = index;
		showLightbox = true;
		document.body.style.overflow = 'hidden';

		// Initialize lightbox swiper after modal is shown
		setTimeout(() => {
			if (galleries.length > 1) {
				lightboxSwiper = new Swiper('.lightbox-swiper', {
					initialSlide: currentImageIndex,
					loop: true,
					keyboard: { enabled: true },
					navigation: {
						nextEl: '.lightbox-button-next',
						prevEl: '.lightbox-button-prev'
					},
					pagination: {
						el: '.lightbox-pagination',
						type: 'fraction'
					},
					on: {
						slideChange: function () {
							currentImageIndex = this.realIndex;
						}
					}
				});
			}
		}, 300);
	}

	function closeLightbox() {
		showLightbox = false;
		document.body.style.overflow = 'auto';

		if (lightboxSwiper) {
			lightboxSwiper.destroy(true, true);
			lightboxSwiper = null;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!showLightbox) return;

		if (event.key === 'Escape') {
			closeLightbox();
		}
	}

	onDestroy(() => {
		if (gallerySwiper) {
			gallerySwiper.destroy(true, true);
		}
		if (lightboxSwiper) {
			lightboxSwiper.destroy(true, true);
		}
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<section
	id="gallery-ormawa"
	class="section-padding-x bg-rose-s3-secondary overflow-hidden bg-[url('/img/patterns/batik-1.png')] bg-repeat py-16"
>
	<div class="container mx-auto max-w-screen-xl">
		<div class="mb-12 flex flex-col items-center justify-center">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="mb-4 w-36 brightness-0 invert md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="200"
			/>

			<h2
				class="font-berkshire-swash mb-4 px-4 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="500"
			>
				Galeri Kegiatan
			</h2>

			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="w-36 scale-y-[-1] transform brightness-0 invert md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="700"
			/>
		</div>

		{#if galleries && galleries.length > 0}
			<div
				class="gallery-container relative"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="1000"
			>
				<div class="gallery-swiper swiper">
					<div class="swiper-wrapper">
						{#each galleries as gallery, index}
							<div class="swiper-slide">
								<div
									class="group gallery-item relative transform cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
									on:click={() => openLightbox(index)}
									on:keydown={(e) => e.key === 'Enter' && openLightbox(index)}
									tabindex="0"
									role="button"
								>
									<img
										src={gallery.image}
										alt={gallery.title}
										class="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
										loading="lazy"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									>
										<div class="absolute right-6 bottom-6 left-6">
											<h3 class="mb-2 text-xl font-bold text-white">{gallery.title}</h3>
											<p class="text-sm text-white/80">Klik untuk melihat detail</p>
										</div>
									</div>
									<!-- Zoom icon overlay -->
									<div
										class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									>
										<div
											class="transform rounded-full border border-white/20 bg-white/30 p-4 backdrop-blur-lg transition-transform duration-300 group-hover:scale-110"
										>
											<svg
												class="h-8 w-8 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Custom Navigation Buttons -->
				<button
					class="gallery-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-4 text-white shadow-lg backdrop-blur-lg transition-all hover:scale-110 hover:bg-white/30"
					aria-label="Previous image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<button
					class="gallery-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-4 text-white shadow-lg backdrop-blur-lg transition-all hover:scale-110 hover:bg-white/30"
					aria-label="Next image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		{:else}
			<div
				class="py-16 text-center"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="1000"
			>
				<div
					class="mx-auto max-w-md rounded-xl border border-white/30 bg-white/20 p-12 shadow-2xl backdrop-blur-lg"
				>
					<div class="mb-6 text-6xl text-white/60">🖼️</div>
					<h3 class="mb-4 text-2xl font-bold text-white">Belum Ada Galeri</h3>
					<p class="text-lg text-white/80">Galeri kegiatan akan segera ditambahkan. Stay tuned!</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Enhanced Lightbox Modal -->
{#if showLightbox && galleries[currentImageIndex]}
	<div
		class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/10 backdrop-blur-sm"
		on:click={closeLightbox}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div class="relative h-full max-h-screen w-full max-w-7xl p-4" on:click|stopPropagation>
			<!-- Close button -->
			<button
				class="absolute top-6 right-6 z-20 rounded-full border border-white/30 bg-white/20 p-3 text-white backdrop-blur-lg transition-all hover:scale-110 hover:bg-white/30"
				on:click|stopPropagation={closeLightbox}
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			{#if galleries.length > 1}
				<!-- Swiper -->
				<div class="lightbox-swiper swiper h-full">
					<div class="swiper-wrapper">
						{#each galleries as gallery, index}
							<div class="swiper-slide flex items-center justify-center">
								<div class="relative max-h-full max-w-full">
									<img
										src={gallery.image}
										alt={gallery.title}
										class="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
										on:click|stopPropagation
									/>
									<div
										class="absolute right-0 bottom-0 left-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-6"
									>
										<h3 class="mb-2 text-2xl font-bold text-white">{gallery.title}</h3>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<!-- Navigation buttons -->
					<button
						class="lightbox-button-prev absolute top-1/2 left-6 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-4 text-white backdrop-blur-lg transition-all hover:scale-110 hover:bg-white/30"
						aria-label="Previous image"
						on:click|stopPropagation
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						class="lightbox-button-next absolute top-1/2 right-6 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-4 text-white backdrop-blur-lg transition-all hover:scale-110 hover:bg-white/30"
						aria-label="Next image"
						on:click|stopPropagation
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			{:else}
				<!-- Single image display -->
				<div class="flex h-full items-center justify-center">
					<div class="relative">
						<img
							src={galleries[currentImageIndex].image}
							alt={galleries[currentImageIndex].title}
							class="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
							on:click|stopPropagation
						/>
						<div
							class="absolute right-0 bottom-0 left-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-6"
						>
							<h3 class="mb-2 text-2xl font-bold text-white">
								{galleries[currentImageIndex].title}
							</h3>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.gallery-container {
		opacity: 0;
		animation: fadeInGallery 0.8s ease-out forwards;
	}

	@keyframes fadeInGallery {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.gallery-item {
		transition: all 0.3s ease;
	}

	.gallery-item:hover {
		transform: translateY(-8px) scale(1.05);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	/* Swiper container fixes */
	.gallery-swiper {
		overflow: visible !important;
		padding-bottom: 60px;
	}

	.gallery-swiper :global(.swiper-wrapper) {
		overflow: visible !important;
	}

	.gallery-swiper :global(.swiper-slide) {
		height: auto !important;
		transition: all 0.3s ease;
	}

	.gallery-swiper :global(.swiper-slide:not(.swiper-slide-active)) {
		opacity: 0.7;
		transform: scale(0.9);
	}

	/* Lightbox swiper styles */
	.lightbox-swiper {
		width: 100% !important;
		height: 100% !important;
	}

	.lightbox-swiper :global(.swiper-slide) {
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}

		.gallery-container {
			opacity: 1;
			animation: none;
		}
	}
</style>
