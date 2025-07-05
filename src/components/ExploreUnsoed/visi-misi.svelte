<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { visi, misi } from '../../data/visi-misi';

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		AOS.refresh();
	});
</script>

<section
	id="visi-misi-explore-unsoed"
	class="section-padding-x bg-rose-s3-secondary text-light-base pt-60 pb-12"
>
	<div class="container max-w-screen-xl">
		<div class="flex flex-wrap gap-4 md:gap-8">
			<div class="m-auto flex flex-col flex-wrap justify-center gap-4 md:flex-row md:gap-0">
				<!-- Visi Section -->
				<div
					class="flex-1 items-center"
					data-aos="fade-right"
					data-aos-duration="800"
					data-aos-delay="200"
				>
					<h2
						class="font-berkshire-swash mb-4 text-center font-semibold"
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="400"
					>
						Visi
					</h2>
					<p
						class="text-justify leading-relaxed"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="600"
					>
						{visi}
					</p>
				</div>

				<!-- Divider -->
				<div
					class="bg-light-base divider-line mx-4 hidden min-h-full min-w-2 rounded-md md:block"
					data-aos="fade-in"
					data-aos-duration="600"
					data-aos-delay="800"
				></div>

				<!-- Misi Section -->
				<div
					class="flex-1 items-center"
					data-aos="fade-left"
					data-aos-duration="800"
					data-aos-delay="1000"
				>
					<h2
						class="font-berkshire-swash mb-4 text-center font-semibold"
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="1200"
					>
						Misi
					</h2>
					<ol
						class="list-decimal pl-4 text-justify leading-relaxed"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="1400"
					>
						{#each misi as item, index}
							<li
								class="animate-fade-in-item mb-2"
								style="animation-delay: {1600 + index * 150}ms"
								data-aos="fade-up"
								data-aos-duration="600"
								data-aos-delay={1600 + index * 150}
							>
								{item}
							</li>
						{/each}
					</ol>
				</div>
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

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}

		.animate-fade-in-item {
			animation: none;
			opacity: 1;
		}
	}
</style>
