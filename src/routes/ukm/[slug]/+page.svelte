<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import OrmawaDetail from '../../../components/Ormawa/detail.svelte';
	import OrmawaEvent from '../../../components/Ormawa/event.svelte';
	import OrmawaGallery from '../../../components/Ormawa/gallery.svelte';

	import { page } from '$app/stores';

	export let data;
	let mounted = false;

	// Intersection Observer variables
	let pageContainer: HTMLElement;
	let elementsVisible = {
		detail: false,
		event: false,
		gallery: false
	};

	onMount(() => {
		mounted = true;

		// Intersection Observer for sequential loading
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const target = entry.target;
						if (target.id === 'detail-section') {
							elementsVisible.detail = true;
						} else if (target.id === 'event-section') {
							setTimeout(() => (elementsVisible.event = true), 200);
						} else if (target.id === 'gallery-section') {
							setTimeout(() => (elementsVisible.gallery = true), 400);
						}
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		// Observe sections after mount
		setTimeout(() => {
			const sections = document.querySelectorAll('[data-animate]');
			sections.forEach((section) => observer.observe(section));
		}, 100);

		return () => {
			const sections = document.querySelectorAll('[data-animate]');
			sections.forEach((section) => observer.unobserve(section));
		};
	});

	$: ukm = data.ukm;
</script>

<svelte:head>
	<title>{ukm.name} - S3 2025</title>
	<meta name="description" content={ukm.longDescription || 'Detail UKM'} />
	<meta property="og:title" content={ukm.name} />
	<meta property="og:description" content={ukm.longDescription || 'Detail UKM'} />
</svelte:head>

<div bind:this={pageContainer} class="page-container">
	<!-- Detail Section -->
	<div id="detail-section" data-animate>
		{#if elementsVisible.detail}
			<div in:fade={{ duration: 800, delay: 0 }}>
				<OrmawaDetail
					logo={ukm.image}
					name={ukm.name}
					description={ukm.description}
					longDescription={ukm.longDescription}
					contact={ukm.contact}
				/>
			</div>
		{/if}
	</div>

	<!-- Event Section -->
	<div id="event-section" data-animate>
		{#if elementsVisible.event}
			<div in:fade={{ duration: 800, delay: 0 }}>
				<OrmawaEvent events={ukm.events || []} />
			</div>
		{/if}
	</div>

	<!-- Gallery Section -->
	<div id="gallery-section" data-animate>
		{#if elementsVisible.gallery}
			<div in:fade={{ duration: 800, delay: 0 }}>
				<OrmawaGallery galleries={ukm.gallery} />
			</div>
		{/if}
	</div>
</div>
