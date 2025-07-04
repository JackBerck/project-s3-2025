<script lang="ts">
	import { onMount } from 'svelte';

	// Types
	interface RunningTextItem {
		text: string;
		image?: string;
	}

	// Props
	export let addClass: string = ''; // Additional classes for styling
	export let items: RunningTextItem[] = []; // Array of objects with text and optional image
	export let direction: 'left' | 'right' = 'left'; // 'left' or 'right'
	export let speed: number = 100; // pixels per second
	// export let gap: number = 100; // gap between items in pixels
	// export let backgroundColor: string = '#1e40af'; // background color
	// export let textColor: string = '#ffffff'; // text color
	// export let fontSize: string = '1rem';
	// export let fontWeight: string = 'normal';
	// export let height: string = '60px';
	// export let pauseOnHover: boolean = true;

	let container: HTMLDivElement;
	let content: HTMLDivElement;
	let isPaused: boolean = false;

	// Default items if none provided
	const defaultItems: RunningTextItem[] = [
		{ text: 'Soedirman Student Summit 2025', image: '/logo.png' },
		{ text: 'Soedirman Student Summit 2025', image: '/logo.png' },
		{ text: 'Soedirman Student Summit 2025', image: '/logo.png' },
	];

	$: displayItems = items.length > 0 ? items : defaultItems;

	onMount(() => {
		if (content && container) {
			setupAnimation();
		}
	});

	function setupAnimation(): void {
		const contentWidth = content.scrollWidth;
		const containerWidth = container.clientWidth;

		// Calculate animation duration based on speed
		const duration = (contentWidth + containerWidth) / speed;

		// Set CSS custom properties
		content.style.setProperty('--content-width', `${contentWidth}px`);
		content.style.setProperty('--container-width', `${containerWidth}px`);
		content.style.setProperty('--duration', `${duration}s`);
		content.style.setProperty('--direction', direction === 'left' ? '1' : '-1');
	}

	// function handleMouseEnter(): void {
	// 	if (pauseOnHover) {
	// 		isPaused = true;
	// 	}
	// }

	// function handleMouseLeave(): void {
	// 	if (pauseOnHover) {
	// 		isPaused = false;
	// 	}
	// }
</script>

<!-- on:mouseenter={handleMouseEnter}
on:mouseleave={handleMouseLeave} -->
<div
	class={`font-junigarden text-dark-base relative flex w-full items-center overflow-hidden bg-[#FFD464] text-2xl whitespace-nowrap uppercase select-none ${addClass ? addClass : ''}`}
	bind:this={container}
	role="marquee"
	aria-label="Running text announcement"
>
	<div
		class="flex items-center gap-16 md:gap-24 {isPaused ? '[animation-play-state:paused]' : ''}"
		class:animate-scroll={!isPaused}
		bind:this={content}
		style="animation-duration: var(--duration, 20s);"
	>
		<!-- First set of items -->
		{#each displayItems as item, index}
			<div class="flex items-center gap-2 whitespace-nowrap" data-index={index}>
				{#if item.image}
					<img src={item.image} alt="Icon" class="w-12 md:w-16" loading="lazy" />
				{/if}
				<span class="text-xl md:text-2xl leading-relaxed tracking-widest font-semibold whitespace-nowrap"
					>Soedirman Student Summit <span class="font-miskan">2025</span></span
				>
			</div>
		{/each}

		<!-- Duplicate set for seamless loop -->
		{#each displayItems as item, index}
			<div class="flex items-center gap-2 whitespace-nowrap" data-index={index}>
				{#if item.image}
					<img src={item.image} alt="Icon" class="w-12 md:w-16" loading="lazy" />
				{/if}
				<span class="text-xl md:text-2xl leading-relaxed tracking-widest font-semibold whitespace-nowrap"
					>Soedirman Student Summit <span class="font-miskan">2025</span></span
				>
			</div>
		{/each}
	</div>
</div>

<style>
	.animate-scroll {
		animation: scroll var(--duration, 20s) linear infinite;
		will-change: transform;
	}

	@keyframes scroll {
		0% {
			transform: translateX(calc(var(--container-width, 100vw) * var(--direction, 1)));
		}
		100% {
			transform: translateX(calc(-1 * var(--content-width, 100%) * var(--direction, 1)));
		}
	}
</style>
