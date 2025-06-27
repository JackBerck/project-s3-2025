<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation/index.svelte';
	import Footer from '../components/footer/index.svelte';
	import PlayButton from '../components/play-button.svelte';

	let { children } = $props();
</script>

<Navigation />
{@render children()}
<Footer />
<PlayButton />
