<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let heroVisible = false;
	let heroSection: HTMLElement;
	let scrollY = 0;

	// Tweened values for smooth animations
	const birdY1 = tweened(0, { duration: 100, easing: cubicOut });
	const birdY2 = tweened(0, { duration: 100, easing: cubicOut });
	const mountainY = tweened(0, { duration: 100, easing: cubicOut });

	// Handle scroll
	function handleScroll() {
		scrollY = window.scrollY;
		birdY1.set(scrollY * -0.3);
		birdY2.set(scrollY * -0.2);
		mountainY.set(scrollY * 0.5);
	}

	onMount(() => {
		// Add scroll listener
		window.addEventListener('scroll', handleScroll);

		// Trigger animations when component mounts
		setTimeout(() => {
			heroVisible = true;
		}, 100);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						heroVisible = true;
					}
				});
			},
			{
				threshold: 0.3,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (heroSection) {
			observer.observe(heroSection);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (heroSection) {
				observer.unobserve(heroSection);
			}
		};
	});
</script>

<section
	bind:this={heroSection}
	id="hero-home"
	class="section-padding-x text-light-base relative h-screen overflow-hidden pt-54 pb-32 md:py-40 md:pb-52 lg:py-60 lg:pb-72"
	style="background: radial-gradient(circle at center 150%, #FFD464 40%, #E04E4E 100%);"
>
	<!-- Gambar burung kiri -->
	{#if heroVisible}
		<div
			class="animate-slide-left absolute top-32 left-8 z-5 md:top-24 md:left-16 lg:top-36 lg:left-12"
			style="transform: translateY({$birdY1}px)"
		>
			<img
				src="/img/elements/burung-1.png"
				alt="Bird decoration"
				class="animate-float aspect-square w-24 opacity-80 md:w-32 lg:w-36"
			/>
		</div>
	{/if}

	<!-- Gambar burung kanan -->
	{#if heroVisible}
		<div
			class="animate-slide-right absolute top-36 right-8 z-5 md:top-28 md:right-12 lg:top-40 lg:right-12"
			style="transform: translateY({$birdY2}px)"
		>
			<img
				src="/img/elements/burung-2.png"
				alt="Bird decoration"
				class="animate-float-delayed aspect-square w-24 opacity-70 md:w-32 lg:w-36"
			/>
		</div>
	{/if}

	<!-- Background circle -->
	{#if heroVisible}
		<div
			class="animate-scale-up absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 transform md:bottom-16 lg:bottom-24"
		>
			<div
				class="bg-light-base aspect-square w-128 rounded-t-full opacity-90 shadow-xl shadow-amber-400 md:w-192 lg:w-256"
			></div>
		</div>
	{/if}

	<!-- Main content -->
	<div class="relative z-20 container max-w-screen-xl px-4">
		<div
			class=" text-rose-s3-base mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
		>
			{#if heroVisible}
				<h1
					class="font-junigarden animate-fade-up mb-4 text-2xl md:text-4xl lg:text-5xl"
				>
					Soedirman Student Summit
					<span class="block text-amber-400 font-miskan">2025</span>
				</h1>
			{/if}

			{#if heroVisible}
				<p
					class="text-dark-base animate-fade-in mb-8 text-base md:text-md lg:text-lg"
				>
					Bersama kita tingkatkan kualitas mahasiswa melalui inovasi dan kolaborasi. Mari bergabung
					dalam perjalanan menuju masa depan yang lebih cerah.
				</p>
			{/if}
		</div>
	</div>
</section>

<!-- Mountain decoration -->
{#if heroVisible}
	<div
		class="animate-slide-up absolute -bottom-20 left-0 z-10 md:top-72 lg:top-96"
		style="transform: translateY({$mountainY}px)"
	>
		<img
			src="/img/elements/pepohonan-dan-gunung.png"
			alt="Mountain and tree decoration"
			class="w-full"
		/>
	</div>
{/if}

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

	@keyframes slideLeft {
		from {
			transform: translateX(-100px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 0.8;
		}
	}

	@keyframes slideRight {
		from {
			transform: translateX(100px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 0.7;
		}
	}

	@keyframes scaleUp {
		from {
			transform: scale(0.5);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 0.9;
		}
	}

	@keyframes fadeUp {
		from {
			transform: translateY(50px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(100px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}

	.animate-float-delayed {
		animation: float-delayed 4s ease-in-out infinite 1s;
	}

	.animate-slide-left {
		animation: slideLeft 0.8s ease-out 0.2s both;
	}

	.animate-slide-right {
		animation: slideRight 0.8s ease-out 0.4s both;
	}

	.animate-scale-up {
		animation: scaleUp 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s both;
	}

	.animate-fade-up {
		animation: fadeUp 0.8s ease-out 0.8s both;
	}

	.animate-fade-in {
		animation: fadeIn 0.8s ease-out 1s both;
	}

	.animate-slide-up {
		animation: slideUp 1s ease-out 1.2s both;
	}
</style>
