<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import HomeHero from '../components/Home/hero.svelte';
	import HomeMascots from '../components/Home/mascots.svelte';
	import HomeEvents from '../components/Home/events.svelte';
	import HomeLogo from '../components/Home/logo.svelte';
	import HomeSponsorship from '../components/Home/sponsorship.svelte';
	import RunningText from '../components/running-text.svelte';
	import HomeVideos from '../components/Home/videos.svelte';
	import HomeSomethingInteresting from '../components/Home/something-interesting.svelte';

	onMount(() => {
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
</script>

<svelte:head>
	<title>Selamat Datang | Soedirman Student Summit (S3) 2025</title>
</svelte:head>

<HomeHero />
<div class="bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] bg-repeat">
	<HomeMascots />
	<HomeEvents />
</div>
<HomeLogo />
<HomeSomethingInteresting />
<RunningText />
<div class="bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] bg-repeat">
	<HomeVideos />
</div>

<RunningText />
<HomeSponsorship />

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
