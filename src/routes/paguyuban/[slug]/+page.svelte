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

	$: paguyuban = data.paguyuban;
</script>

<svelte:head>
	<title>{paguyuban.name} | Soedirman Student Summit (S3) 2025</title>
	<meta name="description" content={paguyuban.longDescription || 'Detail Paguyuban'} />
	<meta property="og:title" content={paguyuban.name} />
	<meta property="og:description" content={paguyuban.longDescription || 'Detail Paguyuban'} />
</svelte:head>

<OrmawaDetail
	logo={paguyuban.image}
	name={paguyuban.name}
	description={paguyuban.description}
	contact={paguyuban.contact}
	longDescription={paguyuban.longDescription}
/>
<OrmawaEvent events={paguyuban.events || []} />
<OrmawaGallery galleries={paguyuban.gallery} />
