<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Props
	export let audioPath = '/audios/gensoed.mp3';
	export let addClass = '';

	// State variables
	let isPlaying: boolean = false;
	let expanded: boolean = false;
	let vinylVisible: boolean = false;
	let audioRef: HTMLAudioElement | null = null;
	let buttonRef: HTMLButtonElement | null = null;
	let vinylRef: HTMLImageElement | null = null;

	// Timeouts for cleanup
	let expandTimeout: number | undefined;
	let vinylTimeout: number | undefined;

	// Audio initialization
	onMount(() => {
		audioRef = new Audio(audioPath);
		audioRef.loop = true;

		audioRef.addEventListener('ended', () => {
			isPlaying = false;
		});

		return () => {
			if (audioRef) {
				audioRef.pause();
				audioRef = null;
			}
		};
	});

	// Reactive statements for side effects
	$: if (isPlaying) {
		expandTimeout = setTimeout(() => {
			expanded = true;
		}, 50);
	} else {
		expanded = false;
		if (expandTimeout) {
			clearTimeout(expandTimeout);
		}
	}

	$: if (vinylRef) {
		vinylRef.style.transform = isPlaying ? 'rotate(0deg)' : 'rotate(360deg)';
		vinylTimeout = setTimeout(() => {
			vinylVisible = isPlaying;
		}, 70);
	} else {
		vinylTimeout = setTimeout(() => {
			vinylVisible = isPlaying;
		}, 100);
	}

	// Cleanup timeouts
	onDestroy(() => {
		if (expandTimeout) clearTimeout(expandTimeout);
		if (vinylTimeout) clearTimeout(vinylTimeout);
	});

	function togglePlayback(): void {
		if (!audioRef) return;

		isPlaying = !isPlaying;

		if (isPlaying) {
			audioRef.play().catch(console.error);
		} else {
			audioRef.pause();
		}
	}
</script>

<button
	bind:this={buttonRef}
	on:click={togglePlayback}
	class="audio-player-button fixed right-4 bottom-4 bg-[#FFD464] z-80 flex transform cursor-pointer items-center justify-center rounded-full border border-white/30 p-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 outline-none hover:scale-105 hover:bg-[#FFD464]/80 hover:shadow-xl {expanded
		? 'expanded'
		: 'collapsed'} {addClass}"
	aria-label={isPlaying ? 'Pause' : 'Play'}
>
	<div class="relative z-10 flex items-center gap-3">
		<!-- Vinyl Container -->
		<div class="vinyl-container relative {expanded ? 'mr-3' : 'mr-0'}">
			<img
				bind:this={vinylRef}
				src="/img/s3.png"
				alt="Vinyl"
				class="vinyl-disc h-6 min-h-[24px] w-6 min-w-[24px] rounded-full {vinylVisible
					? 'vinyl-visible vinyl-spinning'
					: 'vinyl-hidden'}"
			/>
		</div>

		<!-- Controls Container -->
		<div class="controls-container flex items-center gap-2">
			{#if isPlaying}
				<!-- Pause Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="transition-all duration-200"
				>
					<rect x="6" y="4" width="4" height="16"></rect>
					<rect x="14" y="4" width="4" height="16"></rect>
				</svg>
			{:else}
				<!-- Play Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="transition-all duration-200"
				>
					<polygon points="5 3 19 12 5 21 5 3"></polygon>
				</svg>
			{/if}
			<span class="text-sm font-semibold transition-all duration-300 md:text-base">
				{isPlaying ? 'Pause' : 'Play'}
			</span>
		</div>
	</div>
</button>

<style>
	.vinyl-spinning {
		animation: spin 2s linear infinite;
	}

	.vinyl-visible {
		opacity: 1;
		transform: scale(1);
		transition:
			opacity 0.5s ease-in-out,
			transform 0.5s ease-in-out;
		display: block;
	}

	.vinyl-hidden {
		opacity: 0;
		transform: scale(0);
		transition:
			opacity 0.5s ease-in-out,
			transform 0.5s ease-in-out;
		display: none;
	}

	.vinyl-container {
		transition: margin-right 0.5s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.audio-player-button {
		overflow: hidden;
		white-space: nowrap;
		min-width: 100px;
		transition: all 0.5s ease-in-out;
	}

	.audio-player-button.expanded {
		animation: expandButton 0.5s ease-in-out forwards;
	}

	.audio-player-button.collapsed {
		animation: collapseButton 0.5s ease-in-out forwards;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes expandButton {
		0% {
			max-width: 100px;
			width: auto;
		}
		100% {
			max-width: 200px;
			width: auto;
		}
	}

	@keyframes collapseButton {
		0% {
			max-width: 200px;
			width: auto;
		}
		100% {
			max-width: 100px;
			width: auto;
		}
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.audio-player-button {
			min-width: 80px;
		}

		@keyframes expandButton {
			0% {
				max-width: 80px;
			}
			100% {
				max-width: 160px;
			}
		}

		@keyframes collapseButton {
			0% {
				max-width: 160px;
			}
			100% {
				max-width: 80px;
			}
		}
	}
</style>
