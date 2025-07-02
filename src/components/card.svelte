<!-- Card.svelte -->
<script>
	export let href = '#';
	export let title = '';
	export let img = '';
	export let description = '';
	export let category = '';
</script>

<a
	{href}
	class="group hover:border-rose-s3-base/20 block transform overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
>
	<!-- Image Container -->
	<div class="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
		{#if img}
			<img
				src={img}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				loading="lazy"
			/>
		{:else}
			<div
				class="from-blue-s3-base/20 to-rose-s3-base/20 flex h-full w-full items-center justify-center bg-gradient-to-br"
			>
				<svg class="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					></path>
				</svg>
			</div>
		{/if}

		<!-- Category Badge -->
		{#if category}
			<div class="absolute top-3 right-3">
				<span
					class="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm"
				>
					{category}
				</span>
			</div>
		{/if}

		<!-- Overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</div>

	<!-- Content -->
	<div class="p-6">
		<h3
			class="font-berkshire-swash group-hover:text-rose-s3-base mb-2 line-clamp-2 text-lg font-semibold text-gray-800 transition-colors duration-300 md:text-xl"
		>
			{title}
		</h3>

		{#if description}
			<p class="line-clamp-2 extra-small-font-size leading-relaxed text-gray-600">
				{description}
			</p>
		{/if}

		<!-- Read More Indicator -->
		<div
			class="text-blue-s3-base group-hover:text-rose-s3-base mt-4 flex items-center transition-colors duration-300"
		>
			<span class="small-font-size font-medium">Lihat Detail</span>
			<svg
				class="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
				></path>
			</svg>
		</div>
	</div>
</a>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
