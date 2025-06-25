<script>
	// import { onMount } from 'svelte';

	// let scrollY = 0;

	// onMount(() => {
	// 	const updateScrollY = () => (scrollY = window.scrollY);
	// 	window.addEventListener('scroll', updateScrollY);
	// 	return () => window.removeEventListener('scroll', updateScrollY);
	// });
</script>

<!-- <svelte:window bind:scrollY /> -->

<section
	id="hero-home"
	class="section-padding-x text-light-base relative overflow-hidden pt-54 pb-32 md:py-40 md:pb-52 lg:py-60 lg:pb-72"
	style="background: radial-gradient(circle at center 150%, #FFD464 40%, #E04E4E 100%);"
>
	<!-- Gambar burung kiri -->
	<div class="absolute top-32 left-8 z-5 opacity-80 md:top-24 md:left-16 lg:top-36 lg:left-12">
		<img
			src="/img/elements/burung-1.png"
			alt="Bird decoration"
			class="animate-float aspect-square w-24 md:w-32 lg:w-36"
		/>
	</div>

	<!-- Gambar burung kanan -->
	<div class="absolute top-36 right-8 z-5 opacity-70 md:top-28 md:right-12 lg:top-40 lg:right-12">
		<img
			src="/img/elements/burung-2.png"
			alt="Bird decoration"
			class="animate-float-delayed aspect-square w-24 md:w-32 lg:w-36"
		/>
	</div>

	<!-- Gambar gunung dan pohon untuk membatasi section -->
	<!-- style="transform: translateY({scrollY * 0.3}px);" -->
	<!-- <div class="absolute -bottom-4 left-1/2 z-5 -translate-x-1/2">
		<img
			src="/img/elements/gunung-dan-pohon.png"
			alt="Mountain and tree decoration"
			class="min-w-128 md:w-full"
		/>
	</div> -->

	<div
		class="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 transform md:bottom-16 lg:bottom-24"
	>
		<div
			class="bg-light-base h-72 w-72 rounded-t-full opacity-90 shadow-xl shadow-amber-400 md:h-192 md:w-192 lg:h-256 lg:w-256"
		></div>
	</div>

	<div class="relative z-10 container max-w-screen-xl px-4">
		<div
			class=" text-rose-s3-base mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
		>
			<h1 class="font-berkshire-swash mb-4 text-2xl font-bold md:text-4xl lg:text-5xl">
				Soedirman Student Summit
				<span class="block text-amber-400">2025</span>
			</h1>
			<p class="font-aladin text-light-base md:text-dark-base mb-8 text-base md:text-lg lg:text-2xl">
				Bersama kita tingkatkan kualitas mahasiswa melalui inovasi dan kolaborasi. Mari bergabung
				dalam perjalanan menuju masa depan yang lebih cerah.
			</p>
		</div>
	</div>
</section>

<div class="absolute bottom-48 left-0 z-10 md:top-72 lg:top-96">
	<img src="/img/elements/pepohonan-dan-gunung.png" alt="Mountain and tree decoration" class="w-full" />
</div>

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
</style>
