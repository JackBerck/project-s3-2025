<script lang="ts">
	import ExploreUnsoedHero from '../../components/ExploreUnsoed/hero.svelte';
	import ExploreUnsoedVisiMisi from '../../components/ExploreUnsoed/visi-misi.svelte';
	import RunningText from '../../components/running-text.svelte';
	import ExploreUnsoedFakultas from '../../components/ExploreUnsoed/fakultas.svelte';
</script>

<svelte:head>
	<title>Explore Unsoed | Soedirman Student Summit (S3)</title>
</svelte:head>

<ExploreUnsoedHero />
<ExploreUnsoedVisiMisi />
<RunningText />
<div class="bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] bg-repeat">
	<ExploreUnsoedFakultas />
</div>
