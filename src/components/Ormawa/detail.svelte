<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	export let logo = '';
	export let name = '';
	export let description = '';
	export let contact: {
		name: string;
		link: string;
	};

	let detailSection: HTMLElement;
	let elementsVisible = {
		backgroundElement: false,
		logo: false,
		title: false,
		description: false,
		contact: false
	};

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.backgroundElement = true), 100);
						setTimeout(() => (elementsVisible.logo = true), 300);
						setTimeout(() => (elementsVisible.title = true), 600);
						setTimeout(() => (elementsVisible.description = true), 900);
						setTimeout(() => (elementsVisible.contact = true), 1200);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (detailSection) {
			observer.observe(detailSection);
		}

		return () => {
			if (detailSection) {
				observer.unobserve(detailSection);
			}
		};
	});
</script>

<section
	bind:this={detailSection}
	id="detail-ormawa"
	class="section-padding-x text-light-base bg-rose-s3-secondary relative overflow-hidden bg-[url('/img/patterns/batik-1.png')] bg-repeat pt-36 pb-30"
>
	<div
		class="to-dark-base/30 absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent from-50%"
	></div>

	{#if elementsVisible.backgroundElement}
		<div
			class="absolute -right-16 bottom-0 md:-right-24"
			in:fly={{ x: 100, duration: 1000, delay: 0 }}
		>
			<img
				src="/img/elements/rusa-dan-pohon.png"
				alt="Batik Kuning"
				class="w-60 md:w-80 lg:w-108"
			/>
		</div>
	{/if}

	<div class="relative z-10 container max-w-screen-xl">
		<div class="flex flex-col items-center justify-center gap-8 md:flex-row">
			{#if elementsVisible.logo}
				<img
					src="/img/placeholder.png"
					alt={`${name} Logo`}
					class="logo-image w-full max-w-xs rounded-md object-cover shadow-lg lg:max-w-md xl:max-w-xl"
					in:scale={{ duration: 800, start: 0.8, delay: 0 }}
				/>
			{/if}

			<div class="flex flex-col items-start">
				{#if elementsVisible.title}
					<h1
						class="font-berkshire-swash text-yellow-s3-base text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
						in:fly={{ x: 50, duration: 800, delay: 0 }}
					>
						{name}
					</h1>
				{/if}

				{#if elementsVisible.description}
					<p class="mt-2 text-justify" in:fade={{ duration: 800, delay: 0 }}>
						{description}
					</p>
				{/if}

				{#if elementsVisible.contact}
					<div class="mt-4" in:fly={{ y: 30, duration: 600, delay: 0 }}>
						<a
							href={contact.link}
							target="_blank"
							rel="noopener noreferrer"
							class="bg-yellow-s3-base text-rose-s3-secondary hover:bg-yellow-s3-base/90 contact-button inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
							{contact.name}
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	.animate-float {
		animation: float 4s ease-in-out infinite 1s;
	}

	.logo-image {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.logo-image:hover {
		transform: scale(1.05);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
	}

	.contact-button {
		transition: all 0.3s ease;
	}

	.contact-button:hover {
		transform: translateY(-2px) scale(1.05);
	}

	/* Text styling enhancements */
	h1 {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	p {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
	}
</style>
