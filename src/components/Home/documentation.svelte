<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/swiper-bundle.css';

	const docsImage = [
		'./img/documentations/documentation-1.webp',
		'./img/documentations/documentation-2.webp',
		'./img/documentations/documentation-3.webp',
		'./img/documentations/documentation-4.webp',
		'./img/documentations/documentation-5.webp',
		'./img/documentations/documentation-6.webp',
		'./img/documentations/documentation-7.webp',
		'./img/documentations/documentation-8.webp',
		'./img/documentations/documentation-9.webp',
		'./img/documentations/documentation-10.webp',
		'./img/documentations/documentation-11.webp',
		'./img/documentations/documentation-12.webp'
	];

	let documentationSwiper: Swiper;

	onMount(() => {
		documentationSwiper = new Swiper('.documentation-card', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			initialSlide: 2,
			speed: 600,
			preventClicks: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 0,
				stretch: 80,
				depth: 350,
				modifier: 1,
				slideShadows: true
			},
			on: {
				click(params) {
					documentationSwiper.slideTo(params.clickedIndex);
				}
			}
		});
	});
</script>

<div class="swiper documentation-card">
	<div class="swiper-wrapper">
		{#each docsImage as image, index}
			<div
				class="swiper-slide max-w-[240px] shadow-md sm:max-w-[360px] lg:max-w-[480px]"
			>
				<img src={image} alt="documentation s3 {index + 1}" />
			</div>
		{/each}
	</div>
</div>

<style>
	.swiper {
		width: 100%;
		padding: 50px 0;
	}

	.documentation-card {
		overflow: visible;
	}

	.swiper-slide {
		position: relative;
		aspect-ratio: 16/10;
		border-radius: 14px;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
		user-select: none;
	}
</style>
