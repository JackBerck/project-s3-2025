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
			src="/img/elements/rusa-dan-pepohonan.webp"
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
			src="/img/elements/candi-prambanan.webp"
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
			Derap langkah pertama, segera menggema
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
			data-aos-duration="800"
			data-aos-delay="800"
			class="mt-4 grid grid-cols-2 items-center justify-center gap-4 md:mt-8 md:grid-cols-4 md:gap-8 lg:gap-16 xl:mt-16"
		>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md countdown-card"
			>
				<p class="text-xl md:text-4xl lg:text-5xl xl:text-7xl">{days}</p>
				<p class="text-center text-base md:text-xl lg:text-3xl">Hari</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
			>
				<p class="text-xl md:text-4xl lg:text-5xl xl:text-7xl">{hours}</p>
				<p class="text-center text-base md:text-xl lg:text-3xl">Jam</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
			>
				<p class="text-xl md:text-4xl lg:text-5xl xl:text-7xl">{minutes}</p>
				<p class="text-center text-base md:text-xl lg:text-3xl">Menit</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
			>
				<p class="text-xl md:text-4xl lg:text-5xl xl:text-7xl">{seconds}</p>
				<p class="text-center text-base md:text-xl lg:text-3xl">Detik</p>
			</div>
		</div>

		<!-- Maps Section - Enhanced Design -->
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5777589413597!2d109.24338147476195!3d-7.401116292608889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655efac390f311%3A0x965886172572b2bc!2sAuditorium%20Graha%20Widyatama%20Prof%20Rubijanto%20Misman%20Unsoed!5e0!3m2!1sid!2sid!4v1754540529038!5m2!1sid!2sid"
			style="border:0;"
			allowfullscreen
			loading="lazy"
			title="Universitas Jenderal Soedirman Location"
			referrerpolicy="no-referrer-when-downgrade"
			class="mt-8 h-96 w-full rounded-lg shadow-lg"
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

	@keyframes gradient-shift {
		0%,
		100% {
			transform: translateX(-50%) translateY(-50%) rotate(0deg);
		}
		50% {
			transform: translateX(-30%) translateY(-70%) rotate(180deg);
		}
	}

	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 0.1;
			transform: scale(1);
		}
		50% {
			opacity: 0.3;
			transform: scale(1.05);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	@keyframes float-delayed {
		0%,
		100% {
			transform: translateY(0px) rotate(45deg);
		}
		50% {
			transform: translateY(-10px) rotate(45deg);
		}
	}

	@keyframes float-delayed-2 {
		0%,
		100% {
			transform: translateY(0px) rotate(12deg);
		}
		50% {
			transform: translateY(-6px) rotate(12deg);
		}
	}

	@keyframes rotate-slow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes progress {
		0% {
			width: 0%;
		}
		100% {
			width: 65%;
		}
	}

	@keyframes typewriter {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes ripple {
		0% {
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			width: 300px;
			height: 300px;
			opacity: 0;
		}
	}

	/* Apply animations */
	.animate-gradient-shift {
		animation: gradient-shift 8s ease-in-out infinite;
	}

	.animate-pulse-slow {
		animation: pulse-slow 3s ease-in-out infinite;
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}

	.animate-float-delayed {
		animation: float-delayed 4s ease-in-out infinite 1s;
	}

	.animate-float-delayed-2 {
		animation: float-delayed-2 5s ease-in-out infinite 2s;
	}

	.animate-rotate-slow {
		animation: rotate-slow 10s linear infinite;
	}

	.animate-progress {
		animation: progress 3s ease-out forwards;
	}

	.animate-typewriter {
		animation: typewriter 1s ease-out forwards;
	}

	/* Maps container enhancements */
	.maps-container {
		position: relative;
	}

	.maps-frame {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.maps-frame:hover {
		transform: scale(1.02) translateY(-4px);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
	}

	/* Ripple effect */
	.ripple-effect {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		animation: ripple 2s infinite;
	}

	/* Info cards */
	.info-card {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.info-card:hover {
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.maps-frame {
			height: 320px;
		}

		.maps-container .floating-shapes {
			display: none;
		}
	}

	/* Reduce motion for accessibility */
	@media (prefers-reduced-motion: reduce) {
		.animate-gradient-shift,
		.animate-pulse-slow,
		.animate-float,
		.animate-float-delayed,
		.animate-float-delayed-2,
		.animate-rotate-slow,
		.animate-progress,
		.animate-typewriter,
		.ripple-effect {
			animation: none !important;
		}

		.maps-frame:hover {
			transform: none;
		}
	}
</style>
