<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import afterMovies from '../../data/after-movies';

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		AOS.refresh();
	});
</script>

<section id="videos-home" class="section-padding-x overflow-hidden py-12">
	<div class="container max-w-screen-xl">
		<!-- #SalamSoedirman Section -->
		<div
			class="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 lg:gap-16"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="100"
		>
			<h2
				class="text-rose-s3-base font-junigarden-swash text-4xl font-semibold lg:text-5xl"
				data-aos="fade-right"
				data-aos-duration="800"
				data-aos-delay="300"
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
				data-aos="zoom-in"
				data-aos-duration="800"
				data-aos-delay="500"
			></iframe>
		</div>

		<!-- #GenerasiSoedirman Section -->
		<div
			class="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row-reverse md:gap-8 lg:gap-16"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="700"
		>
			<h2
				class="text-rose-s3-base font-junigarden-swash text-4xl font-semibold lg:text-5xl"
				data-aos="fade-left"
				data-aos-duration="800"
				data-aos-delay="900"
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
				data-aos="zoom-in"
				data-aos-duration="800"
				data-aos-delay="1100"
			></iframe>
		</div>

		<!-- Kilas Balik Section -->
		<div
			class="flex flex-col items-center justify-center gap-4"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="1300"
		>
			<h2
				class="text-rose-s3-base font-junigarden-swash text-center font-semibold"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="1500"
			>
				Kilas Balik Soedirman Student Summit
			</h2>

			<div
				class="scrollbar-hide w-full overflow-x-auto"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="1700"
			>
				<div class="flex gap-6 md:flex-wrap md:items-center md:justify-center">
					{#each afterMovies as movie, index (movie.year)}
						<div
							class="flex-shrink-0 text-center md:flex-shrink"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay={1900 + index * 150}
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
							<h3 class="text-rose-s3-base font-poppins mt-2 font-bold">
								{movie.year}
							</h3>
						</div>
					{/each}
				</div>
			</div>
		</div>
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
