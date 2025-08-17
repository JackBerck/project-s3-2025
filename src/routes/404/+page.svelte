<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	onMount(() => {
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});
	});

	$: statusCode = $page.error?.status || 404;

	// Custom error messages based on status code
	$: errorInfo = getErrorInfo(statusCode);

	function getErrorInfo(code: number) {
		switch (code) {
			case 400:
				return {
					title: 'Bad Request',
					message:
						'Permintaan yang Anda kirim tidak valid. Mungkin ada kesalahan dalam format data yang dikirim.',
					emoji: '🤔',
					color: 'text-orange-500'
				};
			case 401:
				return {
					title: 'Unauthorized',
					message:
						'Anda tidak memiliki izin untuk mengakses halaman ini. Silakan login terlebih dahulu.',
					emoji: '🔐',
					color: 'text-red-500'
				};
			case 403:
				return {
					title: 'Forbidden',
					message: 'Akses ke halaman ini dibatasi. Anda tidak memiliki permission yang diperlukan.',
					emoji: '🚫',
					color: 'text-red-600'
				};
			case 404:
				return {
					title: 'Not Found',
					message:
						'Halaman yang Anda cari tidak ditemukan atau mungkin telah dipindahkan ke lokasi lain.',
					emoji: '🔍',
					color: 'text-blue-500'
				};
			case 500:
				return {
					title: 'Internal Server Error',
					message:
						'Terjadi kesalahan pada server kami. Tim teknis sedang bekerja untuk memperbaikinya.',
					emoji: '⚙️',
					color: 'text-red-500'
				};
			case 502:
				return {
					title: 'Bad Gateway',
					message: 'Server gateway mengalami masalah. Silakan coba lagi dalam beberapa saat.',
					emoji: '🌐',
					color: 'text-purple-500'
				};
			case 503:
				return {
					title: 'Service Unavailable',
					message:
						'Layanan sedang dalam maintenance atau overload. Mohon bersabar dan coba lagi nanti.',
					emoji: '🔧',
					color: 'text-yellow-500'
				};
			default:
				return {
					title: 'Something Went Wrong',
					message:
						'Terjadi kesalahan yang tidak terduga. Kami mohon maaf atas ketidaknyamanan ini.',
					emoji: '😵',
					color: 'text-gray-500'
				};
		}
	}
</script>

<svelte:head>
	<title>Error {statusCode} | Soedirman Student Summit (S3) 2025</title>
	<meta
		name="description"
		content="Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Soedirman Student Summit 2025."
	/>
</svelte:head>

<section id="error" class="section-padding-x relative min-h-screen overflow-hidden pt-32 pb-16">
	<!-- Floating Background Icons -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Error-themed floating icons -->
		<div
			class="floating-icon absolute top-20 left-10 text-red-400/20"
			style="animation-delay: 0s; animation-duration: 6s;"
		>
			<svg class="h-12 w-12 md:h-16 md:w-16" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
				/>
				<path
					d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-1 9h2v2h-2v-2z"
				/>
			</svg>
		</div>

		<div
			class="floating-icon absolute top-40 right-16 text-orange-400/15"
			style="animation-delay: 1s; animation-duration: 8s;"
		>
			<svg class="h-8 w-8 md:h-12 md:w-12" viewBox="0 0 24 24" fill="currentColor">
				<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
			</svg>
		</div>

		<div
			class="floating-icon absolute bottom-40 left-20 text-blue-400/25"
			style="animation-delay: 2s; animation-duration: 7s;"
		>
			<svg class="h-10 w-10 md:h-14 md:w-14" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
				/>
			</svg>
		</div>

		<!-- Question marks -->
		<div
			class="sparkle-icon absolute top-32 right-32 text-purple-400/30"
			style="animation-delay: 0.5s;"
		>
			<svg class="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"
				/>
			</svg>
		</div>

		<div
			class="sparkle-icon absolute right-10 bottom-60 text-yellow-400/25"
			style="animation-delay: 1.5s;"
		>
			<svg class="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"
				/>
			</svg>
		</div>

		<div
			class="sparkle-icon absolute top-60 left-32 text-green-400/20"
			style="animation-delay: 2.5s;"
		>
			<svg class="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V16.2C14.8,17.2 14,18 13,18H11C10,18 9.2,17.2 9.2,16.2V10C9.2,8.6 10.6,7 12,7Z"
				/>
			</svg>
		</div>

		<!-- Small circles with error colors -->
		<div
			class="floating-circle absolute top-24 left-1/3 h-3 w-3 rounded-full bg-red-400/20 md:h-4 md:w-4"
			style="animation-delay: 1s; animation-duration: 5s;"
		></div>
		<div
			class="floating-circle absolute bottom-32 left-1/4 h-2 w-2 rounded-full bg-orange-400/30 md:h-3 md:w-3"
			style="animation-delay: 2s; animation-duration: 6s;"
		></div>
		<div
			class="floating-circle absolute top-1/2 right-1/4 h-4 w-4 rounded-full bg-blue-400/25 md:h-5 md:w-5"
			style="animation-delay: 0.5s; animation-duration: 7s;"
		></div>

		<!-- Geometric shapes -->
		<div
			class="floating-triangle absolute bottom-20 left-16 text-red-400/20"
			style="animation-delay: 1.5s; animation-duration: 8s;"
		>
			<svg class="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="currentColor">
				<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
			</svg>
		</div>

		<div
			class="floating-square absolute top-16 right-20 h-6 w-6 rotate-45 transform rounded-lg bg-purple-400/20 md:h-8 md:w-8"
			style="animation-delay: 2s; animation-duration: 6s;"
		></div>
	</div>

	<div class="relative z-10 container max-w-screen-xl">
		<div class="flex flex-col items-center justify-center gap-6 md:gap-8">
			<!-- Error Code with Animation -->
			<div
				class="error-code-container"
				data-aos="zoom-in"
				data-aos-duration="1000"
				data-aos-delay="200"
			>
				<div
					class="bg-rose-s3-secondary error-icon-wrapper rounded-full p-12 shadow-2xl md:p-16 lg:p-20"
				>
					<div class="relative">
						<!-- Sad face icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="error-icon text-light-base aspect-square h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40"
							fill="currentColor"
						>
							<path
								d="M400 406.1L400 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152.6c-28.7 15-61.4 23.4-96 23.4s-67.3-8.5-96-23.4L160 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 118.1C72.6 368.2 48 315 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 59-24.6 112.2-64 150.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm166.6 9.7c5.5-5.8 14.8-9.7 25.4-9.7s19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C391.7 186.8 371 180 351.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9zM208 320l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z"
							/>
						</svg>
						<!-- Floating status code -->
						<div
							class="floating-status-code absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white md:h-16 md:w-16 md:text-base"
						>
							{statusCode}
						</div>
					</div>
				</div>
			</div>

			<!-- Animated Error Title -->
			<div class="text-center">
				<div
					class="error-status-code font-mono text-6xl font-bold md:text-8xl lg:text-9xl {errorInfo.color} mb-4"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="400"
				>
					<span class="glitch-text" data-text={statusCode}>{statusCode}</span>
				</div>

				<h1
					class="animated-title font-junigarden-swash mb-2 text-center text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="600"
				>
					{#each errorInfo.title.toString().split('') as letter, index}
						<span
							class="letter"
							style="animation-delay: {index * 0.1}s;"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-delay={600 + index * 100}
						>
							{letter}
						</span>
					{/each}
					<span class="letter" style="animation-delay: 0.6s;">&nbsp;</span>
				</h1>
			</div>

			<!-- Error Message with Typewriter Effect -->
			<p
				class="typewriter max-w-2xl text-center text-base font-medium text-gray-800 md:text-lg"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="1200"
			>
				{errorInfo.message}
			</p>

			<!-- Enhanced Action Buttons -->
			<div
				class="mt-4 flex flex-col justify-center gap-4 sm:flex-row md:gap-8"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="1600"
			>
				<button
					onclick={history.back()}
					class="group inline-flex transform items-center justify-center rounded-full bg-gray-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-xl md:px-8 md:text-lg"
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
					Kembali
				</button>
				<a
					href="/"
					class="group bg-rose-s3-base hover:bg-rose-s3-dark inline-flex transform items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl md:px-8 md:text-lg"
				>
					<svg
						class="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
						/>
					</svg>
					Ke Beranda
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

	@keyframes sadFace {
		0%,
		100% {
			transform: rotate(0deg) scale(1);
		}
		25% {
			transform: rotate(-5deg) scale(1.05);
		}
		75% {
			transform: rotate(5deg) scale(0.95);
		}
	}

	@keyframes floatingStatusCode {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-10px) rotate(10deg);
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

	@keyframes glitch {
		0% {
			text-shadow:
				0.05em 0 0 #e23c64,
				-0.05em -0.025em 0 #06ffa5,
				0.025em 0.05em 0 #b084cc;
		}
		15% {
			text-shadow:
				0.05em 0 0 #e23c64,
				-0.05em -0.025em 0 #06ffa5,
				0.025em 0.05em 0 #b084cc;
		}
		16% {
			text-shadow:
				-0.05em -0.025em 0 #e23c64,
				0.025em 0.025em 0 #06ffa5,
				-0.05em -0.05em 0 #b084cc;
		}
		49% {
			text-shadow:
				-0.05em -0.025em 0 #e23c64,
				0.025em 0.025em 0 #06ffa5,
				-0.05em -0.05em 0 #b084cc;
		}
		50% {
			text-shadow:
				0.025em 0.05em 0 #e23c64,
				0.05em 0 0 #06ffa5,
				0 -0.05em 0 #b084cc;
		}
		99% {
			text-shadow:
				0.025em 0.05em 0 #e23c64,
				0.05em 0 0 #06ffa5,
				0 -0.05em 0 #b084cc;
		}
		100% {
			text-shadow:
				-0.025em 0 0 #e23c64,
				-0.025em -0.025em 0 #06ffa5,
				-0.025em -0.05em 0 #b084cc;
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

	@keyframes emojiFloat {
		0%,
		100% {
			transform: translateY(0px) scale(1);
		}
		50% {
			transform: translateY(-5px) scale(1.1);
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

	.error-icon-wrapper {
		animation: pulse-glow 2s infinite ease-in-out;
	}

	.error-icon {
		animation: sadFace 4s infinite ease-in-out;
	}

	.floating-status-code {
		animation: floatingStatusCode 3s infinite ease-in-out;
	}

	.letter {
		display: inline-block;
		animation: letterBounce 2s infinite ease-in-out;
	}

	.glitch-text {
		animation: glitch 1s infinite;
	}

	.glitch-text:before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.emoji-bounce {
		display: inline-block;
		animation: emojiFloat 2s infinite ease-in-out;
	}

	.typewriter {
		overflow: hidden;
		border-right: 2px solid #e23c64;
		animation:
			typewriter 3s steps(200) 1.5s 1 normal both,
			blink 1s infinite;
	}

	.quick-link-card:hover {
		transform: translateY(-2px);
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
		.error-icon,
		.letter,
		.typewriter,
		.glitch-text,
		.emoji-bounce,
		.floating-status-code {
			animation: none !important;
		}

		.error-icon-wrapper {
			animation: none !important;
			box-shadow: 0 0 20px rgba(226, 60, 100, 0.3);
		}
	}
</style>
