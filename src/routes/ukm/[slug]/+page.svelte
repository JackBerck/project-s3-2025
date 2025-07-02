<script>
	import OrmawaDetail from '../../../components/Ormawa/detail.svelte';
	import OrmawaEvent from '../../../components/Ormawa/event.svelte';
	import OrmawaGallery from '../../../components/Ormawa/gallery.svelte';

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
	<title>{ukm.name} - S3 2025</title>
	<meta name="description" content={ukm.longDescription || 'Detail UKM'} />
	<meta property="og:title" content={ukm.name} />
	<meta property="og:description" content={ukm.longDescription || 'Detail UKM'} />
</svelte:head>

<OrmawaDetail logo={ukm.image} name={ukm.name} description={ukm.longDescription} contact={ukm.contact} />
<OrmawaEvent events={ukm.events || []} />
<OrmawaGallery galleries={ukm.gallery} />