<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import OrmawaDetail from '../../../components/Ormawa/detail.svelte';
	import OrmawaEvent from '../../../components/Ormawa/event.svelte';
	import OrmawaGallery from '../../../components/Ormawa/gallery.svelte';

	import { page } from '$app/stores';

	export let data;
	let mounted = false;

	onMount(() => {
		mounted = true;

		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		AOS.refresh();
	});

	$: ukm = data.ukm;
</script>

<svelte:head>
	<title>{ukm.name} - S3 2025</title>
	<meta name="description" content={ukm.longDescription || 'Detail UKM'} />
	<meta property="og:title" content={ukm.name} />
	<meta property="og:description" content={ukm.longDescription || 'Detail UKM'} />
</svelte:head>

<div class="page-container">
	<!-- Detail Section -->
	<div id="detail-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
		<OrmawaDetail
			logo={ukm.image}
			name={ukm.name}
			description={ukm.longDescription}
			contact={ukm.contact}
		/>
	</div>

	<!-- Event Section -->
	<div id="event-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
		<OrmawaEvent events={ukm.events || []} />
	</div>

	<!-- Gallery Section -->
	<div id="gallery-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
		<OrmawaGallery galleries={ukm.gallery} />
	</div>
</div>

<style>
	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}
	}
</style>
