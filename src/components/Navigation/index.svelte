<script lang="ts">
	import NavigationLink from './navigation-link.svelte';
	import navigation from '../../data/navigation';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav
	class="section-padding-x from-white-base to-purple-base text-light-base relative z-50 bg-gradient-to-r py-4"
>
	<div class="container max-w-screen-xl">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center text-2xl font-bold transition-transform hover:scale-105">
				<img src="/s3.png" alt="Logo" class="mr-2 w-16 transition-transform hover:rotate-3" />
			</a>

			<!-- Desktop Menu -->
			<ul class="hidden items-center gap-8 md:flex">
				{#each navigation as item}
					<li>
						<a href={item.href} class="">
							{item.title}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Mobile Menu Button -->
			<button
				class="group flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
				on:click={toggleMenu}
				aria-label="Toggle menu"
			>
				<span
					class="h-0.5 w-6 bg-white transition-all duration-300 ease-in-out {isMenuOpen
						? 'translate-y-2 rotate-45'
						: ''}"
				></span>
				<span
					class="h-0.5 w-6 bg-white transition-all duration-300 ease-in-out {isMenuOpen
						? 'opacity-0'
						: ''}"
				></span>
				<span
					class="h-0.5 w-6 bg-white transition-all duration-300 ease-in-out {isMenuOpen
						? '-translate-y-2 -rotate-45'
						: ''}"
				></span>
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
	<div
		class="bg-opacity-50 fixed inset-0 z-40 bg-black md:hidden"
		on:click={closeMenu}
		on:keydown={(e) => e.key === 'Escape' && closeMenu()}
		role="button"
		tabindex="0"
	></div>
{/if}

<!-- Mobile Menu -->
<div
	class="from-white-base to-purple-base fixed top-0 right-0 z-50 h-full w-80 max-w-sm transform bg-gradient-to-b shadow-2xl transition-transform duration-300 ease-in-out md:hidden {isMenuOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex h-full flex-col">
		<!-- Menu Header -->
		<div class="flex items-center justify-between border-b border-purple-200 p-6">
			<img src="/s3.png" alt="Logo" class="h-12 w-12" />
			<button
				on:click={closeMenu}
				class="rounded-full p-2 transition-colors duration-200 hover:bg-purple-100"
				aria-label="Close menu"
			>
				<svg class="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</button>
		</div>

		<!-- Menu Items -->
		<div class="flex-1 overflow-y-auto">
			<ul class="space-y-2 py-4">
                {#each navigation as item}
                    <li>
                        <a
                            href={item.href}
                            class="block border-l-4 border-transparent px-6 py-4 text-lg font-medium text-purple-800 transition-all duration-300 hover:border-purple-500 hover:bg-purple-100 hover:text-purple-900"
                            on:click={closeMenu}
                        >
                            {item.title}
                        </a>
                    </li>
                {/each}
			</ul>
		</div>

		<!-- Menu Footer -->
		<div class="border-t border-purple-200 p-6">
			<p class="text-center text-sm text-purple-600">Soedirman Student Summit 2025</p>
		</div>
	</div>
</div>
