<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import ExploreUnsoedHero from '../../components/ExploreUnsoed/hero.svelte';
	import ExploreUnsoedVisiMisi from '../../components/ExploreUnsoed/visi-misi.svelte';
	import RunningText from '../../components/running-text.svelte';
	import ExploreUnsoedFakultas from '../../components/ExploreUnsoed/fakultas.svelte';
	import ExploreUnsoedHymneMars from '../../components/ExploreUnsoed/hymne-mars.svelte';
	import ExploreUnsoedProfile from '../../components/ExploreUnsoed/profile.svelte';

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
	<title>Explore Unsoed | Soedirman Student Summit (S3) 2025</title>
</svelte:head>

<ExploreUnsoedHero />
<ExploreUnsoedVisiMisi />
<RunningText />

<div class="relative bg-[#F9F7EB] bg-[url('/img/patterns/batik-1.png')] bg-repeat">
	<div
		class="absolute top-192 left-0 z-10 md:top-164 lg:top-160"
		data-aos="fade-right"
		data-aos-duration="1000"
		data-aos-delay="200"
	>
		<img src="/img/elements/awan-simfoni.png" alt="Mountain and tree decoration" class="w-full" />
	</div>

	<ExploreUnsoedFakultas />
	<ExploreUnsoedHymneMars />

	<div
		class="absolute left-0 z-10 md:-bottom-48 xl:-bottom-96"
		data-aos="fade-right"
		data-aos-duration="1000"
		data-aos-delay="400"
	>
		<img
			src="/img/elements/awan-simfoni.png"
			alt="Mountain and tree decoration"
			class="w-full scale-y-[-1]"
		/>
	</div>
</div>

<div
	class="to-rose-s3-secondary h-24 w-full bg-gradient-to-t from-[#F9F7EB] from-5% to-95%"
	data-aos="fade-in"
	data-aos-duration="600"
	data-aos-delay="600"
></div>

<ExploreUnsoedProfile
	id="profile-unsoed"
	title="Profil Universitas Jenderal Soedirman"
	link="https://www.youtube.com/embed/3Wuof0OvQOg?si=hq-TpVF4xZ-WYpXV"
/>

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
