<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	let mounted: boolean = false;
	let hymneAudio: HTMLAudioElement | null = null;
	let marsAudio: HTMLAudioElement | null = null;
	let hymneIsPlaying: boolean = false;
	let marsIsPlaying: boolean = false;
	let hymneCurrentTime: number = 0;
	let marsCurrentTime: number = 0;
	let hymneDuration: number = 0;
	let marsDuration: number = 0;

	// Loading states
	let hymneLoaded: boolean = false;
	let marsLoaded: boolean = false;
	let hymneError: string | null = null;
	let marsError: string | null = null;

	// Intersection Observer variables
	let hymneMarsSection: HTMLElement;
	let elementsVisible = {
		title: false,
		hymneSection: false,
		marsSection: false,
		decorativeElement: false
	};

	onMount(() => {
		mounted = true;

		// Initialize hymne audio
		try {
			hymneAudio = new Audio('/audios/hymne.mp3');
			hymneAudio.preload = 'metadata';

			hymneAudio.addEventListener('canplaythrough', () => {
				hymneLoaded = true;
				hymneError = null;
				console.log('Hymne audio loaded successfully');
			});

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

			hymneAudio.addEventListener('error', (e) => {
				console.error('Hymne audio error:', e);
				hymneError = 'Failed to load hymne audio';
				hymneLoaded = false;
			});

			// Force load
			hymneAudio.load();
		} catch (error) {
			console.error('Failed to initialize hymne audio:', error);
			hymneError = 'Hymne audio initialization failed';
		}

		// Initialize mars audio
		try {
			marsAudio = new Audio('/audios/mars.mp3');
			marsAudio.preload = 'metadata';

			marsAudio.addEventListener('canplaythrough', () => {
				marsLoaded = true;
				marsError = null;
				console.log('Mars audio loaded successfully');
			});

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

			marsAudio.addEventListener('error', (e) => {
				console.error('Mars audio error:', e);
				marsError = 'Failed to load mars audio';
				marsLoaded = false;
			});

			// Force load
			marsAudio.load();
		} catch (error) {
			console.error('Failed to initialize mars audio:', error);
			marsError = 'Mars audio initialization failed';
		}

		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Staggered animations
						setTimeout(() => (elementsVisible.title = true), 200);
						setTimeout(() => (elementsVisible.hymneSection = true), 500);
						setTimeout(() => (elementsVisible.marsSection = true), 800);
						setTimeout(() => (elementsVisible.decorativeElement = true), 1100);
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (hymneMarsSection) {
			observer.observe(hymneMarsSection);
		}

		return () => {
			if (hymneMarsSection) {
				observer.unobserve(hymneMarsSection);
			}
		};
	});

	onDestroy(() => {
		if (hymneAudio) {
			hymneAudio.pause();
			hymneAudio = null;
		}
		if (marsAudio) {
			marsAudio.pause();
			marsAudio = null;
		}
	});

	async function toggleHymne(): Promise<void> {
		if (!hymneAudio || !hymneLoaded) {
			console.warn('Hymne audio not ready');
			return;
		}

		try {
			if (hymneIsPlaying) {
				hymneAudio.pause();
			} else {
				const playPromise = hymneAudio.play();
				if (playPromise !== undefined) {
					await playPromise;
				}
			}
		} catch (error) {
			console.error('Hymne playback error:', error);
			hymneError = 'Playback failed';
		}
	}

	async function toggleMars(): Promise<void> {
		if (!marsAudio || !marsLoaded) {
			console.warn('Mars audio not ready');
			return;
		}

		try {
			if (marsIsPlaying) {
				marsAudio.pause();
			} else {
				const playPromise = marsAudio.play();
				if (playPromise !== undefined) {
					await playPromise;
				}
			}
		} catch (error) {
			console.error('Mars playback error:', error);
			marsError = 'Playback failed';
		}
	}

	function formatTime(seconds: number): string {
		if (!seconds || isNaN(seconds)) return '0:00';
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
	}

	function setHymneTime(event: MouseEvent): void {
		if (hymneAudio && hymneDuration && hymneLoaded) {
			const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const percent = (event.clientX - rect.left) / rect.width;
			hymneAudio.currentTime = percent * hymneDuration;
		}
	}

	function setMarsTime(event: MouseEvent): void {
		if (marsAudio && marsDuration && marsLoaded) {
			const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const percent = (event.clientX - rect.left) / rect.width;
			marsAudio.currentTime = percent * marsDuration;
		}
	}

	// Debug functions
	function debugHymne() {
		if (hymneAudio) {
			console.log('Hymne Audio Debug:', {
				src: hymneAudio.src,
				readyState: hymneAudio.readyState,
				networkState: hymneAudio.networkState,
				paused: hymneAudio.paused,
				duration: hymneAudio.duration,
				currentTime: hymneAudio.currentTime,
				volume: hymneAudio.volume,
				error: hymneAudio.error,
				loaded: hymneLoaded,
				errorMsg: hymneError
			});
		}
	}

	function debugMars() {
		if (marsAudio) {
			console.log('Mars Audio Debug:', {
				src: marsAudio.src,
				readyState: marsAudio.readyState,
				networkState: marsAudio.networkState,
				paused: marsAudio.paused,
				duration: marsAudio.duration,
				currentTime: marsAudio.currentTime,
				volume: marsAudio.volume,
				error: marsAudio.error,
				loaded: marsLoaded,
				errorMsg: marsError
			});
		}
	}

	$: hymneProgress = hymneDuration > 0 ? (hymneCurrentTime / hymneDuration) * 100 : 0;
	$: marsProgress = marsDuration > 0 ? (marsCurrentTime / marsDuration) * 100 : 0;
</script>

<div
	class="to-rose-s3-secondary mt-24 h-24 w-full bg-gradient-to-b from-transparent from-5% to-95%"
></div>

<section
	bind:this={hymneMarsSection}
	id="hymne-mars-explore-unsoed"
	class="section-padding-x text-light-base bg-rose-s3-secondary relative pt-8 pb-8 lg:pt-48 md:pb-36 lg:pb-84 xl:pb-72"
>
	<div class="container mx-auto max-w-screen-xl">
		<div class="flex flex-col items-center">
			<!-- Header -->
			{#if elementsVisible.title}
				<div class="mb-8 text-center md:mb-12 lg:mb-16">
					<h2
						class="font-junigarden text-light-base mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl"
						in:fade={{ duration: 800, delay: 0 }}
					>
						Hymne & Mars Unsoed
					</h2>
				</div>
			{/if}

			<!-- Content Container -->
			<div
				class="text-light-base flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-12"
			>
				<!-- Hymne Section -->
				{#if elementsVisible.hymneSection}
					<div class="w-full md:w-2/5" in:fly={{ x: -50, duration: 800, delay: 0 }}>
						<div class="flex flex-row">
							<div class="mr-4 min-h-full w-1 rounded-xl bg-white/70 md:hidden"></div>
							<div class="flex-1">
								<div class="mb-6">
									<h3 class="normal-font-size mb-2 tracking-wide uppercase italic">Hymne Unsoed</h3>
									<h4 class="font-junigarden text-xl font-medium md:text-2xl lg:text-3xl">
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
									<div
										class="audio-player rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
									>
										<div class="mb-4 flex items-center gap-3">
											<button
												class="group flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30
                                                {hymneError ? 'bg-red-500/30' : ''} 
                                                {!hymneLoaded ? 'opacity-70' : ''}"
												on:click={toggleHymne}
												on:dblclick={debugHymne}
												disabled={!hymneLoaded || !!hymneError}
											>
												{#if !hymneLoaded && !hymneError}
													<!-- Loading Icon -->
													<svg class="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
														<circle
															class="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															stroke-width="4"
															fill="none"
														></circle>
														<path
															class="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
												{:else if hymneError}
													<!-- Error Icon -->
													<svg
														class="h-5 w-5 text-red-300"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
													>
														<circle cx="12" cy="12" r="10"></circle>
														<line x1="15" y1="9" x2="9" y2="15"></line>
														<line x1="9" y1="9" x2="15" y2="15"></line>
													</svg>
												{:else if hymneIsPlaying}
													<!-- Pause Icon -->
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
													<h5 class="text-sm font-medium text-white/90">
														{hymneError ? 'Error' : hymneLoaded ? 'Hymne Unsoed' : 'Loading...'}
													</h5>
													<span class="text-xs text-white/70">
														{formatTime(hymneCurrentTime)} / {formatTime(hymneDuration)}
													</span>
												</div>

												<!-- Progress Bar -->
												<button
													class="group h-2 w-full cursor-pointer rounded-full bg-white/20 {!hymneLoaded
														? 'cursor-not-allowed'
														: ''}"
													on:click={setHymneTime}
													disabled={!hymneLoaded}
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

												<p class="mt-1 text-xs text-white/70">
													{hymneError || 'Audio Resmi Universitas'}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}

				<!-- Center Divider -->
				<div class="bg-light-base/70 hidden min-h-96 w-1 rounded-full md:block"></div>

				<!-- Mars Section -->
				{#if elementsVisible.marsSection}
					<div class="w-full md:w-2/5" in:fly={{ x: 50, duration: 800, delay: 0 }}>
						<div class="flex flex-row">
							<div class="bg-light-base/70 mr-4 min-h-full w-1 rounded-xl md:hidden"></div>
							<div class="flex-1">
								<div class="mb-6">
									<h3 class="mb-2 text-sm tracking-wide uppercase italic md:text-base">
										Mars Unsoed
									</h3>
									<h4 class="font-junigarden text-xl font-medium md:text-2xl lg:text-3xl">
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
										Bercita-cita yang luhur
									</p>
								</div>

								<!-- Enhanced Audio Player -->
								<div class="relative mt-4">
									<div
										class="audio-player rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
									>
										<div class="mb-4 flex items-center gap-3">
											<button
												class="group flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30
                                                {marsError ? 'bg-red-500/30' : ''} 
                                                {!marsLoaded ? 'opacity-70' : ''}"
												on:click={toggleMars}
												on:dblclick={debugMars}
												disabled={!marsLoaded || !!marsError}
											>
												{#if !marsLoaded && !marsError}
													<!-- Loading Icon -->
													<svg class="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
														<circle
															class="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															stroke-width="4"
															fill="none"
														></circle>
														<path
															class="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
												{:else if marsError}
													<!-- Error Icon -->
													<svg
														class="h-5 w-5 text-red-300"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
													>
														<circle cx="12" cy="12" r="10"></circle>
														<line x1="15" y1="9" x2="9" y2="15"></line>
														<line x1="9" y1="9" x2="15" y2="15"></line>
													</svg>
												{:else if marsIsPlaying}
													<!-- Pause Icon -->
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
													<h5 class="text-sm font-medium text-white/90">
														{marsError ? 'Error' : marsLoaded ? 'Mars Unsoed' : 'Loading...'}
													</h5>
													<span class="text-xs text-white/70">
														{formatTime(marsCurrentTime)} / {formatTime(marsDuration)}
													</span>
												</div>

												<!-- Progress Bar -->
												<button
													class="group h-2 w-full cursor-pointer rounded-full bg-white/20 {!marsLoaded
														? 'cursor-not-allowed'
														: ''}"
													on:click={setMarsTime}
													disabled={!marsLoaded}
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

												<p class="mt-1 text-xs text-white/70">
													{marsError || 'Audio Resmi Universitas'}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Decorative Element -->
	{#if elementsVisible.decorativeElement}
		<div
			class="absolute bottom-12 left-0 z-10 md:bottom-0"
			in:scale={{ duration: 800, start: 0.8, delay: 0 }}
		>
			<img
				src="/img/elements/putri-bermusik.png"
				alt="Musical decoration"
				class="animate-float-delayed hidden w-full max-w-xs md:block md:max-w-sm xl:max-w-md"
			/>
		</div>
	{/if}
</section>

<style>
	@keyframes float-delayed {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	.animate-float-delayed {
		animation: float-delayed 4s ease-in-out infinite 1s;
	}

	.audio-player {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.audio-player:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	button:hover {
		transform: translateY(-1px);
	}

	button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	@media (max-width: 768px) {
		.audio-player:hover {
			transform: none;
			box-shadow: none;
		}
	}
</style>
