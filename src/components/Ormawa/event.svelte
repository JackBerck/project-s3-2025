<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export let events: {
		title: string;
		description: string;
	}[] = [];

	let currentSlide = 0;

	onMount(() => {
		// Initialize AOS for this component
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 50,
			delay: 0
		});
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
	id="event-ormawa"
	class="section-padding-x bg-size relative overflow-hidden bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] py-12"
>
	<div
		class="absolute top-40 -left-24 md:top-12 lg:-left-24 xl:-left-48"
		data-aos="fade-right"
		data-aos-duration="1000"
		data-aos-delay="100"
	>
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="animate-float-left w-60 md:w-80 lg:w-108 xl:w-144"
		/>
	</div>

	<div
		class="absolute -right-24 bottom-4 md:top-12 lg:-right-24 xl:-right-48"
		data-aos="fade-left"
		data-aos-duration="1000"
		data-aos-delay="200"
	>
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="animate-float-right w-60 transform md:w-80 lg:w-108 xl:w-144"
		/>
	</div>

	<div class="container max-w-screen-xl">
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="w-36 md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="400"
			/>

			<h2
				class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="600"
			>
				Rangkaian Acara
			</h2>

			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="w-36 scale-y-[-1] transform md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="800"
			/>
		</div>

		{#if events && events.length > 0}
			<div
				class="relative overflow-hidden rounded-lg"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="1000"
			>
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
			<div
				class="py-12 text-center"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="1000"
			>
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

	.animate-float-left {
		animation: float-left 4s ease-in-out infinite 1s;
	}

	.animate-float-right {
		animation: float-right 4s ease-in-out infinite 1.5s;
		transform: scaleX(-1);
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}

		.animate-float-left,
		.animate-float-right {
			animation: none;
		}
	}
</style>
