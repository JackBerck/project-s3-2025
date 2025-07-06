<script>
	import { onMount } from 'svelte';
	import { backIn } from 'svelte/easing';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	let mounted = false;

	onMount(() => {
		mounted = true;
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			delay: 0
		});
	});
</script>

<svelte:head>
	<title>Coming Soon | Soedirman Student Summit (S3) 2025</title>
</svelte:head>

<section
	id="cooming-soon"
	class="section-padding-x relative min-h-screen overflow-hidden pt-32 pb-16"
>
	<!-- Floating Background Icons -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Large floating stars -->
		<div
			class="floating-icon text-rose-s3-secondary/20 absolute top-20 left-10"
			style="animation-delay: 0s; animation-duration: 6s;"
		>
			<svg class="h-12 w-12 md:h-16 md:w-16" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
				/>
			</svg>
		</div>

		<div
			class="floating-icon text-rose-s3-base/15 absolute top-40 right-16"
			style="animation-delay: 1s; animation-duration: 8s;"
		>
			<svg class="h-8 w-8 md:h-12 md:w-12" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
				/>
			</svg>
		</div>

		<div
			class="floating-icon text-rose-s3-secondary/25 absolute bottom-40 left-20"
			style="animation-delay: 2s; animation-duration: 7s;"
		>
			<svg class="h-10 w-10 md:h-14 md:w-14" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
				/>
			</svg>
		</div>

		<!-- Sparkle icons -->
		<div
			class="sparkle-icon absolute top-32 right-32 text-yellow-400/30"
			style="animation-delay: 0.5s;"
		>
			<svg class="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M21 12.1818L16.9354 13.6599C16.3462 13.8741 15.8916 14.3521 15.7073 14.9513L14.1538 20C14.1072 20.1515 13.8928 20.1515 13.8461 20L12.2927 14.9513C12.1083 14.3521 11.6537 13.8741 11.0646 13.6599L6.99999 12.1818C6.83019 12.1201 6.83019 11.8799 6.99999 11.8182L11.0646 10.3401C11.6537 10.1259 12.1083 9.64786 12.2927 9.04872L13.8461 4C13.8928 3.8485 14.1072 3.8485 14.1538 4L15.7073 9.04872C15.8916 9.64786 16.3462 10.1259 16.9354 10.3401L21 11.8182C21.1698 11.8799 21.1698 12.1201 21 12.1818Z"
				/>
			</svg>
		</div>

		<div
			class="sparkle-icon absolute right-10 bottom-60 text-blue-400/25"
			style="animation-delay: 1.5s;"
		>
			<svg class="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M21 12.1818L16.9354 13.6599C16.3462 13.8741 15.8916 14.3521 15.7073 14.9513L14.1538 20C14.1072 20.1515 13.8928 20.1515 13.8461 20L12.2927 14.9513C12.1083 14.3521 11.6537 13.8741 11.0646 13.6599L6.99999 12.1818C6.83019 12.1201 6.83019 11.8799 6.99999 11.8182L11.0646 10.3401C11.6537 10.1259 12.1083 9.64786 12.2927 9.04872L13.8461 4C13.8928 3.8485 14.1072 3.8485 14.1538 4L15.7073 9.04872C15.8916 9.64786 16.3462 10.1259 16.9354 10.3401L21 11.8182C21.1698 11.8799 21.1698 12.1201 21 12.1818Z"
				/>
			</svg>
		</div>

		<div
			class="sparkle-icon absolute top-60 left-32 text-green-400/20"
			style="animation-delay: 2.5s;"
		>
			<svg class="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M21 12.1818L16.9354 13.6599C16.3462 13.8741 15.8916 14.3521 15.7073 14.9513L14.1538 20C14.1072 20.1515 13.8928 20.1515 13.8461 20L12.2927 14.9513C12.1083 14.3521 11.6537 13.8741 11.0646 13.6599L6.99999 12.1818C6.83019 12.1201 6.83019 11.8799 6.99999 11.8182L11.0646 10.3401C11.6537 10.1259 12.1083 9.64786 12.2927 9.04872L13.8461 4C13.8928 3.8485 14.1072 3.8485 14.1538 4L15.7073 9.04872C15.8916 9.64786 16.3462 10.1259 16.9354 10.3401L21 11.8182C21.1698 11.8799 21.1698 12.1201 21 12.1818Z"
				/>
			</svg>
		</div>

		<!-- Small circles -->
		<div
			class="floating-circle bg-rose-s3-base/20 absolute top-24 left-1/3 h-3 w-3 rounded-full md:h-4 md:w-4"
			style="animation-delay: 1s; animation-duration: 5s;"
		></div>
		<div
			class="floating-circle absolute bottom-32 left-1/4 h-2 w-2 rounded-full bg-yellow-400/30 md:h-3 md:w-3"
			style="animation-delay: 2s; animation-duration: 6s;"
		></div>
		<div
			class="floating-circle absolute top-1/2 right-1/4 h-4 w-4 rounded-full bg-blue-400/25 md:h-5 md:w-5"
			style="animation-delay: 0.5s; animation-duration: 7s;"
		></div>

		<!-- Geometric shapes -->
		<div
			class="floating-triangle absolute bottom-20 left-16 text-purple-400/20"
			style="animation-delay: 1.5s; animation-duration: 8s;"
		>
			<svg class="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 2l10 20H2L12 2z" />
			</svg>
		</div>

		<div
			class="floating-square absolute top-16 right-20 h-6 w-6 rotate-45 transform rounded-lg bg-orange-400/20 md:h-8 md:w-8"
			style="animation-delay: 2s; animation-duration: 6s;"
		></div>
	</div>

	<div class="relative z-10 container max-w-screen-xl">
		<div class="flex flex-col items-center justify-center gap-6 md:gap-8">
			<!-- Main Star Icon with Enhanced Animation -->
			<div
				class="main-star-container"
				data-aos="zoom-in"
				data-aos-duration="1000"
				data-aos-delay="200"
			>
				<div
					class="bg-rose-s3-secondary main-star-wrapper rounded-full p-12 shadow-2xl md:p-16 lg:p-20"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="main-star aspect-square h-16 w-16 text-transparent md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							opacity="0.1"
							d="M21 12.1818L16.9354 13.6599C16.3462 13.8741 15.8916 14.3521 15.7073 14.9513L14.1538 20C14.1072 20.1515 13.8928 20.1515 13.8461 20L12.2927 14.9513C12.1083 14.3521 11.6537 13.8741 11.0646 13.6599L6.99999 12.1818C6.83019 12.1201 6.83019 11.8799 6.99999 11.8182L11.0646 10.3401C11.6537 10.1259 12.1083 9.64786 12.2927 9.04872L13.8461 4C13.8928 3.8485 14.1072 3.8485 14.1538 4L15.7073 9.04872C15.8916 9.64786 16.3462 10.1259 16.9354 10.3401L21 11.8182C21.1698 11.8799 21.1698 12.1201 21 12.1818Z"
							fill="#f8fafc"
						/>
						<path
							d="M21 12.1818L16.9354 13.6599C16.3462 13.8741 15.8916 14.3521 15.7073 14.9513L14.1538 20C14.1072 20.1515 13.8928 20.1515 13.8461 20L12.2927 14.9513C12.1083 14.3521 11.6537 13.8741 11.0646 13.6599L6.99999 12.1818C6.83019 12.1201 6.83019 11.8799 6.99999 11.8182L11.0646 10.3401C11.6537 10.1259 12.1083 9.64786 12.2927 9.04872L13.8461 4C13.8928 3.8485 14.1072 3.8485 14.1538 4L15.7073 9.04872C15.8916 9.64786 16.3462 10.1259 16.9354 10.3401L21 11.8182C21.1698 11.8799 21.1698 12.1201 21 12.1818Z"
							stroke="#f8fafc"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M3.75 5.25C4.22214 5.40738 4.59262 5.77786 4.75 6.25C4.83008 6.49025 5.16992 6.49025 5.25 6.25C5.40738 5.77786 5.77786 5.40738 6.25 5.25C6.49025 5.16992 6.49025 4.83008 6.25 4.75C5.77786 4.59262 5.40738 4.22214 5.25 3.75C5.16992 3.50975 4.83008 3.50975 4.75 3.75C4.59262 4.22214 4.22214 4.59262 3.75 4.75C3.50975 4.83008 3.50975 5.16992 3.75 5.25Z"
							stroke="#f8fafc"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M7.25 19.25C6.77786 19.4074 6.40738 19.7779 6.25 20.25C6.16992 20.4903 5.83008 20.4903 5.75 20.25C5.59262 19.7779 5.22214 19.4074 4.75 19.25C4.50975 19.1699 4.50975 18.8301 4.75 18.75C5.22214 18.5926 5.59262 18.2221 5.75 17.75C5.83008 17.5097 6.16992 17.5097 6.25 17.75C6.40738 18.2221 6.77786 18.5926 7.25 18.75C7.49025 18.8301 7.49025 19.1699 7.25 19.25Z"
							stroke="#f8fafc"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>

			<!-- Animated Title -->
			<h1
				class="animated-title font-junigarden-swash text-center text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="600"
			>
				<span class="letter" style="animation-delay: 0.1s;">C</span>
				<span class="letter" style="animation-delay: 0.2s;">o</span>
				<span class="letter" style="animation-delay: 0.3s;">m</span>
				<span class="letter" style="animation-delay: 0.4s;">i</span>
				<span class="letter" style="animation-delay: 0.5s;">n</span>
				<span class="letter" style="animation-delay: 0.6s;">g</span>
				<span class="letter" style="animation-delay: 0.7s;">&nbsp;</span>
				<span class="letter" style="animation-delay: 0.8s;">S</span>
				<span class="letter" style="animation-delay: 0.9s;">o</span>
				<span class="letter" style="animation-delay: 1.0s;">o</span>
				<span class="letter" style="animation-delay: 1.1s;">n</span>
			</h1>

			<!-- Description with Typewriter Effect -->
			<p
				class="typewriter max-w-2xl text-center text-base font-medium text-wrap text-gray-800 md:text-lg"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="1200"
			>
				Halaman ini akan segera hadir dengan informasi terbaru tentang Soedirman Student Summit
				(S3). Terima kasih atas kesabaran Anda! Kami tidak sabar untuk berbagi lebih banyak dengan
				Anda.
			</p>

			<!-- Enhanced Buttons -->
			<div
				class="mt-4 flex flex-col justify-center gap-4 sm:flex-row md:gap-8"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="1600"
			>
				<a
					href="/"
					class="group bg-rose-s3-base hover:bg-rose-s3-dark inline-flex transform items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl md:px-8 md:text-lg"
				>
					<svg
						class="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					Kembali ke Beranda
				</a>
				<a
					href="/contact-us"
					class="group inline-flex transform items-center justify-center rounded-full bg-gray-200 px-6 py-3 text-base font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gray-300 md:px-8 md:text-lg"
				>
					<svg
						class="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
					</svg>
					Hubungi Kami
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Floating animations for background elements */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		33% {
			transform: translateY(-20px) rotate(10deg);
		}
		66% {
			transform: translateY(10px) rotate(-5deg);
		}
	}

	@keyframes sparkle {
		0%,
		100% {
			transform: scale(1) rotate(0deg);
			opacity: 0.3;
		}
		50% {
			transform: scale(1.2) rotate(180deg);
			opacity: 1;
		}
	}

	@keyframes pulse-glow {
		0%,
		100% {
			box-shadow: 0 0 20px rgba(226, 60, 100, 0.3);
		}
		50% {
			box-shadow: 0 0 40px rgba(226, 60, 100, 0.6);
		}
	}

	/* Main star animation */
	@keyframes starRotate {
		0% {
			transform: rotate(0deg) scale(1);
		}
		50% {
			transform: rotate(180deg) scale(1.1);
		}
		100% {
			transform: rotate(360deg) scale(1);
		}
	}

	@keyframes letterBounce {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes typewriter {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}

	/* Apply animations */
	.floating-icon {
		animation: float infinite ease-in-out;
	}

	.sparkle-icon {
		animation: sparkle 3s infinite ease-in-out;
	}

	.floating-circle,
	.floating-triangle,
	.floating-square {
		animation: float infinite ease-in-out;
	}

	.main-star-wrapper {
		animation: pulse-glow 2s infinite ease-in-out;
	}

	.main-star {
		animation: starRotate 8s infinite ease-in-out;
	}

	.main-star-container:hover .main-star {
		animation-duration: 2s;
	}

	.letter {
		display: inline-block;
		animation: letterBounce 2s infinite ease-in-out;
	}

	.animated-title:hover .letter {
		animation-duration: 0.5s;
	}

	.typewriter {
		overflow: hidden;
		border-right: 2px solid #e23c64;
		animation:
			typewriter 3s steps(200) 1.5s 1 normal both,
			blink 1s infinite;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.floating-icon,
		.sparkle-icon {
			display: none;
		}

		.floating-circle,
		.floating-triangle,
		.floating-square {
			transform: scale(0.7);
		}
	}

	@media (max-width: 768px) {
		.floating-icon {
			transform: scale(0.8);
		}
	}

	/* Reduce motion for accessibility */
	@media (prefers-reduced-motion: reduce) {
		.floating-icon,
		.sparkle-icon,
		.floating-circle,
		.floating-triangle,
		.floating-square,
		.main-star,
		.letter,
		.typewriter {
			animation: none !important;
		}

		.main-star-wrapper {
			animation: none !important;
			box-shadow: 0 0 20px rgba(226, 60, 100, 0.3);
		}
	}
</style>
