<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let sectionRef: HTMLElement;
	let inView: boolean = false;

	const count1 = tweened(0, { duration: 2000, easing: cubicOut });
	const count2 = tweened(0, { duration: 2000, easing: cubicOut });
	const count3 = tweened(0, { duration: 2000, easing: cubicOut });
	const count4 = tweened(0, { duration: 2000, easing: cubicOut });

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					if (entry.isIntersecting && !inView) {
						inView = true;
						count1.set(13);
						count2.set(700);
						count3.set(26);
						count4.set(9000);
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (sectionRef) {
			observer.observe(sectionRef);
		}

		return () => {
			if (sectionRef) {
				observer.unobserve(sectionRef);
			}
		};
	});
</script>

<div bind:this={sectionRef} class="mt-8 flex flex-col gap-8 lg:flex-row xl:mt-16">
	<div class="w-full lg:w-1/2">
		<div class="grid grid-cols-2 gap-4 text-center">
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
			>
				<span class="big-font-size">{Math.floor($count1)}</span>
				<p class="text-white">Divisi</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
			>
				<span class="big-font-size">{Math.floor($count2)}+</span>
				<p class="text-white">Staff</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
			>
				<span class="big-font-size">{Math.floor($count3)}</span>
				<p class="text-white">Minggu Persiapan</p>
			</div>
			<div
				class="text-light-base flex flex-col items-center justify-center rounded-lg border border-white/30 bg-white/20 p-8 font-semibold shadow-lg backdrop-blur-md"
			>
				<span class="big-font-size">{Math.floor($count4)}+</span>
				<p class="text-white">Gensoed</p>
			</div>
		</div>
	</div>
	<div class="w-full lg:w-1/2">
		<h2 class="font-junigarden mb-4 text-3xl">
			Melalui berbagai program dan kegiatan yang ada, kami berupaya mendukung mahasiswa Unsoed agar
			dapat berkembang dan meraih prestasi terbaik
		</h2>
		<!-- <p class="leading-relaxed">
			Kami adalah panitia S3 UNSOED yang berdedikasi untuk menciptakan acara berkualitas dan
			membangun komunitas mahasiswa yang solid. Kami menyediakan berbagai program dan kegiatan yang
			membantu mahasiswa UNSOED untuk berkembang dan meraih prestasi terbaik.
		</p> -->
		<p class="leading-relaxed">
			Kami percaya bahwa kolaborasi dan semangat kebersamaan adalah kunci kesuksesan Soedirman Student Summit 2025. Oleh
			karena itu, kami berkomitmen memberikan pengalaman terbaik dan dukungan penuh kepada seluruh
			peserta dan mahasiswa Unsoed dalam menyukseskan acara S3.
		</p>
	</div>
</div>
