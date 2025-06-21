<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation/index.svelte';
	import Footer from '../components/footer/index.svelte';

	let { children } = $props();
</script>

<Navigation />
{@render children()}
<Footer />
