<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export let logo = '';
	export let name = '';
	export let description = '';
	export let longDescription = '';
	export let contact: {
		name: string;
		link: string;
	};

	let showModal = false;

	onMount(() => {
		// Initialize AOS for this component
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 50,
			delay: 0
		});
	});

	// Function to close modal
	function closeModal() {
		showModal = false;
	}

	// Close modal on escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section
	id="detail-ormawa"
	class="section-padding-x text-light-base bg-rose-s3-secondary relative overflow-hidden bg-[url('/img/patterns/batik-1.png')] bg-repeat pt-36 pb-30"
>
	<div
		class="to-dark-base/30 absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent from-50%"
	></div>

	<div
		class="absolute -right-16 bottom-0 md:-right-24"
		data-aos="fade-left"
		data-aos-duration="1000"
		data-aos-delay="100"
	>
		<img src="/img/elements/rusa-dan-pohon.png" alt="Batik Kuning" class="w-60 md:w-80 lg:w-108" />
	</div>

	<div class="relative z-10 container max-w-screen-xl">
		<div class="flex flex-col items-center justify-center gap-8 md:flex-row">
			<img
				src={logo}
				alt={`${name} Logo`}
				class="logo-image w-full rounded-md object-cover md:max-w-xs lg:max-w-md xl:max-w-xl"
				data-aos="zoom-in"
				data-aos-duration="800"
				data-aos-delay="300"
			/>

			<div class="flex flex-col items-start">
				<h1
					class="font-junigarden text-yellow-s3-base text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
					data-aos="fade-right"
					data-aos-duration="800"
					data-aos-delay="600"
				>
					{name}
				</h1>

				<p
					class="mt-2 text-justify"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="900"
				>
					{description}
				</p>

				<div
					class="mt-4 flex flex-wrap gap-2"
					data-aos="fade-up"
					data-aos-duration="600"
					data-aos-delay="1200"
				>
					<a
						href={contact.link}
						target="_blank"
						rel="noopener noreferrer"
						class="bg-yellow-s3-base text-rose-s3-secondary hover:bg-yellow-s3-base/90 contact-button inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
						{contact.name}
					</a>
					<button
						on:click={() => (showModal = true)}
						class="bg-rose-s3-secondary text-yellow-s3-base hover:bg-rose-s3-secondary/90 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
							/>
						</svg>
						Lihat Penjelasan
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Modal for long description -->
{#if showModal}
	<div
		class="fixed inset-0 z-999 flex items-center justify-center bg-white/10 backdrop-blur-sm"
		on:click={closeModal}
		role="dialog"
		aria-modal="true"
	>
		<div
			class="mx-4 max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl"
			on:click|stopPropagation
		>
			<div class="flex items-center justify-between border-b border-gray-200 p-6">
				<h2 class="text-xl font-bold text-gray-900">Tentang {name}</h2>
				<button
					on:click={closeModal}
					class="text-gray-400 transition-colors hover:text-gray-600"
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
			<div class="max-h-[60vh] overflow-y-auto p-6">
				<p class="leading-relaxed whitespace-pre-line text-gray-700">
					{longDescription}
				</p>
			</div>
			<div class="flex justify-end border-t border-gray-200 p-6">
				<button
					on:click={closeModal}
					class="bg-rose-s3-secondary hover:bg-rose-s3-secondary/90 rounded-lg px-4 py-2 text-white transition-colors"
				>
					Tutup
				</button>
			</div>
		</div>
	</div>
{/if}
