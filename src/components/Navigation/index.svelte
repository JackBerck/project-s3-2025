<script lang="ts">
	import navigation from '../../data/navigation';
	import { page } from '$app/stores';

	let isMenuOpen = false;
	let openDropdown: string | null | undefined = null; // Track which dropdown is open

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
		openDropdown = null;
	}

	function toggleDropdown(menuKey: string | undefined) {
		openDropdown = openDropdown === menuKey ? null : menuKey;
	}

	function isActive(href: string) {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(href);
	}

	// Check if any submenu item is active
	function isDropdownActive(submenu: { title: string; href: string }[] | undefined) {
		return submenu?.some((item) => isActive(item.href)) ?? false;
	}

	let scrollY = 0;
	let isScrolled = false;

	$: isScrolled = scrollY > 50;
</script>

<svelte:window bind:scrollY />

<nav
	class="section-padding-x fixed z-50 w-full py-4 shadow-lg transition-all duration-300
        {isScrolled
		? 'bg-rose-s3-base/50 backdrop-blur-md'
		: 'bg-rose-s3-base/50 backdrop-blur-md'}"
>
	<div class="container mx-auto max-w-screen-xl px-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a
				href="/"
				class="group flex items-center text-2xl font-bold transition-all duration-300 hover:scale-105"
			>
				<img
					src="/logo.png"
					alt="Logo"
					class="w-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 md:w-16"
				/>
			</a>

			<!-- Desktop Menu -->
			<div class="hidden items-center gap-2 lg:flex">
				{#each navigation as item}
					{#if item.type === 'link'}
						<a
							href={item.href}
							class="text-light-base group relative overflow-hidden rounded-lg px-4 py-2 font-medium transition-all duration-300
                                {isActive(item.href)
								? 'bg-white/20 text-white shadow-lg'
								: 'hover:bg-white/10 hover:text-white hover:shadow-md'}"
						>
							<!-- Background animation -->
							<span
								class="absolute inset-0 origin-left scale-x-0 transform rounded-lg bg-gradient-to-r from-white/20 to-white/10 transition-transform duration-300 group-hover:scale-x-100"
							></span>

							<!-- Text -->
							<span class="relative z-10">{item.title}</span>
						</a>
					{:else if item.type === 'dropdown'}
						<div class="group relative">
							<button
								class="text-light-base group relative flex items-center gap-1 overflow-hidden rounded-lg px-4 py-2 font-medium transition-all duration-300
                                    {isDropdownActive(item.submenu) || openDropdown === item.key
									? 'bg-white/20 text-white shadow-lg'
									: 'hover:bg-white/10 hover:text-white hover:shadow-md'}"
								on:click={() => toggleDropdown(item.key)}
							>
								<!-- Background animation -->
								<span
									class="absolute inset-0 origin-left scale-x-0 transform rounded-lg bg-gradient-to-r from-white/20 to-white/10 transition-transform duration-300 group-hover:scale-x-100"
								></span>

								<!-- Text -->
								<span class="relative z-10">{item.title}</span>

								<!-- Dropdown Icon -->
								<svg
									class="relative z-10 h-4 w-4 transition-transform duration-300 {openDropdown ===
									item.key
										? 'rotate-180'
										: ''}"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</button>

							<!-- Dropdown Menu -->
							{#if openDropdown === item.key}
								<div
									class="animate-dropdown-open absolute top-full left-0 mt-2 w-48 rounded-lg border border-white/20 bg-white/95 py-2 shadow-lg backdrop-blur-md"
								>
									{#each item.submenu || [] as subItem}
										<a
											href={subItem.href}
											class="hover:bg-rose-s3-base/10 hover:text-rose-s3-base block px-4 py-2 text-sm text-gray-700 transition-colors duration-200
												{isActive(subItem.href) ? 'bg-rose-s3-base/20 text-rose-s3-base font-semibold' : ''}"
											on:click={() => (openDropdown = null)}
										>
											{subItem.title}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="group flex h-10 w-10 flex-col items-center justify-center space-y-1.5 rounded-lg transition-all duration-300 hover:bg-white/10 focus:outline-none lg:hidden"
				on:click={toggleMenu}
				aria-label="Toggle menu"
			>
				<span
					class="bg-dark-base h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out
                        {isMenuOpen ? 'translate-y-2 rotate-45 bg-white' : 'group-hover:w-7'}"
				></span>
				<span
					class="bg-dark-base h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out
                        {isMenuOpen ? 'opacity-0' : 'group-hover:w-5'}"
				></span>
				<span
					class="bg-dark-base h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out
                        {isMenuOpen ? '-translate-y-2 -rotate-45 bg-white' : 'group-hover:w-7'}"
				></span>
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
	<div
		class="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
		on:click={closeMenu}
		on:keydown={(e) => e.key === 'Escape' && closeMenu()}
		role="button"
		tabindex="0"
	></div>
{/if}

<!-- Mobile Menu -->
<div
	class="fixed top-0 right-0 z-70 h-full w-80 max-w-sm transform shadow-2xl transition-all duration-300 ease-in-out lg:hidden
        {isMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
>
	<div
		class="from-dark-base/95 to-dark-base/90 flex h-full flex-col bg-gradient-to-b backdrop-blur-lg"
	>
		<!-- Header -->
		<div class="flex items-center justify-between border-b border-white/10 p-6">
			<h3 class="text-xl font-bold text-white">Menu</h3>
			<button
				on:click={closeMenu}
				class="group rounded-full p-2 transition-all duration-200 hover:rotate-90 hover:bg-white/10"
				aria-label="Close menu"
			>
				<svg
					class="h-6 w-6 text-white transition-transform duration-200"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
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
		<div class="flex-1 overflow-y-auto py-4">
			<div class="space-y-1">
				{#each navigation as item, index}
					{#if item.type === 'link'}
						<a
							href={item.href}
							class="animate-slide-in group relative block overflow-hidden px-6 py-4 text-lg font-medium transition-all duration-300
                                {isActive(item.href)
								? 'border-l-4 border-white bg-white/20 text-white'
								: 'border-l-4 border-transparent text-gray-300 hover:border-white/50 hover:bg-white/10 hover:text-white'}"
							style="animation-delay: {index * 100}ms"
							on:click={closeMenu}
						>
							<!-- Hover background effect -->
							<span
								class="absolute inset-0 translate-x-full transform bg-gradient-to-r from-white/10 to-transparent transition-transform duration-300 group-hover:translate-x-0"
							></span>

							<!-- Text -->
							<span class="relative z-10 flex items-center gap-3">
								<span
									class="h-2 w-2 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-100
                                    {isActive(item.href) ? 'opacity-100' : ''}"
								></span>
								{item.title}
							</span>
						</a>
					{:else if item.type === 'dropdown'}
						<div class="animate-slide-in" style="animation-delay: {index * 100}ms">
							<button
								class="group relative block w-full overflow-hidden px-6 py-4 text-left text-lg font-medium transition-all duration-300
                                    {isDropdownActive(item.submenu) || openDropdown === item.key
									? 'border-l-4 border-white bg-white/20 text-white'
									: 'border-l-4 border-transparent text-gray-300 hover:border-white/50 hover:bg-white/10 hover:text-white'}"
								on:click={() => toggleDropdown(item.key)}
							>
								<!-- Hover background effect -->
								<span
									class="absolute inset-0 translate-x-full transform bg-gradient-to-r from-white/10 to-transparent transition-transform duration-300 group-hover:translate-x-0"
								></span>

								<!-- Text with dropdown icon -->
								<span class="relative z-10 flex items-center justify-between">
									<span class="flex items-center gap-3">
										<span
											class="h-2 w-2 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-100
                                            {isDropdownActive(item.submenu) ? 'opacity-100' : ''}"
										></span>
										{item.title}
									</span>
									<svg
										class="h-4 w-4 transition-transform duration-300 {openDropdown === item.key
											? 'rotate-180'
											: ''}"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										></path>
									</svg>
								</span>
							</button>

							<!-- Mobile Submenu -->
							{#if openDropdown === item.key}
								<div class="ml-6 border-l-4 border-white/20 bg-white/5">
									{#each item.submenu || [] as subItem, subIndex}
										<a
											href={subItem.href}
											class="animate-slide-in block px-6 py-3 text-base font-medium transition-all duration-300
												{isActive(subItem.href)
												? 'bg-white/10 text-white'
												: 'text-gray-400 hover:bg-white/5 hover:text-white'}"
											style="animation-delay: {index * 100 + subIndex * 50}ms"
											on:click={closeMenu}
										>
											<span class="flex items-center gap-3">
												<span class="h-1 w-1 rounded-full bg-current opacity-60"></span>
												{subItem.title}
											</span>
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateX(20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes dropdown-open {
		from {
			opacity: 0;
			transform: translateY(-10px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.animate-slide-in {
		animation: slide-in 0.3s ease-out forwards;
		opacity: 0;
	}

	.animate-dropdown-open {
		animation: dropdown-open 0.2s ease-out forwards;
	}

	/* Click outside to close dropdown */
	:global(.dropdown-backdrop) {
		position: fixed;
		inset: 0;
		z-index: 40;
	}
</style>
