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
						count1.set(12);
						count2.set(58);
						count3.set(8);
						count4.set(1000);
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

<div bind:this={sectionRef} class="mt-8 xl:mt-16 flex flex-col gap-8 lg:flex-row">
	<div class="w-full lg:w-1/2">
		<div class="grid grid-cols-2 gap-4 text-center">
            <div
                class="flex flex-col items-center justify-center rounded-lg bg-white/20 backdrop-blur-md border border-white/30 p-8 font-semibold text-light-base shadow-lg"
            >
                <span class="big-font-size">{Math.floor($count1)}+</span>
                <p class="text-white">Divisi</p>
            </div>
            <div
                class="flex flex-col items-center justify-center rounded-lg bg-white/20 backdrop-blur-md border border-white/30 p-8 font-semibold text-light-base shadow-lg"
            >
                <span class="big-font-size">{Math.floor($count2)}+</span>
                <p class="text-white">Staff</p>
            </div>
            <div
                class="flex flex-col items-center justify-center rounded-lg bg-white/20 backdrop-blur-md border border-white/30 p-8 font-semibold text-light-base shadow-lg"
            >
                <span class="big-font-size">{Math.floor($count3)}+</span>
                <p class="text-white">Bulan Persiapan</p>
            </div>
            <div
                class="flex flex-col items-center justify-center rounded-lg bg-white/20 backdrop-blur-md border border-white/30 p-8 font-semibold text-light-base shadow-lg"
            >
                <span class="big-font-size">{Math.floor($count4)}+</span>
                <p class="text-white">Peserta Target</p>
            </div>
		</div>
	</div>
	<div class="w-full lg:w-1/2">
		<h2 class="font-junigarden mb-4 text-3xl font-bold">
			Kami Menciptakan Sinergi untuk UNSOED yang Lebih Baik
		</h2>
		<p class="mb-4 leading-relaxed">
			Kami adalah panitia S3 UNSOED yang berdedikasi untuk menciptakan acara berkualitas dan
			membangun komunitas mahasiswa yang solid. Kami menyediakan berbagai program dan kegiatan yang
			membantu mahasiswa UNSOED untuk berkembang dan meraih prestasi terbaik.
		</p>
		<p class="leading-relaxed">
			Kami percaya bahwa kolaborasi dan semangat kebersamaan adalah kunci kesuksesan S3 UNSOED. Oleh
			karena itu, kami berkomitmen memberikan pengalaman terbaik dan dukungan penuh kepada seluruh
			peserta dan mahasiswa UNSOED dalam menyukseskan acara S3.
		</p>
	</div>
</div>
