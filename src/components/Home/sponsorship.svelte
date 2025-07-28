<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import sponsorships from '../../data/sponsorships';

	onMount(() => {
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
	id="sponsorship-home"
	class="section-padding-x text-light-base bg-rose-s3-secondary relative overflow-hidden bg-gradient-to-t py-12 md:py-12"
>
	<div class="container max-w-screen-xl">
		<!-- Header Section -->
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="w-36 brightness-0 invert md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="0"
			/>

			<h2
				class="font-berkshire-swash text-light-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="100"
			>
				Sponsorship
			</h2>

			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="ornament-bottom w-36 scale-y-[-1] brightness-0 invert md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="200"
			/>
		</div>

		<!-- Sponsors Grid -->
		<div
			class="flex flex-wrap items-center justify-center gap-8 xl:gap-16"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="300"
		>
			{#each sponsorships as sponsorship, index}
				<div
					class="flex items-center justify-center transition-transform"
					data-aos="zoom-in"
					data-aos-duration="600"
					data-aos-delay={400 + index * 100}
				>
					<img
						src={sponsorship.logo}
						alt={sponsorship.name}
						class={`sponsor-logo w-auto object-contain transition-all duration-300 hover:brightness-110 ${
							sponsorship.size === 'xl'
								? 'h-24 md:h-32 lg:h-40'
								: sponsorship.size === 'md' && sponsorship.name !== 'Madu Nusantara'
									? 'h-20 md:h-28 lg:h-36'
									: sponsorship.size === 'sm'
										? 'h-16 md:h-24 lg:h-32'
										: sponsorship.size === 'xs'
											? 'h-12 md:h-20 lg:h-28'
											: ''
						} ${sponsorship.name === 'Madu Nusantara' ? 'w-3 md:w-96 lg:w-114' : ''}`}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ...existing styles... */
</style>
