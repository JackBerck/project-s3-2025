<script>
	import OrmawaDetail from '../../../components/Ormawa/detail.svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	$: ukm = data.ukm;
</script>

<OrmawaDetail logo={ukm.image} name={ukm.name} description={ukm.longDescription} />
