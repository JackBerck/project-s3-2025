<script lang="ts">
	import { slide } from 'svelte/transition';
	import navigation from '../../data/navigation';
	import { page } from '$app/stores';

	let isMenuOpen = false;
	let openDropdown: string | null = null;
	let hoverTimeout: number | null = null;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
		openDropdown = null;
	}

	// Desktop hover functions
	function handleMouseEnter(menuKey: string) {
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			hoverTimeout = null;
		}
		openDropdown = menuKey;
	}

	function handleMouseLeave() {
		hoverTimeout = setTimeout(() => {
			openDropdown = null;
		}, 150);
	}

	// Mobile click function
	function toggleDropdownMobile(menuKey: string) {
		openDropdown = openDropdown === menuKey ? null : menuKey;
	}

	function isActive(href: string) {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(href);
	}

	function isDropdownActive(submenu: { title: string; href: string }[] | undefined) {
		return submenu?.some((item) => isActive(item.href)) ?? false;
	}

	let scrollY = 0;
	let isScrolled = false;

	$: isScrolled = scrollY > 50;

	// Perbaiki handleOutsideClick - jangan close jika click di dalam mobile menu
	function handleOutsideClick(event: MouseEvent) {
		const target = event.target as HTMLElement;

		// Jangan close jika click di dalam mobile menu atau dropdown
		if (
			target.closest('.dropdown-container') ||
			target.closest('.dropdown-mobile-container') ||
			target.closest('[data-mobile-menu]')
		) {
			return;
		}

		// Hanya close dropdown untuk desktop, biarkan mobile menu tetap buka
		if (!isMenuOpen) {
			openDropdown = null;
		}
	}
</script>

<svelte:window bind:scrollY on:click={handleOutsideClick} />

<!-- Bagian nav dan desktop menu tetap sama seperti sebelumnya -->
<nav
	class="section-padding-x fixed z-97 w-full py-4 shadow-lg transition-all duration-300
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
						{#if item.title === 'Contact Us'}
							<a
								href={item.href}
								class="text-light-base group relative overflow-hidden rounded-lg border border-[#FFD464]/20 bg-[#FFD464]/80 px-4 py-2 font-medium shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-[#FFD464]/90 hover:shadow-xl
                                {isActive(item.href || '')
									? ''
									: 'hover:bg-[#FFD464]/70 hover:text-white hover:shadow-md'}"
							>
								<span
									class="absolute inset-0 origin-left scale-x-0 transform rounded-lg bg-gradient-to-r from-white/20 to-white/10 transition-transform duration-300 group-hover:scale-x-100"
								></span>
								<span class="relative z-10">{item.title}</span>
							</a>
						{:else}
							<a
								href={item.href}
								class="text-light-base group relative overflow-hidden rounded-lg px-4 py-2 font-medium transition-all duration-300
							{isActive(item.href || '')
									? 'bg-white/20 text-white shadow-lg'
									: 'hover:bg-white/10 hover:text-white hover:shadow-md'}"
							>
								<span
									class="absolute inset-0 origin-left scale-x-0 transform rounded-lg bg-gradient-to-r from-white/20 to-white/10 transition-transform duration-300 group-hover:scale-x-100"
								></span>
								<span class="relative z-10">{item.title}</span>
							</a>
						{/if}
					{:else if item.type === 'dropdown'}
						<div
							class="dropdown-container group relative"
							on:mouseenter={() => handleMouseEnter(item.key || '')}
							on:mouseleave={handleMouseLeave}
							role="button"
							tabindex="0"
						>
							<button
								class="text-light-base group relative flex items-center gap-1 overflow-hidden rounded-lg px-4 py-2 font-medium transition-all duration-300
                                    {isDropdownActive(item.submenu) || openDropdown === item.key
									? 'bg-white/20 text-white shadow-lg'
									: 'hover:bg-white/10 hover:text-white hover:shadow-md'}"
								on:click={() => handleMouseEnter(item.key || '')}
							>
								<span
									class="absolute inset-0 origin-left scale-x-0 transform rounded-lg bg-gradient-to-r from-white/20 to-white/10 transition-transform duration-300 group-hover:scale-x-100"
								></span>
								<span class="relative z-10">{item.title}</span>
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
							{#if openDropdown === item.key && item.submenu && item.submenu.length > 0}
								<div
									class="absolute top-full left-0 z-50 mt-2 w-48 rounded-lg border border-white/20 bg-white/95 py-2 shadow-xl backdrop-blur-md"
									on:mouseenter={() => {
										if (hoverTimeout) {
											clearTimeout(hoverTimeout);
											hoverTimeout = null;
										}
									}}
									on:mouseleave={handleMouseLeave}
								>
									{#each item.submenu as subItem}
										<a
											href={subItem.href}
											class="hover:bg-rose-s3-base/10 hover:text-rose-s3-base block px-4 py-2 text-sm text-gray-700 transition-colors duration-200
                                                {isActive(subItem.href)
												? 'bg-rose-s3-base/20 text-rose-s3-base font-semibold'
												: ''}"
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
					class="bg-light-base h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out
                        {isMenuOpen ? 'translate-y-2 rotate-45 bg-white' : 'group-hover:w-7'}"
				></span>
				<span
					class="bg-light-base h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out
                        {isMenuOpen ? 'opacity-0' : 'group-hover:w-5'}"
				></span>
				<span
					class="bg-light-base h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out
                        {isMenuOpen ? '-translate-y-2 -rotate-45 bg-white' : 'group-hover:w-7'}"
				></span>
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
	<div
		class="fixed inset-0 z-98 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
		on:click={closeMenu}
		on:keydown={(e) => e.key === 'Escape' && closeMenu()}
		role="button"
		tabindex="0"
	></div>
{/if}

<!-- Mobile Menu -->
<div
	class="fixed top-0 right-0 z-[100] h-full w-80 max-w-sm transform shadow-2xl transition-all duration-300 ease-in-out lg:hidden
        {isMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
	data-mobile-menu
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
						{#if item.title === 'Contact Us'}
							<a
								href={item.href}
								class="animate-slide-in group relative block overflow-hidden rounded-lg border border-[#FFD464]/20 bg-[#FFD464]/80 px-6 py-4 text-lg font-medium shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-[#FFD464]/90 hover:shadow-xl
								{isActive(item.href || '')
									? 'bg-[#FFD464]/90 text-white shadow-lg'
									: 'hover:bg-[#FFD464]/70 hover:text-white hover:shadow-md'}"
								style="animation-delay: {index * 100}ms"
								on:click={closeMenu}
							>
								<span
									class="absolute inset-0 translate-x-full transform bg-gradient-to-r from-white/10 to-transparent transition-transform duration-300 group-hover:translate-x-0"
								></span>
								<span class="relative z-10 flex items-center gap-3">
									<span
										class="h-2 w-2 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-100
										{isActive(item.href || '') ? 'opacity-100' : ''}"
									></span>
									{item.title}
								</span>
							</a>
						{:else}
							<a
								href={item.href}
								class="animate-slide-in group relative block overflow-hidden px-6 py-4 text-lg font-medium transition-all duration-300
								{isActive(item.href || '')
									? 'border-l-4 border-white bg-white/20 text-white'
									: 'border-l-4 border-transparent text-gray-300 hover:border-white/50 hover:bg-white/10 hover:text-white'}"
								style="animation-delay: {index * 100}ms"
								on:click={closeMenu}
							>
								<span
									class="absolute inset-0 translate-x-full transform bg-gradient-to-r from-white/10 to-transparent transition-transform duration-300 group-hover:translate-x-0"
								></span>
								<span class="relative z-10 flex items-center gap-3">
									<span
										class="h-2 w-2 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-100
									{isActive(item.href || '') ? 'opacity-100' : ''}"
									></span>
									{item.title}
								</span>
							</a>
						{/if}
					{:else if item.type === 'dropdown'}
						<div
							class="animate-slide-in dropdown-mobile-container"
							style="animation-delay: {index * 100}ms"
						>
							<button
								class="group relative block w-full overflow-hidden px-6 py-4 text-left text-lg font-medium transition-all duration-300
                                    {isDropdownActive(item.submenu) || openDropdown === item.key
									? 'border-l-4 border-white bg-white/20 text-white'
									: 'border-l-4 border-transparent text-gray-300 hover:border-white/50 hover:bg-white/10 hover:text-white'}"
								on:click|stopPropagation={() => toggleDropdownMobile(item.key || '')}
							>
								<span
									class="absolute inset-0 translate-x-full transform bg-gradient-to-r from-white/10 to-transparent transition-transform duration-300 group-hover:translate-x-0"
								></span>
								<span class="relative z-10 flex items-center justify-between">
									<span class="flex items-center gap-3">
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

							<!-- Comment debug info setelah berhasil -->
							<!-- <div class="px-6 py-2 text-xs text-yellow-300">
                                Key: {item.key} | Open: {openDropdown} | Match: {openDropdown === item.key}
                            </div> -->

							<!-- Mobile Submenu dengan slide transition -->
							{#if openDropdown === item.key && item.submenu && item.submenu.length > 0}
								<div
									class="mobile-submenu ml-6 overflow-hidden border-l-4 border-white/20 bg-white/5"
									transition:slide={{ duration: 300 }}
								>
									{#each item.submenu as subItem, subIndex}
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

	.dropdown-container {
		position: relative;
		z-index: 50;
	}

	.dropdown-container > div {
		z-index: 51;
	}

	.dropdown-mobile-container {
		position: relative;
		z-index: 10;
	}

	.mobile-submenu {
		transform-origin: top;
	}
</style>
