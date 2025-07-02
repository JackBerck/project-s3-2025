<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/swiper-bundle.css';

	export let galleries: { title: string; image: string }[] = [];

	let gallerySwiper: Swiper;
	let showLightbox = false;
	let currentImageIndex = 0;
	let lightboxSwiper: Swiper | null = null;

	onMount(() => {
		if (galleries && galleries.length > 0) {
			gallerySwiper = new Swiper('.gallery-swiper', {
				effect: 'slide',
				grabCursor: true,
				centeredSlides: true,
				loop: true,
				speed: 600,
				slidesPerView: 1,
				spaceBetween: 20,
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
				}
			});
		}
	});

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
		}, 100);
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

<section id="gallery-ormawa" class="section-padding-x bg-rose-s3-secondary py-16 overflow-hidden bg-[url('/img/patterns/batik-1.png')] bg-repeat">
	<div class="container mx-auto max-w-screen-xl">
		<div class="mb-12 flex flex-col items-center justify-center">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="animate-fade-in mb-4 w-36 brightness-0 invert md:w-40 lg:w-54"
			/>
			<h2
				class="font-berkshire-swash mb-4 px-4 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl"
			>
				Galeri Kegiatan
			</h2>
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="animate-fade-in w-36 scale-y-[-1] transform brightness-0 invert md:w-40 lg:w-54"
			/>
		</div>

		{#if galleries && galleries.length > 0}
			<div class="relative">
				<div class="gallery-swiper swiper overflow-visible">
					<div class="swiper-wrapper">
						{#each galleries as gallery, index}
							<div class="swiper-slide">
								<div
									class="group relative transform cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
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
											class="rounded-full border border-white/20 bg-white/30 p-4 backdrop-blur-lg"
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
			<div class="py-16 text-center">
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
		class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
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
				><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
	.animate-fade-in {
		animation: fadeIn 1s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Make swiper overflow visible */
	:global(.gallery-swiper) {
		overflow: visible !important;
	}

	:global(.gallery-swiper .swiper-wrapper) {
		overflow: visible !important;
	}

	/* Custom Swiper styles for gallery */
	:global(.gallery-swiper .swiper-slide) {
		transition: all 0.3s ease;
	}

	:global(.gallery-swiper .swiper-slide:not(.swiper-slide-active)) {
		opacity: 0.7;
		transform: scale(0.9);
	}

	:global(.gallery-pagination .swiper-pagination-bullet) {
		background: rgba(255, 255, 255, 0.5);
		opacity: 1;
		width: 12px;
		height: 12px;
		margin: 0 6px;
		transition: all 0.3s ease;
	}

	:global(.gallery-pagination .swiper-pagination-bullet-active) {
		background: white;
		transform: scale(1.2);
	}

	/* Lightbox swiper styles */
	:global(.lightbox-swiper) {
		width: 100%;
		height: 100%;
	}

	:global(.lightbox-swiper .swiper-slide) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
