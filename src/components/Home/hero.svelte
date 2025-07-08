<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let scrollY = 0;

	// Tweened values for smooth parallax effects
	const birdY1 = tweened(0, { duration: 100, easing: cubicOut });
	const birdY2 = tweened(0, { duration: 100, easing: cubicOut });
	const mountainY = tweened(0, { duration: 100, easing: cubicOut });

	// Simple responsive values untuk mountain positioning
	let windowWidth = 0;
	let mountainTopPosition = 0;

	// Handle scroll for parallax effect
	function handleScroll() {
		scrollY = window.scrollY;
		birdY1.set(scrollY * -0.3);
		birdY2.set(scrollY * -0.2);
		mountainY.set(scrollY * 0.5);
	}

	// Update mountain position based on screen size
	function updateMountainPosition() {
		if (typeof window !== 'undefined') {
			windowWidth = window.innerWidth;

			// Static values per breakpoint
			if (windowWidth >= 1024) {
				// Desktop/Large screens
				mountainTopPosition = 250;
			} else if (windowWidth >= 768) {
				// Tablet/Medium screens
				mountainTopPosition = 150;
			} else {
				// Mobile/Small screens
				mountainTopPosition = 140;
			}

			console.log('Mountain position updated:', mountainTopPosition, 'for width:', windowWidth);
		}
	}

	onMount(() => {
		// Initial position
		updateMountainPosition();

		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		// Add event listeners
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', updateMountainPosition);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateMountainPosition);
		};
	});
</script>

<section
	id="hero-home"
	class="section-padding-x text-light-base relative h-screen overflow-hidden pt-54 pb-32 md:py-40 md:pb-52 lg:py-60 lg:pb-72"
	style="background: radial-gradient(circle at center 150%, #FFD464 40%, #E04E4E 100%);"
>
	<!-- Gambar burung kiri dengan parallax -->
	<div
		class="absolute top-32 left-8 z-5 md:top-24 md:left-16 lg:top-36 lg:left-12"
		style="transform: translateY({$birdY1}px)"
		data-aos="fade-right"
		data-aos-duration="800"
		data-aos-delay="200"
	>
		<img
			src="/img/elements/burung-1.png"
			alt="Bird decoration"
			class="animate-float aspect-square w-24 opacity-80 md:w-32 lg:w-36"
		/>
	</div>

	<!-- Gambar burung kanan dengan parallax -->
	<div
		class="absolute top-36 right-8 z-5 md:top-28 md:right-12 lg:top-40 lg:right-12"
		style="transform: translateY({$birdY2}px)"
		data-aos="fade-left"
		data-aos-duration="800"
		data-aos-delay="400"
	>
		<img
			src="/img/elements/burung-2.png"
			alt="Bird decoration"
			class="animate-float-delayed aspect-square w-24 opacity-70 md:w-32 lg:w-36"
		/>
	</div>

	<!-- Background circle -->
	<div
		class="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 transform md:bottom-16 lg:bottom-24"
		data-aos="zoom-in"
		data-aos-duration="1000"
		data-aos-delay="600"
	>
		<div
			class="bg-light-base aspect-square w-128 rounded-t-full opacity-90 shadow-xl shadow-amber-400 md:w-192 lg:w-256"
		></div>
	</div>

	<!-- Main content -->
	<div class="relative z-20 container max-w-screen-xl px-4">
		<div
			class="text-rose-s3-base mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
		>
			<h1
				class="font-junigarden mb-4 text-2xl md:text-4xl lg:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="800"
			>
				Soedirman Student Summit
				<span
					class="font-miskan block text-amber-400"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="1000"
				>
					2025
				</span>
			</h1>

			<p
				class="text-dark-base md:text-md mb-8 px-3 py-2 text-sm lg:text-lg"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="1200"
			>
				Bersama kita tingkatkan kualitas mahasiswa melalui inovasi dan kolaborasi. Mari bergabung
				dalam perjalanan menuju masa depan yang lebih cerah.
			</p>
		</div>
	</div>
</section>

<!-- Mountain decoration dengan static positioning per breakpoint -->
<div
	class="absolute left-0 z-10 w-full"
	style="bottom: -{mountainTopPosition}px;"
	data-aos="fade-up"
	data-aos-duration="1000"
	data-aos-delay="1400"
>
	<img
		src="/img/elements/asset-homepage.png"
		alt="Mountain and tree decoration"
		class="w-full"
	/>
</div>

<!-- Debug info (uncomment untuk testing) -->
<!-- 
<div class="fixed top-4 right-4 bg-black text-white p-2 rounded text-sm z-50">
    <div>Window Width: {windowWidth}px</div>
    <div>Mountain Position: {mountainTopPosition}px</div>
    <div>Breakpoint: {windowWidth >= 1024 ? 'Desktop' : windowWidth >= 768 ? 'Tablet' : 'Mobile'}</div>
</div>
-->

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes float-delayed {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}

	.animate-float-delayed {
		animation: float-delayed 4s ease-in-out infinite 1s;
	}

	/* Enhanced shadow effects */
	h1 {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	p {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}

		.animate-float,
		.animate-float-delayed {
			animation: none;
		}
	}
</style>
