<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	export let events: {
		title: string;
		description: string;
	}[] = [];

	let currentSlide = 0;
	let eventSection: HTMLElement;
	let elementsVisible = {
		ornamentTop: false,
		title: false,
		ornamentBottom: false,
		eventContainer: false,
		backgroundLeft: false,
		backgroundRight: false
	};

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.backgroundLeft = true), 100);
						setTimeout(() => (elementsVisible.backgroundRight = true), 200);
						setTimeout(() => (elementsVisible.ornamentTop = true), 400);
						setTimeout(() => (elementsVisible.title = true), 600);
						setTimeout(() => (elementsVisible.ornamentBottom = true), 800);
						setTimeout(() => (elementsVisible.eventContainer = true), 1000);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (eventSection) {
			observer.observe(eventSection);
		}

		return () => {
			if (eventSection) {
				observer.unobserve(eventSection);
			}
		};
	});

	function nextSlide() {
		if (currentSlide < events.length - 1) {
			currentSlide++;
		}
	}

	function prevSlide() {
		if (currentSlide > 0) {
			currentSlide--;
		}
	}

	function goToSlide(index: number) {
		currentSlide = index;
	}
</script>

<section
	bind:this={eventSection}
	id="event-ormawa"
	class="section-padding-x bg-size relative overflow-hidden bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] py-12"
>
	{#if elementsVisible.backgroundLeft}
		<div
			class="absolute top-40 -left-24 md:top-12 lg:-left-24 xl:-left-48"
			in:fly={{ x: -100, duration: 1000, delay: 0 }}
		>
			<img
				src="/img/elements/batik-kuning-1.png"
				alt="Batik Kuning"
				class="animate-float-left w-60 md:w-80 lg:w-108 xl:w-144"
			/>
		</div>
	{/if}

	{#if elementsVisible.backgroundRight}
		<div
			class="absolute -right-24 bottom-4 md:top-12 lg:-right-24 xl:-right-48"
			in:fly={{ x: 100, duration: 1000, delay: 0 }}
		>
			<img
				src="/img/elements/batik-kuning-1.png"
				alt="Batik Kuning"
				class="animate-float-right w-60 scale-x-[-1] transform md:w-80 lg:w-108 xl:w-144"
			/>
		</div>
	{/if}

	<div class="container max-w-screen-xl">
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			{#if elementsVisible.ornamentTop}
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Atas"
					class="w-36 md:w-40 lg:w-54"
					in:scale={{ duration: 600, start: 0.8, delay: 0 }}
				/>
			{/if}

			{#if elementsVisible.title}
				<h2
					class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
					in:fly={{ y: 30, duration: 800, delay: 0 }}
				>
					Rangkaian Acara
				</h2>
			{/if}

			{#if elementsVisible.ornamentBottom}
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Bawah"
					class="w-36 scale-y-[-1] transform md:w-40 lg:w-54"
					in:scale={{ duration: 600, start: 0.8, delay: 0 }}
				/>
			{/if}
		</div>

		{#if elementsVisible.eventContainer}
			{#if events && events.length > 0}
				<div class="relative overflow-hidden rounded-lg" in:fade={{ duration: 800, delay: 0 }}>
					<!-- Slider Container -->
					<div
						class="flex transition-transform duration-500 ease-in-out"
						style="transform: translateX(-{currentSlide * 100}%)"
					>
						{#each events as event, index}
							<div class="w-full flex-shrink-0 px-4">
								<div class="event-card mx-auto max-w-2xl rounded-lg bg-white p-6">
									<div class="mb-4 flex">
										<div
											class="bg-rose-s3-base event-number mr-3 flex aspect-square h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
										>
											{index + 1}
										</div>
										<h3 class="text-rose-s3-base text-xl font-semibold">{event.title}</h3>
									</div>
									<p class="leading-relaxed text-gray-700">{event.description}</p>
								</div>
							</div>
						{/each}
					</div>

					<!-- Navigation buttons - Only show if more than 1 event -->
					{#if events.length > 1}
						<button
							on:click={prevSlide}
							class="bg-rose-s3-base absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-all hover:scale-110 hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
							disabled={currentSlide === 0}
							aria-label="Previous event"
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
							on:click={nextSlide}
							class="bg-rose-s3-base absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-all hover:scale-110 hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
							disabled={currentSlide === events.length - 1}
							aria-label="Next event"
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

						<!-- Dots indicator -->
						<div class="mt-6 flex justify-center space-x-2">
							{#each events as _, index}
								<button
									on:click={() => goToSlide(index)}
									class="h-3 w-3 rounded-full transition-all duration-300 {currentSlide === index
										? 'bg-rose-s3-base scale-125'
										: 'bg-gray-300 hover:bg-gray-400'}"
									aria-label="Go to event {index + 1}"
								/>
							{/each}
						</div>

						<!-- Event counter -->
						<div class="mt-4 text-center text-sm text-gray-600">
							{currentSlide + 1} / {events.length}
						</div>
					{/if}
				</div>
			{:else}
				<div class="py-12 text-center" in:scale={{ duration: 600, start: 0.9, delay: 0 }}>
					<div class="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">
						<div class="mb-4 text-4xl text-gray-400">📅</div>
						<h3 class="mb-2 text-xl font-semibold text-gray-700">Belum Ada Acara</h3>
						<p class="text-gray-500">
							Rangkaian acara akan segera diumumkan. Pantai terus halaman ini!
						</p>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</section>

<style>
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

	@keyframes float-left {
		0%,
		100% {
			transform: translateY(0px) translateX(0px);
		}
		50% {
			transform: translateY(-10px) translateX(-5px);
		}
	}

	@keyframes float-right {
		0%,
		100% {
			transform: translateY(0px) translateX(0px) scaleX(-1);
		}
		50% {
			transform: translateY(-10px) translateX(5px) scaleX(-1);
		}
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 3s ease-in-out infinite;
	}

	.animate-pulse-gentle-delayed {
		animation: pulse-gentle-delayed 3s ease-in-out infinite 0.5s;
	}

	.animate-float-left {
		animation: float-left 4s ease-in-out infinite 1s;
	}

	.animate-float-right {
		animation: float-right 4s ease-in-out infinite 1.5s;
	}
</style>
