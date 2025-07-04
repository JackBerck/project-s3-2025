<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import s3Events from '../../data/events';

	let candiElement: HTMLImageElement | null = null;
	let candiHeight = 0;
	let candiWidth = 0;
	let mounted = false;
	let eventsSection: HTMLElement;
	let elementsVisible = {
		ornamentTop: false,
		title: false,
		ornamentBottom: false,
		events: false
	};

	// Function to update candi dimensions
	function updateCandiDimensions() {
		if (candiElement) {
			candiHeight = candiElement.offsetHeight;
			candiWidth = candiElement.offsetWidth;
		}
	}

	onMount(() => {
		mounted = true;

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

		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.ornamentTop = true), 100);
						setTimeout(() => (elementsVisible.title = true), 300);
						setTimeout(() => (elementsVisible.ornamentBottom = true), 500);
						setTimeout(() => (elementsVisible.events = true), 700);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (eventsSection) {
			observer.observe(eventsSection);
		}

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
			if (eventsSection) {
				observer.unobserve(eventsSection);
			}
		};
	});

	// Reactive statement to log changes (optional)
	$: if (mounted && candiHeight > 0) {
		console.log('Candi dimensions:', { height: candiHeight, width: candiWidth });
	}
</script>

<section
	bind:this={eventsSection}
	id="events-home"
	class="section-padding-x text-light-base relative overflow-hidden py-0 md:py-12"
>
	<!-- Background Candi with dynamic height -->
	<div class="absolute top-38 xl:top-48 left-0 z-10 w-full bg-gradient-to-b to-transparent">
		<img
			bind:this={candiElement}
			src="/img/elements/candi.png"
			alt="Candi"
			class="animate-fade-in-slow h-auto w-full object-cover object-center"
			on:load={updateCandiDimensions}
		/>
	</div>

	<!-- Bottom overlay with responsive height based on candi -->
	<div
		class="absolute left-0 z-10 h-96 w-full bg-[#E23C64] xl:h-48"
		style="top: {candiHeight + 144}px"
	></div>

	<div class="relative z-20 container max-w-screen-xl">
		<!-- Header Section -->
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			<!-- Ornament Top -->
			{#if elementsVisible.ornamentTop}
				<div in:scale={{ duration: 600, start: 0.7, delay: 0 }}>
					<img
						src="/img/elements/ornamen-1.png"
						alt="Ornamen Atas"
						class="w-36 md:w-40 lg:w-54"
					/>
				</div>
			{/if}

			<!-- Title -->
			{#if elementsVisible.title}
				<h2
					class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
					in:fly={{ y: 30, duration: 800, delay: 0 }}
				>
					Rangkaian Acara
				</h2>
			{/if}

			<!-- Ornament Bottom -->
			{#if elementsVisible.ornamentBottom}
				<div in:scale={{ duration: 600, start: 0.7, delay: 0 }}>
					<img
						src="/img/elements/ornamen-1.png"
						alt="Ornamen Bawah"
						class="w-36 ornament-bottom md:w-40 lg:w-54"
					/>
				</div>
			{/if}
		</div>

		<!-- Events Carousel -->
		{#if elementsVisible.events}
			<div
				class="scroll-bar-hide flex justify-start gap-4 overflow-auto px-2 pb-4"
				in:fade={{ duration: 800, delay: 0 }}
			>
				{#each s3Events as data, index}
					<div
						class="animate-slide-in-stagger relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300"
						style="animation-delay: {index * 150}ms"
						in:fly={{ x: 50, duration: 600, delay: index * 100 }}
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
									alt={`${data.name} - ${data.description}`}
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
		{/if}
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

	@keyframes fade-in-slow {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes pulse-gentle {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	@keyframes pulse-gentle-delayed {
		0%,
		100% {
			transform: scale(1) scaleY(-1);
		}
		50% {
			transform: scale(1.05) scaleY(-1);
		}
	}

	@keyframes slide-in-stagger {
		from {
			opacity: 0;
			transform: translateX(30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.animate-fade-in-slow {
		animation: fade-in-slow 1s ease-out forwards;
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 3s ease-in-out infinite;
	}

	.animate-pulse-gentle-delayed {
		animation: pulse-gentle-delayed 3s ease-in-out infinite 0.5s;
	}

	.animate-slide-in-stagger {
		animation: slide-in-stagger 0.6s ease-out forwards;
		opacity: 0;
	}

	.ornament-bottom {
		transform: scaleY(-1);
		/* animation: pulse-gentle-delayed 3s ease-in-out infinite 0.5s; */
	}
</style>
