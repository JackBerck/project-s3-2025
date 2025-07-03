<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import afterMovies from '../../data/after-movies';

	let videosSection: HTMLElement;
	let elementsVisible = {
		salamSoedirman: false,
		generasiSoedirman: false,
		kilasBalikTitle: false,
		kilasBalikVideos: false
	};

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.salamSoedirman = true), 100);
						setTimeout(() => (elementsVisible.generasiSoedirman = true), 600);
						setTimeout(() => (elementsVisible.kilasBalikTitle = true), 1100);
						setTimeout(() => (elementsVisible.kilasBalikVideos = true), 1400);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (videosSection) {
			observer.observe(videosSection);
		}

		return () => {
			if (videosSection) {
				observer.unobserve(videosSection);
			}
		};
	});
</script>

<section bind:this={videosSection} id="videos-home" class="section-padding-x overflow-hidden py-12">
	<div class="container max-w-screen-xl">
		<!-- #SalamSoedirman Section -->
		{#if elementsVisible.salamSoedirman}
			<div
				class="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 lg:gap-16"
				in:fade={{ duration: 800, delay: 0 }}
			>
				<h2
					class="text-rose-s3-base font-berkshire-swash text-4xl font-semibold lg:text-5xl"
					in:fly={{ x: -50, duration: 800, delay: 200 }}
				>
					#SalamSoedirman
				</h2>
				<iframe
					src="https://www.youtube.com/embed/Q-A_Y6H-tbg?si=g66CK4mrOhBLjWj5"
					title="YouTube video player"
					frameborder="0"
					class="video-frame aspect-video w-full rounded-md xl:max-w-xl"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					in:scale={{ duration: 800, start: 0.8, delay: 400 }}
				></iframe>
			</div>
		{/if}

		<!-- #GenerasiSoedirman Section -->
		{#if elementsVisible.generasiSoedirman}
			<div
				class="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row-reverse md:gap-8 lg:gap-16"
				in:fade={{ duration: 800, delay: 0 }}
			>
				<h2
					class="text-rose-s3-base font-berkshire-swash text-4xl font-semibold lg:text-5xl"
					in:fly={{ x: 50, duration: 800, delay: 200 }}
				>
					#GenerasiSoedirman
				</h2>
				<iframe
					src="https://www.youtube.com/embed/5-W7wDOEsDc?si=fjC6RT8-czZxhpVl"
					title="YouTube video player"
					frameborder="0"
					class="video-frame aspect-video w-full rounded-md xl:max-w-xl"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					in:scale={{ duration: 800, start: 0.8, delay: 400 }}
				></iframe>
			</div>
		{/if}

		<!-- Kilas Balik Section -->
		{#if elementsVisible.kilasBalikTitle}
			<div
				class="flex flex-col items-center justify-center gap-4"
				in:fade={{ duration: 800, delay: 0 }}
			>
				<h2
					class="text-rose-s3-base font-berkshire-swash text-center font-semibold"
					in:fly={{ y: 30, duration: 800, delay: 0 }}
				>
					Kilas Balik Soedirman Student Summit
				</h2>

				{#if elementsVisible.kilasBalikVideos}
					<div
						class="scrollbar-hide w-full overflow-x-auto"
						in:fade={{ duration: 800, delay: 200 }}
					>
						<div class="flex gap-6 md:flex-wrap md:items-center md:justify-center">
							{#each afterMovies as movie, index (movie.year)}
								<div
									class="animate-slide-in-video flex-shrink-0 text-center md:flex-shrink"
									style="animation-delay: {index * 150}ms"
									in:fly={{ y: 50, duration: 600, delay: index * 100 }}
								>
									<iframe
										src={movie.link}
										title={`YouTube video player ${movie.name}`}
										frameborder="0"
										class="video-frame aspect-video w-72 rounded-md md:w-full md:xl:max-w-xl"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerpolicy="strict-origin-when-cross-origin"
										allowfullscreen
									></iframe>
									<h3 class="text-rose-s3-base font-berkshire-swash mt-2 font-medium">
										{movie.year}
									</h3>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</section>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.video-frame {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.video-frame:hover {
		transform: scale(1.02);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
	}

	@keyframes slide-in-video {
		from {
			opacity: 0;
			transform: translateY(30px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.animate-slide-in-video {
		animation: slide-in-video 0.6s ease-out forwards;
		opacity: 0;
	}

	/* Enhanced video styling */
	iframe {
		border: none;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	/* Responsive enhancements */
	@media (max-width: 768px) {
		.scrollbar-hide {
			padding-bottom: 1rem;
		}
	}
</style>
