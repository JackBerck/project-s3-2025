<script lang="ts">
	import { onMount } from 'svelte';

	let mounted: boolean = false;
	let hymneAudio: HTMLAudioElement | null = null;
	let marsAudio: HTMLAudioElement | null = null;
	let hymneIsPlaying: boolean = false;
	let marsIsPlaying: boolean = false;
	let hymneCurrentTime: number = 0;
	let marsCurrentTime: number = 0;
	let hymneDuration: number = 0;
	let marsDuration: number = 0;

	onMount(() => {
		mounted = true;

		// Initialize audio elements
		hymneAudio = document.getElementById('hymne-audio') as HTMLAudioElement;
		marsAudio = document.getElementById('mars-audio') as HTMLAudioElement;

		// Add event listeners for hymne
		if (hymneAudio) {
			hymneAudio.addEventListener('loadedmetadata', () => {
				hymneDuration = hymneAudio!.duration;
			});

			hymneAudio.addEventListener('timeupdate', () => {
				hymneCurrentTime = hymneAudio!.currentTime;
			});

			hymneAudio.addEventListener('play', () => {
				hymneIsPlaying = true;
				// Pause mars if playing
				if (marsAudio && !marsAudio.paused) {
					marsAudio.pause();
				}
			});

			hymneAudio.addEventListener('pause', () => {
				hymneIsPlaying = false;
			});

			hymneAudio.addEventListener('ended', () => {
				hymneIsPlaying = false;
			});
		}

		// Add event listeners for mars
		if (marsAudio) {
			marsAudio.addEventListener('loadedmetadata', () => {
				marsDuration = marsAudio!.duration;
			});

			marsAudio.addEventListener('timeupdate', () => {
				marsCurrentTime = marsAudio!.currentTime;
			});

			marsAudio.addEventListener('play', () => {
				marsIsPlaying = true;
				// Pause hymne if playing
				if (hymneAudio && !hymneAudio.paused) {
					hymneAudio.pause();
				}
			});

			marsAudio.addEventListener('pause', () => {
				marsIsPlaying = false;
			});

			marsAudio.addEventListener('ended', () => {
				marsIsPlaying = false;
			});
		}
	});

	function toggleHymne(): void {
		if (hymneAudio) {
			if (hymneIsPlaying) {
				hymneAudio.pause();
			} else {
				hymneAudio.play();
			}
		}
	}

	function toggleMars(): void {
		if (marsAudio) {
			if (marsIsPlaying) {
				marsAudio.pause();
			} else {
				marsAudio.play();
			}
		}
	}

	function formatTime(seconds: number): string {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
	}

	function setHymneTime(event: MouseEvent): void {
		if (hymneAudio && hymneDuration) {
			const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const percent = (event.clientX - rect.left) / rect.width;
			hymneAudio.currentTime = percent * hymneDuration;
		}
	}

	function setMarsTime(event: MouseEvent): void {
		if (marsAudio && marsDuration) {
			const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const percent = (event.clientX - rect.left) / rect.width;
			marsAudio.currentTime = percent * marsDuration;
		}
	}

	$: hymneProgress = hymneDuration > 0 ? (hymneCurrentTime / hymneDuration) * 100 : 0;
	$: marsProgress = marsDuration > 0 ? (marsCurrentTime / marsDuration) * 100 : 0;
</script>

<div
	class="to-rose-s3-secondary mt-24 h-24 w-full bg-gradient-to-b from-transparent from-5% to-95%"
></div>

<section
	id="hymne-mars-explore-unsoed"
	class="section-padding-x text-light-base bg-rose-s3-secondary relative pt-8 pb-8 lg:pt-48 lg:pb-36"
>
	<div class="container mx-auto max-w-screen-xl">
		<div class="flex flex-col items-center">
			<!-- Header -->
			<div class="mb-8 text-center md:mb-12 lg:mb-16">
				<h2
					class="font-berkshire-swash text-light-base mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl {mounted
						? 'animate-fade-in'
						: 'opacity-0'}"
				>
					Hymne & Mars Unsoed
				</h2>
			</div>

			<!-- Content Container -->
			<div
				class="text-light-base flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-12"
			>
				<!-- Hymne Section -->
				<div
					class="w-full md:w-2/5 {mounted
						? 'animate-slide-in-left'
						: 'translate-x-[-50px] opacity-0'}"
				>
					<!-- ... existing content ... -->
					<div class="flex flex-row">
						<div class="mr-4 min-h-full w-1 rounded-xl bg-white/70 md:hidden"></div>
						<div class="flex-1">
							<div class="mb-6">
								<h3 class="normal-font-size mb-2 tracking-wide uppercase italic">Hymne Unsoed</h3>
								<h4 class="font-berkshire-swash text-xl font-medium md:text-2xl lg:text-3xl">
									Harumkan Wiyata Tinggi
								</h4>
							</div>

							<div class="mb-6">
								<p class="leading-relaxed">
									Karyamu cendekia didambakan negara<br />
									Dharmamu sepenuhnya sumbangkan membangun nusa<br />
									Membina sarana karya raksasa menuju bangsa sejahtera<br />
									Budhaya pribadi yang asli murni harumkan wiyata tinggi
								</p>
							</div>

							<!-- Enhanced Audio Player -->
							<div class="relative mt-4">
								<div class="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
									<div class="mb-4 flex items-center gap-3">
										<button
											class="group flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30"
											on:click={toggleHymne}
										>
											{#if hymneIsPlaying}
												<!-- Pause Icon with Animation -->
												<svg
													class="h-6 w-6 text-white transition-all duration-300"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<rect x="6" y="4" width="2" height="12" rx="1"></rect>
													<rect x="12" y="4" width="2" height="12" rx="1"></rect>
												</svg>
											{:else}
												<!-- Play Icon -->
												<svg
													class="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M8 5v10l8-5-8-5z"></path>
												</svg>
											{/if}
										</button>

										<div class="flex-1">
											<div class="mb-1 flex items-center justify-between">
												<h5 class="text-sm font-medium text-white/90">Hymne Unsoed</h5>
												<span class="text-xs text-white/70">
													{formatTime(hymneCurrentTime)} / {formatTime(hymneDuration)}
												</span>
											</div>

											<!-- Progress Bar -->
											<button
												class="group h-2 w-full cursor-pointer rounded-full bg-white/20"
												on:click={setHymneTime}
											>
												<div
													class="relative h-full rounded-full bg-white transition-all duration-300"
													style="width: {hymneProgress}%"
												>
													{#if hymneIsPlaying}
														<div
															class="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 animate-pulse rounded-full bg-white"
														></div>
													{/if}
												</div>
											</button>

											<p class="mt-1 text-xs text-white/70">Audio Resmi Universitas</p>
										</div>
									</div>

									<!-- Hidden Audio Element -->
									<audio id="hymne-audio" src="/audios/hymne.mp3" preload="metadata" class="hidden"
									></audio>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Center Divider -->
				<div class="bg-light-base/70 hidden min-h-96 w-1 rounded-full md:block"></div>

				<!-- Mars Section -->
				<div
					class="w-full md:w-2/5 {mounted
						? 'animate-slide-in-right'
						: 'translate-x-[50px] opacity-0'}"
				>
					<div class="flex flex-row">
						<div class="bg-light-base/70 mr-4 min-h-full w-1 rounded-xl md:hidden"></div>
						<div class="flex-1">
							<div class="mb-6">
								<h3 class="mb-2 text-sm tracking-wide uppercase italic md:text-base">
									Mars Unsoed
								</h3>
								<h4 class="font-berkshire-swash text-xl font-medium md:text-2xl lg:text-3xl">
									Tingkatkan Martabat Bangsa
								</h4>
							</div>

							<div class="mb-6">
								<p class="leading-relaxed">
									Kami Mahasiswa Unsoed bertekun dalam wiyata<br />
									Jiwa Panglima besar Kita cerminkan hasrat membaja<br />
									Memupuk rasa persatuan berdasarkan Pancasila<br />
									Memimpin rakyat kesejahtera serta pribadi bangsa<br />
									<br />
									<strong>UNIVERSITAS NEGERI JENDERAL SOEDIRMAN</strong><br />
									Maju terus pantang mundur<br />
									<strong>UNIVERSITAS NEGERI JENDERAL SOEDIRMAN</strong><br />
									Bercita-cita yang luhur<br />
									<br />
									Kami Mahasiswa Unsoed siap mengabdikan karya<br />
									Masa Hari-hari datang kita hadapi bersama<br />
									Seluruh rakyat Indonesia rasakan dharma sarjana<br />
									Mencapai cita mengabdi Bangsa Indonesia yang jaya<br />
									<br />
									<strong>UNIVERSITAS NEGERI JENDERAL SOEDIRMAN</strong><br />
									Isyaf akan tugas mulia<br />
									<strong>UNIVERSITAS NEGERI JENDERAL SOEDIRMAN</strong><br />
									Tinggikan martabat bangsa
								</p>
							</div>

							<!-- Enhanced Audio Player -->
							<div class="relative mt-4">
								<div class="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
									<div class="mb-4 flex items-center gap-3">
										<button
											class="group flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30"
											on:click={toggleMars}
										>
											{#if marsIsPlaying}
												<!-- Pause Icon with Animation -->
												<svg
													class="h-6 w-6 text-white transition-all duration-300"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<rect x="6" y="4" width="2" height="12" rx="1"></rect>
													<rect x="12" y="4" width="2" height="12" rx="1"></rect>
												</svg>
											{:else}
												<!-- Play Icon -->
												<svg
													class="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M8 5v10l8-5-8-5z"></path>
												</svg>
											{/if}
										</button>

										<div class="flex-1">
											<div class="mb-1 flex items-center justify-between">
												<h5 class="text-sm font-medium text-white/90">Mars Unsoed</h5>
												<span class="text-xs text-white/70">
													{formatTime(marsCurrentTime)} / {formatTime(marsDuration)}
												</span>
											</div>

											<!-- Progress Bar -->
											<button
												class="group h-2 w-full cursor-pointer rounded-full bg-white/20"
												on:click={setMarsTime}
											>
												<div
													class="relative h-full rounded-full bg-white transition-all duration-300"
													style="width: {marsProgress}%"
												>
													{#if marsIsPlaying}
														<div
															class="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 animate-pulse rounded-full bg-white"
														></div>
													{/if}
												</div>
											</button>

											<p class="mt-1 text-xs text-white/70">Audio Resmi Universitas</p>
										</div>
									</div>

									<!-- Hidden Audio Element -->
									<audio id="mars-audio" src="/audios/mars.mp3" preload="metadata" class="hidden"
									></audio>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Decorative Element -->
	<div class="absolute bottom-12 left-0 z-10 md:bottom-0">
		<img
			src="/img/elements/putri-bermusik.png"
			alt="Mountain and tree decoration"
			class="animate-float-delayed hidden w-full max-w-xs md:block md:max-w-sm xl:max-w-md"
		/>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slide-in-left {
		from {
			opacity: 0;
			transform: translateX(-50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slide-in-right {
		from {
			opacity: 0;
			transform: translateX(50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
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

	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
	}

	.animate-slide-in-left {
		animation: slide-in-left 0.8s ease-out 0.2s forwards;
	}

	.animate-slide-in-right {
		animation: slide-in-right 0.8s ease-out 0.4s forwards;
	}

	.animate-float-delayed {
		animation: float-delayed 4s ease-in-out infinite 1s;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.animate-slide-in-left,
		.animate-slide-in-right {
			animation: fade-in 0.8s ease-out forwards;
		}
	}
</style>
