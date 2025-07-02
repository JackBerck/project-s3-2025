<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import HomeSomethinInterestingStatistics from './statistics.svelte';

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let interval: number | null = null;
	let statisticsComponent: HomeSomethinInterestingStatistics;

	const targetDate = new Date('2025-08-11T00:00:00');

	function updateCountdown() {
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

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
		updateCountdown();
		interval = setInterval(updateCountdown, 1000);
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
	<div class="absolute -top-44 md:-top-96 lg:-top-72 xl:-top-144 left-0 z-10">
		<img src="/img/elements/rusa-dan-pepohonan.png" alt="Rusa dan Gunung" class="w-full" />
	</div>
	<div class="absolute bottom-0 left-1/2 z-10 max-w-screen-lg -translate-x-1/2 transform">
		<img
			src="/img/elements/candi-prambanan.png"
			alt="Mountain and tree decoration"
			class="w-full"
		/>
	</div>
	<div class="relative z-20 container max-w-screen-xl">
		<h2 class="font-junigarden-swash text-center">Sesuatu yang Menarik Akan Menghampiri Kamu</h2>
		<div
			class="mt-4 grid grid-cols-2 items-center justify-center gap-4 md:mt-8 md:grid-cols-4 md:gap-8 lg:gap-16 xl:mt-16"
		>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md relative overflow-hidden"
			>
				<div class="absolute inset-0 bg-yellow-400/80 backdrop-blur-sm flex items-center justify-center">
					<div class="bg-red-600 text-white px-4 py-2 rounded transform -rotate-12 font-bold text-sm">
						TO BE ANNOUNCED
					</div>
				</div>
				<!-- <p class="font-miskan text-xl md:text-4xl lg:text-5xl xl:text-7xl opacity-30">{days}</p> -->
				<p class="font-junigarden text-center text-base md:text-xl lg:text-3xl opacity-30">Hari</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md relative overflow-hidden"
			>
				<div class="absolute inset-0 bg-yellow-400/80 backdrop-blur-sm flex items-center justify-center">
					<div class="bg-red-600 text-white px-4 py-2 rounded transform -rotate-12 font-bold text-sm">
						TO BE ANNOUNCED
					</div>
				</div>
				<!-- <p class="font-miskan text-xl md:text-4xl lg:text-5xl xl:text-7xl opacity-30">{hours}</p> -->
				<p class="font-junigarden text-center text-base md:text-xl lg:text-3xl opacity-30">Jam</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md relative overflow-hidden"
			>
				<div class="absolute inset-0 bg-yellow-400/80 backdrop-blur-sm flex items-center justify-center">
					<div class="bg-red-600 text-white px-4 py-2 rounded transform -rotate-12 font-bold text-sm">
						TO BE ANNOUNCED
					</div>
				</div>
				<!-- <p class="font-miskan text-xl md:text-4xl lg:text-5xl xl:text-7xl opacity-30">{minutes}</p> -->
				<p class="font-junigarden text-center text-base md:text-xl lg:text-3xl opacity-30">Menit</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md relative overflow-hidden"
			>
				<div class="absolute inset-0 bg-yellow-400/80 backdrop-blur-sm flex items-center justify-center">
					<div class="bg-red-600 text-white px-4 py-2 rounded transform -rotate-12 font-bold text-sm">
						TO BE ANNOUNCED
					</div>
				</div>
				<!-- <p class="font-miskan text-xl md:text-4xl lg:text-5xl xl:text-7xl opacity-30">{seconds}</p> -->
				<p class="font-junigarden text-center text-base md:text-xl lg:text-3xl opacity-30">Detik</p>
			</div>
		</div>
		<p class="medium-font-size mt-8 text-center font-medium">
			Soedirman Student Summit hampir tiba, mari kita mulai petualangan luar biasa ini bersama-sama!
		</p>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.550961290375!2d109.24630527116395!3d-7.404103139378457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655efa9b11331f%3A0x13ecfa29476eb9bb!2sUniversitas%20Jenderal%20Soedirman!5e0!3m2!1sid!2sid!4v1751420997915!5m2!1sid!2sid"
			style="border:0;"
			allowfullscreen
			loading="lazy"
			title="Universitas Jenderal Soedirman Location"
			referrerpolicy="no-referrer-when-downgrade"
			class="mt-8 h-96 w-full rounded-lg shadow-lg"
		></iframe>
		<HomeSomethinInterestingStatistics bind:this={statisticsComponent} />
	</div>
</section>
