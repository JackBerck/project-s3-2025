<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		AOS.refresh();
	});
</script>

<section id="hero-assignment" class="section-padding-x relative overflow-hidden py-24">
	<div class="container max-w-screen-xl">
		<div class="flex flex-col items-center justify-center pt-8 md:gap-2">
			<!-- Ornament Top -->
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="w-36 md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="0"
			/>

			<!-- Main Title -->
			<h1
				class="font-junigarden-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="200"
			>
				Penugasan Gensoed
			</h1>

			<!-- Ornament Bottom -->
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="w-36 scale-y-[-1] transform md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="400"
			/>
		</div>
	</div>

	<!-- Left Cloud with Animation -->
	<div
		class="absolute top-48 -left-24 lg:-left-24 xl:-left-48"
		data-aos="fade-right"
		data-aos-duration="1000"
		data-aos-delay="600"
	>
		<img
			src="/img/elements/awan-1.png"
			alt="Awan Kiri"
			class="cloud-left w-60 scale-x-[-1] transform md:w-80 lg:w-108 xl:w-144"
		/>
	</div>

	<!-- Right Cloud with Animation -->
	<div
		class="absolute top-48 -right-24 lg:-right-24 xl:-right-48"
		data-aos="fade-left"
		data-aos-duration="1000"
		data-aos-delay="800"
	>
		<img
			src="/img/elements/awan-1.png"
			alt="Awan Kanan"
			class="cloud-right w-60 md:w-80 lg:w-108 xl:w-144"
		/>
	</div>

	<!-- Additional Small Clouds for Background -->
	<div
		class="absolute top-20 left-1/4 opacity-30"
		data-aos="fade-in"
		data-aos-duration="1200"
		data-aos-delay="1000"
	>
		<img src="/img/elements/awan-1.png" alt="Awan Kecil 1" class="cloud-small-1 w-32 md:w-40" />
	</div>

	<div
		class="absolute top-32 right-1/3 opacity-25"
		data-aos="fade-in"
		data-aos-duration="1200"
		data-aos-delay="1200"
	>
		<img
			src="/img/elements/awan-1.png"
			alt="Awan Kecil 2"
			class="cloud-small-2 w-28 scale-x-[-1] transform md:w-36"
		/>
	</div>
</section>

<style>
	/* Cloud animations */
	.cloud-left {
		animation: cloud-drift-left 20s ease-in-out infinite;
	}

	.cloud-right {
		animation: cloud-drift-right 25s ease-in-out infinite;
	}

	.cloud-small-1 {
		animation: cloud-float-1 15s ease-in-out infinite;
	}

	.cloud-small-2 {
		animation: cloud-float-2 18s ease-in-out infinite;
	}

	/* Keyframe animations */
	@keyframes cloud-drift-left {
		0%,
		100% {
			transform: translateX(0) translateY(0) scale(-1, 1);
		}
		25% {
			transform: translateX(-10px) translateY(-5px) scale(-1, 1);
		}
		50% {
			transform: translateX(-5px) translateY(-10px) scale(-1, 1);
		}
		75% {
			transform: translateX(-15px) translateY(-3px) scale(-1, 1);
		}
	}

	@keyframes cloud-drift-right {
		0%,
		100% {
			transform: translateX(0) translateY(0);
		}
		30% {
			transform: translateX(10px) translateY(-8px);
		}
		60% {
			transform: translateX(5px) translateY(-12px);
		}
		90% {
			transform: translateX(12px) translateY(-4px);
		}
	}

	@keyframes cloud-float-1 {
		0%,
		100% {
			transform: translateX(0) translateY(0);
		}
		33% {
			transform: translateX(15px) translateY(-10px);
		}
		66% {
			transform: translateX(-10px) translateY(-5px);
		}
	}

	@keyframes cloud-float-2 {
		0%,
		100% {
			transform: translateX(0) translateY(0) scale(-1, 1);
		}
		40% {
			transform: translateX(-12px) translateY(-8px) scale(-1, 1);
		}
		80% {
			transform: translateX(8px) translateY(-15px) scale(-1, 1);
		}
	}

	/* Mobile optimizations */
	@media (max-width: 768px) {
		.cloud-left,
		.cloud-right,
		.cloud-small-1,
		.cloud-small-2 {
			animation-duration: 12s;
		}

		[data-aos] {
			transition-duration: 0.6s !important;
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

		.cloud-left,
		.cloud-right,
		.cloud-small-1,
		.cloud-small-2 {
			animation: none;
		}

		.cloud-left {
			transform: scale(-1, 1);
		}

		.cloud-small-2 {
			transform: scale(-1, 1);
		}
	}

	/* Hover effects */
	.cloud-left:hover {
		animation-duration: 10s;
	}

	.cloud-right:hover {
		animation-duration: 12s;
	}

	/* Performance optimizations */
	.cloud-left,
	.cloud-right,
	.cloud-small-1,
	.cloud-small-2 {
		will-change: transform;
		backface-visibility: hidden;
		perspective: 1000px;
	}
</style>
