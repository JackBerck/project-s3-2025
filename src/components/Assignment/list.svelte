<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { assignments } from '../../data/assignments';

	let showModal: boolean = false;
	let selectedAssignment: any = null;

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 50,
			delay: 0
		});

		AOS.refresh();
	});

	function openModal(assignment: any, index: number): void {
		selectedAssignment = { ...assignment, index: index + 1 };
		showModal = true;
	}

	function closeModal(): void {
		showModal = false;
		selectedAssignment = null;
	}

	// Close modal on escape key
	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && showModal) {
			closeModal();
		}
	}

	// Function to check if assignment is available
	function isAssignmentAvailable(openedAt?: Date): boolean {
		if (!openedAt) return true; // Jika tidak ada openedAt, dianggap tersedia
		const now = new Date();
		return now >= openedAt;
	}

	// Function to get creative coming soon message
	function getComingSoonMessage(openedAt?: Date): string {
		if (!openedAt) return 'Segera!';

		const now = new Date();
		const timeDiff = openedAt.getTime() - now.getTime();
		const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

		const messages = [
			'Masih Disiapkan',
			'Dalam Pengembangan',
			'Tunggu Kejutan',
			'Sedang Dikemas',
			'Hampir Siap',
			'Persiapan Akhir',
			'Loading...',
			'Stay Tuned',
			'Dalam Proses'
		];

		// Gunakan index assignment untuk konsistensi pesan
		const messageIndex = Math.abs(openedAt.getTime()) % messages.length;
		return messages[messageIndex];
	}

	// Function to get mystical phase
	function getMysticalPhase(openedAt?: Date): string {
		if (!openedAt) return 'Ready';

		const phases = [
			'🌑 Dark Phase',
			'🌒 Crescent Phase',
			'🌓 Quarter Phase',
			'🌔 Gibbous Phase',
			'🌕 Full Phase',
			'⭐ Stellar Phase',
			'🔮 Mystic Phase',
			'✨ Cosmic Phase',
			'🎭 Mystery Phase'
		];

		const phaseIndex = Math.abs(openedAt.getTime()) % phases.length;
		return phases[phaseIndex];
	}

	// Function to get progress percentage (fake)
	function getProgressPercentage(openedAt?: Date): number {
		if (!openedAt) return 100;

		const now = new Date();
		const timeDiff = openedAt.getTime() - now.getTime();
		const totalTime = 30 * 24 * 60 * 60 * 1000; // 30 hari dalam ms

		// Buat progress palsu yang meningkat mendekati tanggal buka
		const progress = Math.max(10, Math.min(95, 100 - (timeDiff / totalTime) * 100));
		return Math.round(progress);
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="list-assignment" class="section-padding-x py-12">
	<div class="container max-w-screen-xl">
		<div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
			{#each assignments as assignment, index}
				{@const isAvailable = isAssignmentAvailable(assignment.openedAt)}
				{@const comingSoonMessage = getComingSoonMessage(assignment.openedAt)}
				{@const mysticalPhase = getMysticalPhase(assignment.openedAt)}
				{@const progressPercentage = getProgressPercentage(assignment.openedAt)}

				<div
					class="relative flex flex-col items-center gap-4"
					data-aos="fade-up"
					data-aos-duration="600"
					data-aos-delay={index * 100}
				>
					<!-- Number Badge -->
					<p
						class="bg-yellow-s3-base big-font-size absolute -top-2 -right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full p-4 font-semibold"
						data-aos="zoom-in"
						data-aos-duration="400"
						data-aos-delay={index * 100}
					>
						#{index + 1}
					</p>

					<!-- Coming Soon Badge - Multiple Styles -->
					{#if !isAvailable}
						<div
							class="absolute -top-1 -left-1 z-20"
							data-aos="fade-in"
							data-aos-duration="800"
							data-aos-delay={index * 100}
						>
							<!-- Mystical Badge -->
							<div
								class="animate-pulse rounded-full border border-white/30 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-lg"
							>
								{mysticalPhase}
							</div>
						</div>
					{/if}

					<div
						class="bg-rose-s3-secondary text-light-base relative flex w-full flex-col justify-between overflow-hidden rounded-xl p-3 transition-all duration-300 md:p-4 lg:rounded-4xl lg:p-6 xl:p-8"
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay={index * 100}
					>
						<!-- Coming Soon Overlay dengan efek lebih menarik -->
						{#if !isAvailable}
							<!-- Animated background -->
							<div
								class="absolute inset-0 z-5 bg-gradient-to-br from-purple-900/20 via-pink-800/20 to-indigo-900/20 backdrop-blur-[2px]"
								data-aos="fade-in"
								data-aos-duration="1000"
								data-aos-delay={index * 100}
							></div>

							<!-- Floating particles effect -->
							<div
								class="absolute inset-0 z-6"
								data-aos="fade-in"
								data-aos-duration="1200"
								data-aos-delay={index * 100}
							>
								<div
									class="absolute top-2 left-2 h-1 w-1 animate-ping rounded-full bg-white/40"
								></div>
								<div
									class="animation-delay-1000 absolute top-8 right-4 h-1 w-1 animate-ping rounded-full bg-yellow-300/60"
								></div>
								<div
									class="animation-delay-2000 absolute bottom-4 left-6 h-1 w-1 animate-ping rounded-full bg-blue-300/40"
								></div>
							</div>

							<!-- Main overlay content -->
							<div
								class="absolute inset-0 z-10 flex flex-col items-center justify-center backdrop-blur-2xl"
								data-aos="zoom-in"
								data-aos-duration="800"
								data-aos-delay={index * 100}
							>
								<div
									class="rotate-3 transform rounded-xl border border-white/20 bg-gradient-to-r from-black/80 to-gray-800/80 px-4 py-3 text-center shadow-2xl backdrop-blur-md transition-transform duration-300 hover:rotate-0"
								>
									<div
										class="mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-lg font-bold text-transparent"
									>
										🔒 CLASSIFIED
									</div>
									<div class="text-sm font-medium text-gray-200">
										{comingSoonMessage}
									</div>
									<!-- Progress bar -->
									<div class="mt-2 h-1.5 w-full rounded-full bg-gray-700">
										<div
											class="h-1.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000"
											style="width: {progressPercentage}%"
										></div>
									</div>
									<div class="mt-1 text-xs text-gray-400">
										Preparing... {progressPercentage}%
									</div>
								</div>
							</div>
						{/if}

						<div
							class="relative z-5 mb-2 md:mb-4"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay={index * 100}
						>
							<h2 class="font-junigarden">
								{#if !isAvailable}Hayoo Mau Ngapain{:else}{assignment.name}{/if}
							</h2>
							<p class="extra-small-font-size">
								{#if !isAvailable}Hayoo Mau Ngapain{:else}{assignment.description}{/if}
							</p>
						</div>

						<button
							class="bg-light-base text-dark-base extra-small-font-size relative z-5 self-end rounded-xl px-3 py-2 font-semibold transition-all duration-200 ease-in-out
                            {isAvailable
								? 'cursor-pointer hover:scale-105 hover:bg-gray-100'
								: 'cursor-not-allowed bg-gray-400 opacity-50'}"
							on:click={() => isAvailable && openModal(assignment, index)}
							disabled={!isAvailable}
							data-aos="fade-up"
							data-aos-duration="500"
							data-aos-delay={index * 100}
						>
							{#if isAvailable}
								Detail Penugasan
							{:else}
								🔐 Terkunci
							{/if}
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Modal Detail Penugasan -->
{#if showModal && selectedAssignment}
	<div
		class="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/50 backdrop-blur-sm"
		on:click={closeModal}
		role="dialog"
		aria-modal="true"
	>
		<div
			class="mx-4 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl"
			on:click|stopPropagation
		>
			<!-- Modal Header -->
			<div
				class="from-rose-s3-secondary to-rose-s3-base flex items-center justify-between border-b border-gray-200 bg-gradient-to-r p-6"
			>
				<div class="flex items-center gap-4">
					<div
						class="bg-yellow-s3-base text-dark-base flex aspect-square h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
					>
						#{selectedAssignment.index}
					</div>
					<h2 class="text-light-base text-xl font-bold">{selectedAssignment.name}</h2>
				</div>
				<button
					on:click={closeModal}
					class="text-light-base/80 hover:text-light-base rounded-full p-2 transition-colors hover:bg-white/10"
					aria-label="Close modal"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Modal Body -->
			<div class="max-h-[70vh] overflow-y-auto p-6">
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<!-- Image Section -->
					<div class="space-y-4">
						<div class="relative overflow-hidden rounded-lg shadow-lg">
							<img
								src={selectedAssignment.image}
								alt={selectedAssignment.name}
								class="h-64 w-full object-cover"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						</div>

						<!-- Assignment Link -->
						<a
							href={selectedAssignment.link}
							target="_blank"
							rel="noopener noreferrer"
							class="from-rose-s3-secondary to-rose-s3-base hover:from-rose-s3-base hover:to-rose-s3-secondary text-light-base flex w-full transform items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-3 shadow-lg transition-all duration-300 hover:scale-105"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
							Lihat Detail Lengkap
						</a>
					</div>

					<!-- Content Section -->
					<div class="space-y-4">
						<!-- Short Description -->
						<div class="border-rose-s3-secondary rounded-lg border-l-4 bg-gray-50 p-4">
							<h3 class="mb-2 font-semibold text-gray-900">Deskripsi Singkat</h3>
							<p class="text-sm leading-relaxed text-gray-700">
								{selectedAssignment.description}
							</p>
						</div>

						<!-- Long Description -->
						<div class="space-y-3">
							<h3 class="flex items-center gap-2 font-semibold text-gray-900">
								<svg
									class="text-rose-s3-secondary h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Detail Penugasan
							</h3>
							<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
								<p class="text-sm leading-relaxed whitespace-pre-line text-gray-700">
									{selectedAssignment.longDescription}
								</p>
							</div>
						</div>

						<!-- Assignment Info -->
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div
								class="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-4"
							>
								<div class="mb-2 flex items-center gap-2">
									<svg
										class="h-4 w-4 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
										/>
									</svg>
									<span class="text-sm font-medium text-blue-900">Nomor Tugas</span>
								</div>
								<span class="text-lg font-bold text-blue-800">#{selectedAssignment.index}</span>
							</div>

							<div
								class="rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-4"
							>
								<div class="mb-2 flex items-center gap-2">
									<svg
										class="h-4 w-4 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span class="text-sm font-medium text-green-900">Status</span>
								</div>
								<span class="text-sm font-bold text-green-800">
									{isAssignmentAvailable(selectedAssignment.openedAt)
										? 'Tersedia'
										: 'Dalam Persiapan'}
								</span>
							</div>
						</div>

						<!-- Mystical Phase Info (jika coming soon) -->
						{#if selectedAssignment.openedAt && !isAssignmentAvailable(selectedAssignment.openedAt)}
							<div
								class="rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-100 p-4"
							>
								<div class="mb-2 flex items-center gap-2">
									<svg
										class="h-4 w-4 text-purple-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
									<span class="text-sm font-medium text-purple-900">Phase Status</span>
								</div>
								<span class="text-sm font-bold text-purple-800">
									{getMysticalPhase(selectedAssignment.openedAt)}
								</span>
								<div class="mt-2 text-xs text-purple-600">
									{getComingSoonMessage(selectedAssignment.openedAt)} • {getProgressPercentage(
										selectedAssignment.openedAt
									)}% Complete
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Custom scrollbar for modal */
	.overflow-y-auto::-webkit-scrollbar {
		width: 6px;
	}

	.overflow-y-auto::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 3px;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: #c1c1c1;
		border-radius: 3px;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb:hover {
		background: #a1a1a1;
	}

	/* Animation delays */
	.animation-delay-1000 {
		animation-delay: 1s;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	/* Enhanced animations */
	@keyframes bounce {
		0%,
		20%,
		53%,
		80%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		40%,
		43% {
			transform: translate3d(0, -8px, 0);
		}
		70% {
			transform: translate3d(0, -4px, 0);
		}
		90% {
			transform: translate3d(0, -2px, 0);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.05);
		}
	}

	@keyframes ping {
		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.animate-bounce {
		animation: bounce 2s infinite;
	}

	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	.animate-ping {
		animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}

		.animate-bounce,
		.animate-pulse,
		.animate-ping {
			animation: none;
		}
	}

	/* Mobile responsive adjustments */
	@media (max-width: 768px) {
		[data-aos] {
			transition-duration: 0.6s !important;
		}
	}
</style>
