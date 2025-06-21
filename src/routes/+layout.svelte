<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation/index.svelte';
	import Footer from '../components/Footer/index.svelte';

	let { children } = $props();
</script>

<Navigation />
{@render children()}
<Footer />
