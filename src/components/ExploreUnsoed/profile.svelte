<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export let id: string;
	export let title: string;
	export let link: string;

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

<section {id} class="section-padding-x overflow-hidden bg-[#F9F7EB] pt-12 pb-12 md:pt-28 xl:pt-72">
	<div class="container max-w-screen-xl">
		<div
			class="flex flex-col items-center justify-center gap-4 text-center md:flex-row-reverse md:gap-8 md:text-left lg:gap-16"
		>
			<h2
				class="text-rose-s3-base font-berkshire-swash text-4xl font-semibold lg:text-5xl"
				data-aos="fade-left"
				data-aos-duration="800"
				data-aos-delay="200"
			>
				{title}
			</h2>

			<iframe
				class="video-frame aspect-video w-full rounded-md drop-shadow-[0_0px_5px] md:max-w-md xl:max-w-xl"
				src={link}
				{title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
				frameborder="0"
				data-aos="zoom-in"
				data-aos-duration="800"
				data-aos-delay="500"
			>
			</iframe>
		</div>
	</div>
</section>

<style>
	.video-frame {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
		border-radius: 12px;
	}

	.video-frame:hover {
		transform: scale(1.02) translateY(-5px);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
	}

	h2 {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	h2:hover {
		transform: scale(1.05);
	}

	/* Enhanced responsive behavior */
	@media (max-width: 768px) {
		.video-frame:hover {
			transform: scale(1.01);
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
		}
	}

	/* Section background enhancement */
	section {
		position: relative;
	}

	section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100px;
		background: linear-gradient(to bottom, rgba(249, 247, 235, 0.8), rgba(249, 247, 235, 1));
		pointer-events: none;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}
	}
</style>
