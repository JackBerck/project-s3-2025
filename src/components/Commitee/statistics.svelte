<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let sectionRef: HTMLElement;
	let inView: boolean = false;

	const count1 = tweened(0, { duration: 1000, easing: cubicOut });
	const count2 = tweened(0, { duration: 1000, easing: cubicOut });
	const count3 = tweened(0, { duration: 1000, easing: cubicOut });
	const count4 = tweened(0, { duration: 1000, easing: cubicOut });

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					if (entry.isIntersecting && !inView) {
						inView = true;
						count1.set(12567);
						count2.set(5834);
						count3.set(3245);
						count4.set(32345);
					}
				});
			},
			{ threshold: 0.1 }
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

<section
	id="statistics-committee"
	class="section-padding-x text-light-base bg-rose-s3-secondary py-12"
	bind:this={sectionRef}
>
	<div class="container max-w-screen-xl">
		<div class="flex flex-col-reverse justify-between gap-4 lg:flex-row">
			<div class="w-full lg:w-1/2">
				<div class="grid grid-cols-2 gap-2 text-center">
					<div
						class="flex flex-col items-center justify-center rounded-md bg-green-400 p-8 font-semibold text-green-700"
					>
						<span class="big-font-size">{Math.floor($count1).toLocaleString()}+</span>
						<p class="text-light-base">Divisi</p>
					</div>
					<div
						class="flex flex-col items-center justify-center rounded-md bg-amber-400 p-8 font-semibold text-amber-700"
					>
						<span class="big-font-size">{Math.floor($count2).toLocaleString()}+</span>
						<p class="text-light-base">Staff</p>
					</div>
					<div
						class="flex flex-col items-center justify-center rounded-md bg-blue-400 p-8 font-semibold text-blue-700"
					>
						<span class="big-font-size">{Math.floor($count3).toLocaleString()}+</span>
						<p class="text-light-base">Bulan Persiapan</p>
					</div>
					<div
						class="flex flex-col items-center justify-center rounded-md bg-purple-400 p-8 font-semibold text-purple-700"
					>
						<span class="big-font-size">{Math.floor($count4).toLocaleString()}+</span>
						<p class="text-light-base">Gensoed Baru</p>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-1/2">
				<p class="w-fit rounded-md bg-lime-400 px-2 py-1 font-semibold text-lime-700">
					Apa yang Kami Lakukan?
				</p>
				<h2 class="font-junigarden mb-2 font-bold">
					Kami Menciptakan Sinergi untuk UNSOED yang Lebih Baik
				</h2>
				<p class="mb-2">
					Kami adalah panitia S3 UNSOED yang berdedikasi untuk menciptakan acara berkualitas dan
					membangun komunitas mahasiswa yang solid. Kami menyediakan berbagai program dan kegiatan
					yang membantu mahasiswa UNSOED untuk berkembang dan meraih prestasi terbaik.
				</p>
				<p class="mb-2">
					Kami percaya bahwa kolaborasi dan semangat kebersamaan adalah kunci kesuksesan S3 UNSOED.
					Oleh karena itu, kami berkomitmen memberikan pengalaman terbaik dan dukungan penuh kepada
					seluruh peserta dan mahasiswa UNSOED dalam menyukseskan acara S3.
				</p>
			</div>
		</div>
	</div>
</section>
