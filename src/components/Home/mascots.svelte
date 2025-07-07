<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import HomeMascotsDocumentation from './documentation.svelte';

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
	id="mascots-home"
	class="section-padding-x text-light-base relative overflow-hidden pt-16 pb-12 md:pt-0 xl:pt-24"
>
	<!-- Batik Kuning Kiri -->
	<div
		class="absolute top-48 -left-24 md:top-72 lg:-left-24 xl:-left-48"
		data-aos="fade-right"
		data-aos-duration="1000"
		data-aos-delay="100"
	>
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="animate-float-slow w-60 md:w-80 lg:w-108 xl:w-144"
		/>
	</div>

	<!-- Batik Kuning Kanan -->
	<div
		class="absolute top-84 -right-24 md:top-180 lg:top-172 lg:-right-24 xl:top-144 xl:-right-48"
		data-aos="fade-left"
		data-aos-duration="1000"
		data-aos-delay="200"
	>
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="animate-float-slow-delayed w-60 md:w-80 lg:w-108 xl:w-144"
		/>
	</div>

	<!-- Wayang Kiri -->
	<div
		class="absolute bottom-40 -left-16"
		data-aos="fade-right"
		data-aos-duration="1000"
		data-aos-delay="300"
	>
		<img
			src="/img/elements/wayang-1.png"
			alt="Wayang Kiri"
			class="animate-sway w-36 md:w-48 lg:w-72 xl:w-84"
		/>
	</div>

	<!-- Wayang Kanan -->
	<div
		class="absolute -right-16 bottom-40 scale-x-[-1] transform"
		data-aos="fade-left"
		data-aos-duration="1000"
		data-aos-delay="400"
	>
		<img
			src="/img/elements/wayang-1.png"
			alt="Wayang Kanan"
			class="animate-sway-delayed w-36 md:w-48 lg:w-72 xl:w-84"
		/>
	</div>

	<div class="relative z-10 container max-w-screen-xl">
		<div class="m-auto mb-8 flex w-full max-w-screen-md flex-col text-center sm:mb-12">
			<!-- Perkenalan Cowok -->
			<div
				class="flex items-center"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="500"
			>
				<div class="w-full lg:w-[768px]">
					<img
						src="/img/mascots/perkenalan-cowok.png"
						alt="Perkenalan Chibi Maskot S3 Cowok"
						class="animate-bounce-subtle inline-block rounded"
					/>
				</div>
			</div>

			<!-- Perkenalan Cewek -->
			<div
				class="flex items-center"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="700"
			>
				<div class="w-full lg:w-[768px]">
					<img
						src="/img/mascots/perkenalan-cewek.png"
						alt="Perkenalan Chibi Maskot S3 Cewek"
						class="animate-bounce-subtle-delayed inline-block rounded"
					/>
				</div>
			</div>
		</div>

		<div class="w-full">
			<!-- Main Mascot -->
			<div
				class="m-auto mb-8 max-w-[270px] text-center sm:max-w-xs md:max-w-md lg:max-w-lg"
				data-aos="zoom-in"
				data-aos-duration="1000"
				data-aos-delay="900"
			>
				<img
					class="animate-pulse-gentle m-auto"
					src="/img/mascots/Laksamana-Rengganis.png"
					alt="Maskot Soedirman Student Summit"
				/>
			</div>

			<div class="text-dark-base mx-auto mb-8 text-center">
				<!-- Title -->
				<h2
					class="font-berkshire-swash text-rose-s3-base mb-4 rounded-md p-2 text-2xl font-semibold md:text-3xl lg:text-5xl"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="1100"
				>
					Mengenal Lebih Dekat dengan Soedirman Student Summit
				</h2>

				<!-- Description -->
				<p
					class="font-plus-jakarta-sans mx-auto max-w-screen-lg rounded-md p-2 text-center"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="1300"
				>
					Soedirman Student Summit (S3) merupakan kegiatan tahunan yang diselenggarakan sebagai
					wadah untuk pengenalan kehidupan perkuliahan dan untuk menyambut mahasiswa baru
					Universitas Jenderal Soedirman. Rangkaian kegiatan S3 bertujuan sebagai gerbang awal
					mahasiswa baru untuk mengenal dirinya sendiri dengan mengimplementasikan nilai-nilai yang
					akan dibawakan, serta mengenal lebih jauh tentang Universitas Jenderal Soedirman.
				</p>
			</div>

			<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1500">
				<HomeMascotsDocumentation />
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float-slow {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	@keyframes float-slow-delayed {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	@keyframes sway {
		0%,
		100% {
			transform: rotate(-2deg);
		}
		50% {
			transform: rotate(2deg);
		}
	}

	@keyframes sway-delayed {
		0%,
		100% {
			transform: rotate(2deg);
		}
		50% {
			transform: rotate(-2deg);
		}
	}

	@keyframes bounce-subtle {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	@keyframes bounce-subtle-delayed {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-12px);
		}
	}

	@keyframes pulse-gentle {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	.animate-float-slow {
		animation: float-slow 4s ease-in-out infinite;
	}

	.animate-float-slow-delayed {
		animation: float-slow-delayed 4.5s ease-in-out infinite 1s;
	}

	.animate-sway {
		animation: sway 3s ease-in-out infinite;
	}

	.animate-sway-delayed {
		animation: sway-delayed 3.5s ease-in-out infinite 0.5s;
	}

	.animate-bounce-subtle {
		animation: bounce-subtle 2s ease-in-out infinite;
	}

	.animate-bounce-subtle-delayed {
		animation: bounce-subtle-delayed 2.5s ease-in-out infinite 1s;
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 3s ease-in-out infinite;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}

		.animate-float-slow,
		.animate-float-slow-delayed,
		.animate-sway,
		.animate-sway-delayed,
		.animate-bounce-subtle,
		.animate-bounce-subtle-delayed,
		.animate-pulse-gentle {
			animation: none;
		}
	}
</style>
