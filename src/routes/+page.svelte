<script>
	import HomeHero from '../components/Home/hero.svelte';
	import HomeMascots from '../components/Home/mascots.svelte';
	import HomeEvents from '../components/Home/events.svelte';
	import HomeLogo from '../components/Home/logo.svelte';
	import HomeSponsorship from '../components/Home/sponsorship.svelte';
	import RunningText from '../components/running-text.svelte';
</script>

<svelte:head>
	<title>Selamat Datang | Soedirman Student Summit (S3)</title>
</svelte:head>

<HomeHero />
<div class="bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] bg-repeat">
	<HomeMascots />
	<HomeEvents />
</div>
<HomeLogo />
<RunningText />
<HomeSponsorship />
