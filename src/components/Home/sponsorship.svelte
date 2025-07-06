<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import sponsorships from '../../data/sponsorships';

	let sponsorshipSection: HTMLElement;
	let elementsVisible = {
		ornamentTop: false,
		title: false,
		ornamentBottom: false,
		sponsors: false
	};

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.ornamentTop = true), 100);
						setTimeout(() => (elementsVisible.title = true), 300);
						setTimeout(() => (elementsVisible.ornamentBottom = true), 500);
						setTimeout(() => (elementsVisible.sponsors = true), 700);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (sponsorshipSection) {
			observer.observe(sponsorshipSection);
		}

		return () => {
			if (sponsorshipSection) {
				observer.unobserve(sponsorshipSection);
			}
		};
	});
</script>

<section
	bind:this={sponsorshipSection}
	id="sponsorship-home"
	class="section-padding-x text-light-base bg-rose-s3-secondary relative overflow-hidden bg-gradient-to-t py-12 md:py-12"
>
	<div class="container max-w-screen-xl">
		<!-- Header Section -->
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			{#if elementsVisible.ornamentTop}
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Atas"
					class="w-36 brightness-0 invert md:w-40 lg:w-54"
					in:scale={{ duration: 600, start: 0.7, delay: 0 }}
				/>
			{/if}

			{#if elementsVisible.title}
				<h2
					class="font-berkshire-swash text-light-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
					in:fly={{ y: 30, duration: 800, delay: 0 }}
				>
					Sponsorship
				</h2>
			{/if}

			{#if elementsVisible.ornamentBottom}
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Bawah"
					class="ornament-bottom w-36 brightness-0 invert md:w-40 lg:w-54"
					in:scale={{ duration: 600, start: 0.7, delay: 0 }}
				/>
			{/if}
		</div>

		<!-- Sponsors Grid -->
		{#if elementsVisible.sponsors}
			<div
				class="flex flex-wrap xl:gap-16 items-center justify-center gap-8"
				in:fade={{ duration: 800, delay: 0 }}
			>
				{#each sponsorships as sponsorship, index}
					<div
						class="animate-fade-in-up flex items-center justify-center transition-transform hover:scale-105"
						style="animation-delay: {index * 100}ms"
						in:fly={{ y: 30, duration: 600, delay: index * 80 }}
					>
						<img
							src={sponsorship.logo}
							alt={sponsorship.name}
							class={`sponsor-logo w-auto object-contain transition-all duration-300 hover:brightness-110 hover:scale-105 ${
								sponsorship.size === 'xl'
									? 'h-24 md:h-32 lg:h-40'
									: sponsorship.size === 'md'
									? 'h-20 md:h-28 lg:h-36'
									: sponsorship.size === 'sm'
									? 'h-16 md:h-24 lg:h-32'
									: 'h-20 md:h-28 lg:h-36'
							}`}
						/>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	@keyframes pulse-gentle {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	@keyframes pulse-gentle-delayed {
		0%,
		100% {
			transform: scale(1) scaleY(-1);
		}
		50% {
			transform: scale(1.05) scaleY(-1);
		}
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 3s ease-in-out infinite;
	}

	.ornament-bottom {
		transform: scaleY(-1);
		/* animation: pulse-gentle-delayed 3s ease-in-out infinite 0.5s; */
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.6s ease-out forwards;
		opacity: 0;
	}

	.sponsor-logo {
		filter: brightness(1);
		transition:
			filter 0.3s ease,
			transform 0.3s ease;
	}

	.sponsor-logo:hover {
		filter: brightness(1.1) saturate(1.1);
		transform: scale(1.1);
	}

	/* Additional hover effects for sponsor grid */
	.grid > div:hover {
		transform: scale(1.05) translateY(-5px);
		transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
</style>
