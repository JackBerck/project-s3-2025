<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import HomeMascotsDocumentation from './documentation.svelte';

	let sectionVisible = false;
	let mascotsSection: HTMLElement;
	let elementsVisible = {
		batikLeft: false,
		batikRight: false,
		wayangLeft: false,
		wayangRight: false,
		introMale: false,
		introFemale: false,
		mainMascot: false,
		title: false,
		description: false
	};

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						sectionVisible = true;
						// Staggered animations for each element
						setTimeout(() => (elementsVisible.batikLeft = true), 100);
						setTimeout(() => (elementsVisible.batikRight = true), 200);
						setTimeout(() => (elementsVisible.wayangLeft = true), 300);
						setTimeout(() => (elementsVisible.wayangRight = true), 400);
						setTimeout(() => (elementsVisible.introMale = true), 500);
						setTimeout(() => (elementsVisible.introFemale = true), 700);
						setTimeout(() => (elementsVisible.mainMascot = true), 900);
						setTimeout(() => (elementsVisible.title = true), 1100);
						setTimeout(() => (elementsVisible.description = true), 1300);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -100px 0px'
			}
		);

		if (mascotsSection) {
			observer.observe(mascotsSection);
		}

		return () => {
			if (mascotsSection) {
				observer.unobserve(mascotsSection);
			}
		};
	});
</script>

<section
	bind:this={mascotsSection}
	id="mascots-home"
	class="section-padding-x text-light-base relative overflow-hidden pt-16 pb-12 md:pt-0 xl:pt-24"
>
	<!-- Batik Kuning Kiri -->
	{#if elementsVisible.batikLeft}
		<div
			class="absolute top-48 -left-24 md:top-72 lg:-left-24 xl:-left-48"
			in:fly={{ x: -100, duration: 800, delay: 0 }}
		>
			<img
				src="/img/elements/batik-kuning-1.png"
				alt="Batik Kuning"
				class="animate-float-slow w-60 md:w-80 lg:w-108 xl:w-144"
			/>
		</div>
	{/if}

	<!-- Batik Kuning Kanan -->
	{#if elementsVisible.batikRight}
		<div
			class="absolute top-84 -right-24 md:top-180 lg:top-172 lg:-right-24 xl:top-144 xl:-right-48"
			in:fly={{ x: 100, duration: 800, delay: 0 }}
		>
			<img
				src="/img/elements/batik-kuning-1.png"
				alt="Batik Kuning"
				class="animate-float-slow-delayed w-60 md:w-80 lg:w-108 xl:w-144"
			/>
		</div>
	{/if}

	<!-- Wayang Kiri -->
	{#if elementsVisible.wayangLeft}
		<div class="absolute bottom-40 -left-16" in:fly={{ x: -80, y: 50, duration: 1000, delay: 0 }}>
			<img
				src="/img/elements/wayang-1.png"
				alt="Wayang Kiri"
				class="animate-sway w-36 md:w-48 lg:w-72 xl:w-84"
			/>
		</div>
	{/if}

	<!-- Wayang Kanan -->
	{#if elementsVisible.wayangRight}
		<div
			class="absolute -right-16 bottom-40 scale-x-[-1] transform"
			in:fly={{ x: 80, y: 50, duration: 1000, delay: 0 }}
		>
			<img
				src="/img/elements/wayang-1.png"
				alt="Wayang Kanan"
				class="animate-sway-delayed w-36 md:w-48 lg:w-72 xl:w-84"
			/>
		</div>
	{/if}

	<div class="relative z-10 container max-w-screen-xl">
		<div class="m-auto mb-8 flex w-full max-w-screen-md flex-col text-center sm:mb-12">
			<!-- Perkenalan Cowok -->
			{#if elementsVisible.introMale}
				<div class="flex items-center" in:fly={{ y: 50, duration: 800, delay: 0 }}>
					<div class="w-full lg:w-[768px]">
						<img
							src="/img/mascots/perkenalan-cowok.webp"
							alt="Perkenalan Chibi Maskot S3 Cowok"
							class="animate-bounce-subtle inline-block rounded"
						/>
					</div>
				</div>
			{/if}

			<!-- Perkenalan Cewek -->
			{#if elementsVisible.introFemale}
				<div class="flex items-center" in:fly={{ y: 50, duration: 800, delay: 0 }}>
					<div class="w-full lg:w-[768px]">
						<img
							src="/img/mascots/perkenalan-cewek.webp"
							alt="Perkenalan Chibi Maskot S3 Cewek"
							class="animate-bounce-subtle-delayed inline-block rounded"
						/>
					</div>
				</div>
			{/if}
		</div>

		<div class="w-full">
			<!-- Main Mascot -->
			{#if elementsVisible.mainMascot}
				<div
					class="m-auto mb-8 max-w-[270px] text-center sm:max-w-xs md:max-w-md lg:max-w-lg"
					in:fly={{ y: 30, duration: 1000, delay: 0 }}
				>
					<img
						class="animate-pulse-gentle m-auto"
						src="/img/mascots/chibi-cewek-cowok.webp"
						alt="Maskot Soedirman Student Summit"
					/>
				</div>
			{/if}

			<div class="text-dark-base mx-auto mb-8 text-center">
				<!-- Title -->
				{#if elementsVisible.title}
					<h2
						class="font-berkshire-swash text-rose-s3-base mb-4 rounded-md p-2 text-2xl font-semibold md:text-3xl lg:text-5xl"
						in:fly={{ y: 30, duration: 800, delay: 0 }}
					>
						Mengenal Lebih Dekat dengan Soedirman Student Summit
					</h2>
				{/if}

				<!-- Description -->
				{#if elementsVisible.description}
					<p
						class="font-plus-jakarta-sans mx-auto max-w-screen-lg rounded-md p-2 text-center"
						in:fade={{ duration: 800, delay: 0 }}
					>
						Soedirman Student Summit (S3) merupakan kegiatan tahunan yang diselenggarakan sebagai
						wadah untuk pengenalan kehidupan perkuliahan dan untuk menyambut mahasiswa baru
						Universitas Jenderal Soedirman. Rangkaian kegiatan S3 bertujuan sebagai gerbang awal
						mahasiswa baru untuk mengenal dirinya sendiri dengan mengimplementasikan nilai-nilai
						yang akan dibawakan, serta mengenal lebih jauh tentang Universitas Jenderal Soedirman
					</p>
				{/if}
			</div>

			<HomeMascotsDocumentation />
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
</style>
