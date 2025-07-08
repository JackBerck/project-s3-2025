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

		<!-- Maps Section - Enhanced Design -->
		<div
			class="maps-container relative mt-12 w-full"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="1600"
		>
			<!-- Main Maps Frame -->
			<div class="maps-frame relative h-96 w-full overflow-hidden rounded-3xl shadow-2xl">
				<!-- Animated Background Gradient -->
				<div
					class="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90"
				>
					<!-- Animated Gradient Overlay -->
					<div
						class="animate-gradient-shift absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-yellow-400/30"
					></div>
				</div>

				<!-- Floating Map Grid Background -->
				<div class="absolute inset-0 opacity-10">
					<svg class="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
								<path
									d="M 40 0 L 0 0 0 40"
									fill="none"
									stroke="white"
									stroke-width="1"
									opacity="0.3"
								/>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#grid)" />
					</svg>
				</div>

				<!-- Central Content -->
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="relative mx-4 max-w-sm text-center">
						<!-- Pulsing Background Circle -->
						<div
							class="animate-pulse-slow absolute -inset-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl"
						></div>
						<div
							class="animate-pulse-slow absolute -inset-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg"
							style="animation-delay: 0.5s;"
						></div>

						<!-- Location Icon with Animation -->
						<div class="relative mb-6 flex justify-center">
							<div class="relative">
								<!-- Icon Background -->
								<div class="absolute inset-0 animate-ping rounded-full bg-white/30"></div>
								<div
									class="relative rounded-full border border-white/30 bg-white/20 p-4 backdrop-blur-md"
								>
									<svg
										class="animate-float h-12 w-12 text-white"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
										/>
									</svg>
								</div>
							</div>
						</div>

						<!-- Mystery Location Text -->
						<div class="relative space-y-4">
							<div class="animate-typewriter">
								<h3
									class="font-junigarden text-3xl font-bold text-white drop-shadow-lg md:text-4xl"
								>
									Lokasi Rahasia
								</h3>
							</div>

							<!-- Interactive Badge -->
							<div class="group cursor-pointer">
								<div
									class="mx-auto w-fit transform rounded-full border-2 border-white/40 bg-white/25 px-8 py-3 font-bold text-white shadow-lg backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-white/60 hover:bg-white/35"
								>
									<div class="flex items-center gap-3">
										<span class="animate-bounce text-xl">📍</span>
										<span class="tracking-wider">COMING SOON</span>
										<span class="animate-spin text-lg">✨</span>
									</div>
								</div>
							</div>

							<p class="font-medium text-white/90 drop-shadow-md md:text-lg">
								Tempat yang menakjubkan sedang menanti
							</p>

							<!-- Progress Bar -->
							<div class="mx-auto mt-4 w-48">
								<div class="h-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
									<div
										class="animate-progress h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-inner"
										style="width: 65%"
									></div>
								</div>
								<p class="mt-2 text-sm font-medium text-white/80">65% Ready to Reveal</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Corner Decorative Elements -->
				<div class="absolute top-4 left-4">
					<div class="relative">
						<div class="h-8 w-8 animate-ping rounded-full bg-white/20"></div>
						<div class="absolute inset-0 h-8 w-8 animate-pulse rounded-full bg-white/40"></div>
					</div>
				</div>

				<div class="absolute top-6 right-6">
					<div class="relative">
						<div
							class="h-6 w-6 animate-ping rounded-full bg-yellow-400/30"
							style="animation-delay: 1s;"
						></div>
						<div
							class="absolute inset-0 h-6 w-6 animate-pulse rounded-full bg-yellow-400/60"
							style="animation-delay: 1s;"
						></div>
					</div>
				</div>

				<div class="absolute bottom-6 left-8">
					<div class="relative">
						<div
							class="h-10 w-10 animate-ping rounded-full bg-pink-400/20"
							style="animation-delay: 2s;"
						></div>
						<div
							class="absolute inset-0 h-10 w-10 animate-pulse rounded-full bg-pink-400/50"
							style="animation-delay: 2s;"
						></div>
					</div>
				</div>

				<div class="absolute right-4 bottom-4">
					<div class="relative">
						<div
							class="h-5 w-5 animate-ping rounded-full bg-blue-400/30"
							style="animation-delay: 0.5s;"
						></div>
						<div
							class="absolute inset-0 h-5 w-5 animate-pulse rounded-full bg-blue-400/70"
							style="animation-delay: 0.5s;"
						></div>
					</div>
				</div>

				<!-- Floating Geometric Shapes -->
				<div class="absolute top-1/4 left-1/4 opacity-20">
					<div class="animate-float-delayed h-8 w-8 rotate-45 bg-white"></div>
				</div>

				<div class="absolute top-3/4 right-1/4 opacity-15">
					<div class="animate-float-delayed-2 h-6 w-6 rotate-12 bg-white/60"></div>
				</div>

				<div class="absolute top-1/2 left-1/6 opacity-25">
					<svg
						class="animate-rotate-slow h-6 w-6 text-white"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
						/>
					</svg>
				</div>

				<!-- Interactive Ripple Effect -->
				<div class="pointer-events-none absolute inset-0">
					<div
						class="ripple-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
					></div>
				</div>
			</div>
		</div>

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
        0%, 100% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
        }
        50% {
            transform: translateX(-30%) translateY(-70%) rotate(180deg);
        }
    }

    @keyframes pulse-slow {
        0%, 100% {
            opacity: 0.1;
            transform: scale(1);
        }
        50% {
            opacity: 0.3;
            transform: scale(1.05);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-8px);
        }
    }

    @keyframes float-delayed {
        0%, 100% {
            transform: translateY(0px) rotate(45deg);
        }
        50% {
            transform: translateY(-10px) rotate(45deg);
        }
    }

    @keyframes float-delayed-2 {
        0%, 100% {
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
