<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { visi, misi } from '../../data/visi-misi';

	let visiMisiSection: HTMLElement;
	let elementsVisible = {
		visiSection: false,
		misiSection: false,
		divider: false
	};

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.visiSection = true), 200);
						setTimeout(() => (elementsVisible.divider = true), 500);
						setTimeout(() => (elementsVisible.misiSection = true), 700);
					}
				});
			},
			{
				threshold: 0.3,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (visiMisiSection) {
			observer.observe(visiMisiSection);
		}

		return () => {
			if (visiMisiSection) {
				observer.unobserve(visiMisiSection);
			}
		};
	});
</script>

<section
	bind:this={visiMisiSection}
	id="visi-misi-explore-unsoed"
	class="section-padding-x bg-rose-s3-secondary text-light-base pt-60 pb-12"
>
	<div class="container max-w-screen-xl">
		<div class="flex flex-wrap gap-4 md:gap-8">
			<div class="m-auto flex flex-col flex-wrap justify-center gap-4 md:flex-row md:gap-0">
				<!-- Visi Section -->
				{#if elementsVisible.visiSection}
					<div class="flex-1 items-center" in:fly={{ x: -50, duration: 800, delay: 0 }}>
						<h2
							class="font-berkshire-swash mb-4 text-center font-semibold"
							in:fly={{ y: 30, duration: 600, delay: 200 }}
						>
							Visi
						</h2>
						<p class="text-justify leading-relaxed" in:fade={{ duration: 800, delay: 400 }}>
							{visi}
						</p>
					</div>
				{/if}

				<!-- Divider -->
				{#if elementsVisible.divider}
					<div
						class="bg-light-base divider-line mx-4 hidden min-h-full min-w-2 rounded-md md:block"
						in:fly={{ y: 50, duration: 600, delay: 0 }}
					></div>
				{/if}

				<!-- Misi Section -->
				{#if elementsVisible.misiSection}
					<div class="flex-1 items-center" in:fly={{ x: 50, duration: 800, delay: 0 }}>
						<h2
							class="font-berkshire-swash mb-4 text-center font-semibold"
							in:fly={{ y: 30, duration: 600, delay: 200 }}
						>
							Misi
						</h2>
						<ol
							class="list-decimal pl-4 text-justify leading-relaxed"
							in:fade={{ duration: 800, delay: 400 }}
						>
							{#each misi as item, index}
								<li
									class="animate-fade-in-item mb-2"
									style="animation-delay: {600 + index * 150}ms"
								>
									{item}
								</li>
							{/each}
						</ol>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in-item {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-item {
		animation: fade-in-item 0.6s ease-out forwards;
		opacity: 0;
	}

	.divider-line {
		transition: transform 0.3s ease;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.8),
			rgba(255, 255, 255, 0.3)
		);
	}

	.divider-line:hover {
		transform: scaleY(1.05);
	}

	/* Enhanced typography */
	h2 {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	h2:hover {
		transform: scale(1.05);
	}

	p,
	li {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
		transition: transform 0.2s ease;
	}

	li:hover {
		transform: translateX(5px);
	}

	/* Responsive enhancements */
	@media (max-width: 768px) {
		.flex-1 {
			margin-bottom: 2rem;
		}
	}
</style>
