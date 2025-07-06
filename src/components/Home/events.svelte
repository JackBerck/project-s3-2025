<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import s3Events from '../../data/events';

	let candiElement: HTMLImageElement | null = null;
	let candiHeight = 0;
	let candiWidth = 0;
	let mounted = false;

	// Function to update candi dimensions
	function updateCandiDimensions() {
		if (candiElement) {
			candiHeight = candiElement.offsetHeight;
			candiWidth = candiElement.offsetWidth;
		}
	}

	onMount(() => {
		mounted = true;

		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		// Update dimensions when image loads
		if (candiElement) {
			candiElement.onload = updateCandiDimensions;
			// If image is already loaded
			if (candiElement.complete) {
				updateCandiDimensions();
			}
		}

		// Update on window resize
		const handleResize = () => {
			updateCandiDimensions();
		};

		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	// Reactive statement to log changes (optional)
	$: if (mounted && candiHeight > 0) {
		console.log('Candi dimensions:', { height: candiHeight, width: candiWidth });
	}
</script>

<section
	id="events-home"
	class="section-padding-x text-light-base relative overflow-hidden py-0 md:py-12"
>
	<!-- Background Candi with dynamic height -->
	<div
		class="absolute top-38 left-0 z-10 w-full bg-gradient-to-b to-transparent xl:top-48"
		data-aos="fade-up"
		data-aos-duration="1000"
		data-aos-delay="200"
	>
		<img
			bind:this={candiElement}
			src="/img/elements/candi.png"
			alt="Candi"
			class="h-auto w-full object-cover object-center"
			on:load={updateCandiDimensions}
		/>
	</div>

	<!-- Bottom overlay with responsive height based on candi -->
	<div
		class="absolute left-0 z-10 h-96 w-full bg-[#E23C64] xl:h-48"
		style="top: {candiHeight + 144}px"
		data-aos="fade-in"
		data-aos-duration="600"
		data-aos-delay="400"
	></div>

	<div class="relative z-20 container max-w-screen-xl">
		<!-- Header Section -->
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			<!-- Ornament Top -->
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="w-36 md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="600"
			/>

			<!-- Title -->
			<h2
				class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="800"
			>
				Rangkaian Acara
			</h2>

			<!-- Ornament Bottom -->
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="ornament-bottom w-36 scale-y-[-1] transform md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="1000"
			/>
		</div>

		<!-- Events Carousel -->
		<div
			class="scroll-bar-hide flex justify-start gap-4 overflow-auto px-2 pb-4"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="1200"
		>
			{#each s3Events as data, index}
				<div
					class="relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300"
					data-aos="fade-right"
					data-aos-duration="600"
					data-aos-delay={1400 + index * 150}
				>
					<div
						class="group relative m-0 flex h-80 w-44 rounded-xl shadow-xl ring-gray-900/5 transition-shadow duration-300 hover:shadow-2xl md:h-96 md:w-54"
					>
						<!-- Image Container -->
						<div
							class="z-10 h-full w-full overflow-hidden rounded-xl opacity-90 transition duration-300 ease-in-out group-hover:opacity-100"
						>
							<img
								src={data.img}
								class="block h-full w-full scale-100 transform object-cover object-center transition duration-500 group-hover:scale-110"
								alt="{data.name} Foto"
								loading="lazy"
							/>
							<!-- Gradient overlay -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
							></div>
						</div>

						<!-- Content Overlay -->
						<div
							class="absolute right-0 bottom-0 left-0 z-20 p-4 text-white transition duration-300 ease-in-out group-hover:translate-y-[-4px] group-hover:transform"
						>
							<h3 class="mb-1 text-lg font-bold drop-shadow-lg md:text-xl">
								{data.name}
							</h3>
							<p class="line-clamp-2 text-sm font-light opacity-90 drop-shadow-md md:text-base">
								{data.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.scroll-bar-hide::-webkit-scrollbar {
		display: none;
	}

	.scroll-bar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.line-clamp-2 {
		display: -webkit-box;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.ornament-bottom {
		transform: scaleY(-1);
	}

	/* Enhanced hover effects */
	.group:hover {
		transform: translateY(-8px);
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
