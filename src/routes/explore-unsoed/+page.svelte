<script lang="ts">
	import ExploreUnsoedHero from '../../components/ExploreUnsoed/hero.svelte';
	import ExploreUnsoedVisiMisi from '../../components/ExploreUnsoed/visi-misi.svelte';
	import RunningText from '../../components/running-text.svelte';
	import ExploreUnsoedFakultas from '../../components/ExploreUnsoed/fakultas.svelte';
	import ExploreUnsoedHymneMars from '../../components/ExploreUnsoed/hymne-mars.svelte';
	import ExploreUnsoedProfile from '../../components/ExploreUnsoed/profile.svelte';
</script>

<svelte:head>
	<title>Explore Unsoed | Soedirman Student Summit (S3)</title>
</svelte:head>

<ExploreUnsoedHero />
<ExploreUnsoedVisiMisi />
<RunningText />
<div class="relative bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] bg-repeat">
	<div class="absolute left-0 z-10 top-192 md:top-164 lg:top-160">
		<img src="/img/elements/awan-simfoni.png" alt="Mountain and tree decoration" class="w-full" />
	</div>
	<ExploreUnsoedFakultas />
	<ExploreUnsoedHymneMars />
	<div class="absolute left-0 z-10 md:-bottom-48 xl:-bottom-96">
		<img src="/img/elements/awan-simfoni.png" alt="Mountain and tree decoration" class="w-full scale-y-[-1]" />
	</div>
</div>
<div
	class="to-rose-s3-secondary h-24 w-full bg-gradient-to-t from-[#F9F7EB] from-5% to-95%"
></div>
<ExploreUnsoedProfile
	id="profile-unsoed"
	title="Profil Universitas Jenderal Soedirman"
	link="https://www.youtube.com/embed/y1kQIqjh7hs?si=aGvP9UjBcPjOniW1"
/>
