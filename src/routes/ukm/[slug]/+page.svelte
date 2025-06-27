<!-- src/routes/ukm/[slug]/+page.svelte -->
<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	$: ukm = data.ukm;
</script>

<svelte:head>
	<title>{ukm.name} | UKM Unsoed</title>
	<meta name="description" content={ukm.description} />
</svelte:head>

<!-- Hero Section -->
<section
	class="from-dark-base via-dark-base text-light-base section-padding-x relative overflow-hidden bg-gradient-to-br to-gray-900 pt-36 pb-16"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0 bg-[url('/img/patterns/batik-1.png')] bg-repeat opacity-20"></div>
	</div>

	<div class="relative z-10 container mx-auto max-w-screen-xl">
		<div class="flex flex-col items-center gap-12 lg:flex-row">
			<!-- Content -->
			<div class="flex-1 {mounted ? 'animate-slide-in-left' : 'translate-x-[-50px] opacity-0'}">
				<!-- Breadcrumb -->
				<nav class="mb-6 text-sm">
					<ol class="flex items-center space-x-2 text-gray-300">
						<li><a href="/" class="transition-colors hover:text-white">Beranda</a></li>
						<li class="text-gray-500">/</li>
						<li><a href="/ukm" class="transition-colors hover:text-white">UKM</a></li>
						<li class="text-gray-500">/</li>
						<li class="text-blue-s3-base font-medium">{ukm.name}</li>
					</ol>
				</nav>

				<h1 class="font-berkshire-swash mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
					<span class="text-blue-s3-base">{ukm.name}</span>
				</h1>

				<p class="font-aladin mb-8 text-lg leading-relaxed text-gray-300">
					{ukm.longDescription || ukm.description}
				</p>

				{#if ukm.contact}
					<div class="flex items-center gap-4">
						<a
							href={ukm.contact.link}
							target="_blank"
							class="bg-blue-s3-base hover:bg-blue-s3-secondary flex items-center gap-2 rounded-lg px-6 py-3 text-white transition-colors duration-300"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
							Hubungi Kami
						</a>
					</div>
				{/if}
			</div>

			<!-- Image -->
			<div class="flex-1 {mounted ? 'animate-slide-in-right' : 'translate-x-[50px] opacity-0'}">
				<div class="relative">
					<img
                    src="/img/placeholder.png"
						alt={ukm.name}
						class="h-96 w-full rounded-2xl object-cover shadow-2xl"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Events Section -->
{#if ukm.events && ukm.events.length > 0}
	<section class="section-padding-x bg-gray-50 py-16">
		<div class="container mx-auto max-w-screen-xl">
			<div class="mb-12 text-center">
				<h2
					class="font-berkshire-swash text-rose-s3-base mb-4 text-2xl font-bold md:text-3xl lg:text-4xl"
				>
					Kegiatan & Event
				</h2>
				<div class="bg-rose-s3-base mx-auto h-1 w-24 rounded-full"></div>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each ukm.events as event, index}
					<div
						class="rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
						style="animation-delay: {index * 200}ms"
					>
						<h3 class="font-berkshire-swash mb-3 text-xl font-semibold text-gray-800">
							{event.title}
						</h3>
						<p class="font-aladin leading-relaxed text-gray-600">
							{event.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Gallery Section -->
{#if ukm.gallery && ukm.gallery.length > 0}
	<section class="section-padding-x bg-white py-16">
		<div class="container mx-auto max-w-screen-xl">
			<div class="mb-12 text-center">
				<h2
					class="font-berkshire-swash text-rose-s3-base mb-4 text-2xl font-bold md:text-3xl lg:text-4xl"
				>
					Galeri
				</h2>
				<div class="bg-rose-s3-base mx-auto h-1 w-24 rounded-full"></div>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each ukm.gallery as item, index}
					<div
						class="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
						style="animation-delay: {index * 150}ms"
					>
						<img
							src="/img/placeholder.png"
							alt={item.title}
							class="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
							loading="lazy"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div
							class="absolute right-0 bottom-0 left-0 translate-y-full transform p-4 text-white transition-transform duration-300 group-hover:translate-y-0"
						>
							<h4 class="text-lg font-semibold">{item.title}</h4>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Back to UKM List -->
<section class="section-padding-x bg-gray-50 py-12">
	<div class="container mx-auto max-w-screen-xl text-center">
		<a
			href="/ukm"
			class="bg-rose-s3-base hover:bg-rose-s3-secondary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white transition-colors duration-300"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				></path>
			</svg>
			Kembali ke Daftar UKM
		</a>
	</div>
</section>

<style>
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

	.animate-slide-in-left {
		animation: slide-in-left 0.8s ease-out forwards;
	}

	.animate-slide-in-right {
		animation: slide-in-right 0.8s ease-out 0.2s forwards;
	}
</style>
