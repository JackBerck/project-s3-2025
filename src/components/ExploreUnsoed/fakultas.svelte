<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import SwiperFaculty from '../Swipers/faculty.svelte';
	import dataFakultas from '../../data/faculties';

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

<section class="section-padding-x pt-12 pb-24">
	<div class="container max-w-screen-xl">
		<!-- Header Section -->
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="animate-pulse-gentle w-36 md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="100"
			/>

			<h2
				class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="300"
			>
				Fakultas di Unsoed
			</h2>

			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="ornament-bottom w-36 md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="500"
			/>
		</div>

		<!-- Swiper Container -->
		<div
			class="swiper-container flex h-96 max-h-96 w-full overflow-hidden md:h-80 md:max-h-80"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="700"
		>
			<SwiperFaculty fakultas={dataFakultas} />
		</div>
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

	.animate-pulse-gentle {
		animation: pulse-gentle 3s ease-in-out infinite;
	}

	.ornament-bottom {
		transform: scaleY(-1);
		animation: pulse-gentle-delayed 3s ease-in-out infinite 0.5s;
	}

	.swiper-container {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	/* Enhanced section styling */
	section {
		position: relative;
		overflow: hidden;
	}

	section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100px;
		background: linear-gradient(to bottom, rgba(226, 60, 100, 0.05), transparent);
		pointer-events: none;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}

		.animate-pulse-gentle,
		.ornament-bottom {
			animation: none;
		}
	}
</style>
