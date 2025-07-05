<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import HomeSomethinInterestingStatistics from './statistics.svelte';

	let days: number = 0;
	let hours: number = 0;
	let minutes: number = 0;
	let seconds: number = 0;
	let interval: number | null = null;
	let statisticsComponent: HomeSomethinInterestingStatistics;

	const targetDate: Date = new Date('2025-08-11T00:00:00');

	function updateCountdown(): void {
		const now: Date = new Date();
		const difference: number = targetDate.getTime() - now.getTime();

		if (difference > 0) {
			days = Math.floor(difference / (1000 * 60 * 60 * 24));
			hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((difference % (1000 * 60)) / 1000);
		} else {
			days = hours = minutes = seconds = 0;
		}
	}

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		updateCountdown();
		interval = setInterval(updateCountdown, 1000);

		return () => {
			// Cleanup handled in onDestroy
		};
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<section
	id="something-interesting-home"
	class="section-padding-x text-light-base to-rose-s3-secondary relative bg-gradient-to-b from-[#FEB3C5] to-30% pt-8 pb-16 lg:pt-64"
>
	<!-- Background Rusa -->
	<div
		class="absolute -top-44 left-0 z-10 md:-top-96 lg:-top-72 xl:-top-144"
		data-aos="fade-down"
		data-aos-duration="1000"
		data-aos-delay="100"
	>
		<img
			src="/img/elements/rusa-dan-pepohonan.png"
			alt="Rusa dan Gunung"
			class="animate-slide-down w-full"
		/>
	</div>

	<!-- Background Candi -->
	<div
		class="absolute bottom-0 left-1/2 z-10 max-w-screen-lg -translate-x-1/2 transform"
		data-aos="zoom-in"
		data-aos-duration="1000"
		data-aos-delay="200"
	>
		<img
			src="/img/elements/candi-prambanan.png"
			alt="Mountain and tree decoration"
			class="animate-rise-up w-full"
		/>
	</div>

	<div class="relative z-20 container max-w-screen-xl">
		<!-- Title -->
		<h2
			class="font-junigarden-swash text-center"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="400"
		>
			Sesuatu yang Menarik Akan Menghampiri Kamu
		</h2>

		<p
			class="medium-font-size mt-8 text-center font-medium"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="600"
		>
			Soedirman Student Summit hampir tiba, mari kita mulai petualangan luar biasa ini bersama-sama!
		</p>

		<!-- Countdown Cards -->
		<div
			class="mt-4 grid grid-cols-2 items-center justify-center gap-4 md:mt-8 md:grid-cols-4 md:gap-8 lg:gap-16 xl:mt-16"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="800"
		>
			{#each [{ value: days, label: 'Hari' }, { value: hours, label: 'Jam' }, { value: minutes, label: 'Menit' }, { value: seconds, label: 'Detik' }] as item, index}
				<div
					class="text-light-base countdown-card relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
					data-aos="zoom-in"
					data-aos-duration="600"
					data-aos-delay={1000 + index * 150}
				>
					<div
						class="absolute inset-0 flex items-center justify-center bg-yellow-400/80 backdrop-blur-sm"
					>
						<div
							class="animate-bounce-subtle -rotate-12 transform rounded bg-red-600 px-4 py-2 text-sm font-bold text-white"
						>
							TO BE ANNOUNCED
						</div>
					</div>
					<p class="font-junigarden text-center text-base opacity-30 md:text-xl lg:text-3xl">
						{item.label}
					</p>
				</div>
			{/each}
		</div>

		<!-- Maps -->
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.550961290375!2d109.24630527116395!3d-7.404103139378457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655efa9b11331f%3A0x13ecfa29476eb9bb!2sUniversitas%20Jenderal%20Soedirman!5e0!3m2!1sid!2sid!4v1751420997915!5m2!1sid!2sid"
			style="border:0;"
			allowfullscreen
			loading="lazy"
			title="Universitas Jenderal Soedirman Location"
			referrerpolicy="no-referrer-when-downgrade"
			class="maps-frame mt-8 h-96 w-full rounded-lg shadow-lg"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="1600"
		></iframe>

		<!-- Statistics -->
		<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1800">
			<HomeSomethinInterestingStatistics bind:this={statisticsComponent} />
		</div>
	</div>
</section>

<style>
	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-50px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes rise-up {
		from {
			opacity: 0;
			transform: translateY(30px) scale(0.9);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes bounce-subtle {
		0%,
		100% {
			transform: translateY(0) rotate(-12deg);
		}
		50% {
			transform: translateY(-5px) rotate(-12deg);
		}
	}

	.animate-slide-down {
		animation: slide-down 1s ease-out forwards;
	}

	.animate-rise-up {
		animation: rise-up 1s ease-out forwards;
	}

	.animate-bounce-subtle {
		animation: bounce-subtle 2s ease-in-out infinite;
	}

	.countdown-card {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.countdown-card:hover {
		transform: translateY(-5px) scale(1.02);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.maps-frame {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.maps-frame:hover {
		transform: scale(1.02);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	/* Enhanced glassmorphism effect */
	.countdown-card {
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.1);
	}

	/* Responsive enhancements */
	@media (max-width: 768px) {
		.countdown-card {
			padding: 1.5rem;
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

		.animate-slide-down,
		.animate-rise-up,
		.animate-bounce-subtle {
			animation: none;
		}
	}
</style>
