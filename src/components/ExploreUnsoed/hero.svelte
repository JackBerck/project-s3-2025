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

<section
	id="hero-explore-unsoed"
	class="section-padding-x relative bg-[url('/img/backgrounds/patung-kuda-halaman-rektor.webp')] bg-cover bg-center bg-no-repeat pt-48 pb-36 lg:pb-48 xl:pt-60 xl:pb-64"
>
	<div
		class="absolute inset-0 bg-transparent bg-gradient-to-b from-transparent from-30% to-[#4B4B4B]/100"
	></div>

	<div class="relative z-10 container max-w-screen-xl">
		<h1
			class="text-rose-s3-base font-miskan mb-2 text-center font-extrabold md:mb-4 md:text-left"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-delay="300"
		>
			Universitas Jenderal Soedirman
		</h1>

		<p
			class="text-light-base max-w-xl text-justify md:text-left"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="600"
		>
			Universitas Jenderal Soedirman (Unsoed) adalah institusi pendidikan unggulan di Purwokerto
			yang memadukan inovasi teknologi dan komitmen lingkungan dalam setiap aspek pendidikan. Dengan
			kampus hijau yang modern dan beragam program studi, Unsoed siap mencetak lulusan yang kreatif
			dan kompetitif di era digital. Temukan peluang akademis dan profesional yang menarik di
			Unsoed, pusat pendidikan yang berorientasi masa depan!
		</p>
	</div>

	<!-- Wave Elements -->
	<div
		class="absolute bottom-36 left-0 z-10 overflow-hidden md:-bottom-12 lg:-bottom-36 xl:-bottom-64"
		data-aos="fade-up"
		data-aos-duration="1000"
		data-aos-delay="400"
	>
		<img
			src="/img/elements/gelombang-nirwana.png"
			alt="Wave decoration left"
			class="w-full"
		/>
	</div>

	<div
		class="absolute bottom-36 left-0 z-10 overflow-hidden md:-bottom-12 lg:-bottom-36 xl:-bottom-64"
		data-aos="fade-up"
		data-aos-duration="1000"
		data-aos-delay="500"
	>
		<img
			src="/img/elements/gelombang-nirwana.png"
			alt="Wave decoration right"
			class="w-full transform wave-right"
		/>
	</div>
</section>

<style>
	@keyframes wave-gentle {
		0%,
		100% {
			transform: translateX(0px);
		}
		50% {
			transform: translateX(5px);
		}
	}

	@keyframes wave-gentle-delayed {
		0%,
		100% {
			transform: scaleX(-1) translateX(0px);
		}
		50% {
			transform: scaleX(-1) translateX(-5px);
		}
	}

	.wave-right {
		transform: scaleX(-1);
	}

	.animate-wave-gentle {
		animation: wave-gentle 4s ease-in-out infinite;
	}

	.animate-wave-gentle-delayed {
		animation: wave-gentle-delayed 4s ease-in-out infinite 0.5s;
	}

	/* Enhanced background parallax effect */
	#hero-explore-unsoed {
		background-attachment: fixed;
		transition: background-position 0.1s ease-out;
	}

	@media (max-width: 768px) {
		#hero-explore-unsoed {
			background-attachment: scroll;
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

		.animate-wave-gentle,
		.animate-wave-gentle-delayed {
			animation: none;
		}
	}
</style>
