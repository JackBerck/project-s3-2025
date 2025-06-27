<script>
	export let id;
	export let title;
	export let link;
</script>

<section {id} class="section-padding-x overflow-hidden bg-[#F9F7EB] pt-12 md:pt-28 xl:pt-72 pb-12">
	<div class="container max-w-screen-xl">
		<div
			class="flex flex-col items-center justify-center gap-4 md:flex-row-reverse md:gap-8 lg:gap-16 text-center md:text-left"
		>
			<h2 class="text-rose-s3-base font-berkshire-swash text-4xl font-semibold lg:text-5xl">
				{title}
			</h2>
			<iframe
				class="aspect-video w-full rounded-md md:max-w-md xl:max-w-xl"
				src={link}
				{title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
				frameborder="0"
			>
			</iframe>
		</div>
	</div>
</section>
