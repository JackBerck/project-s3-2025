<script lang="ts">
	export let events: {
		title: string;
		description: string;
	}[] = [];

	let currentSlide = 0;

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

	// Auto-play functionality (optional)
	// import { onMount, onDestroy } from 'svelte';
	// let autoPlayInterval: NodeJS.Timeout;

	// onMount(() => {
	// 	if (events.length > 1) {
	// 		autoPlayInterval = setInterval(() => {
	// 			currentSlide = (currentSlide + 1) % events.length;
	// 		}, 5000);
	// 	}
	// });

	// onDestroy(() => {
	// 	if (autoPlayInterval) {
	// 		clearInterval(autoPlayInterval);
	// 	}
	// });
</script>

<section
	id="event-ormawa"
	class="section-padding-x bg-size relative bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] py-12 overflow-hidden"
>
	<div class="absolute top-40 -left-24 md:top-12 lg:-left-24 xl:-left-48">
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="w-60 md:w-80 lg:w-108 xl:w-144"
		/>
	</div>
	<div class="absolute bottom-4 -right-24 md:top-12 lg:-right-24 xl:-right-48">
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="w-60 md:w-80 lg:w-108 xl:w-144 scale-x-[-1] transform"
		/>
	</div>

	<div class="container max-w-screen-xl">
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="animate-fade-in w-36 md:w-40 lg:w-54"
			/>
			<h2
				class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
			>
				Rangkaian Acara
			</h2>
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="animate-fade-in w-36 scale-y-[-1] transform md:w-40 lg:w-54"
			/>
		</div>

		{#if events && events.length > 0}
			<div class="relative overflow-hidden rounded-lg">
				<!-- Slider Container -->
				<div
					class="flex transition-transform duration-500 ease-in-out"
					style="transform: translateX(-{currentSlide * 100}%)"
				>
					{#each events as event, index}
						<div class="w-full flex-shrink-0 px-4">
							<div
								class="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
							>
								<div class="mb-4 flex">
									<div
										class="bg-rose-s3-base mr-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white aspect-square"
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
						class="bg-rose-s3-base absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-all hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
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
						class="bg-rose-s3-base absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-all hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
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
								class="h-3 w-3 rounded-full transition-colors duration-200 {currentSlide === index
									? 'bg-rose-s3-base'
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
			<div class="py-12 text-center">
				<div class="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">
					<div class="mb-4 text-4xl text-gray-400">📅</div>
					<h3 class="mb-2 text-xl font-semibold text-gray-700">Belum Ada Acara</h3>
					<p class="text-gray-500">
						Rangkaian acara akan segera diumumkan. Pantau terus halaman ini!
					</p>
				</div>
			</div>
		{/if}
	</div>
</section>

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
</style>
