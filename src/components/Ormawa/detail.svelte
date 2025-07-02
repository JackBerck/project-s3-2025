<script>
	export let logo = '';
	export let name = '';
	export let description = '';
</script>

<section
	id="detail-ormawa"
	class="section-padding-x text-light-base bg-rose-s3-secondary relative bg-[url('/img/patterns/batik-1.png')] bg-repeat pt-36 pb-30 overflow-hidden"
>
	<div
		class="to-dark-base/30 absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent from-50%"
	></div>
	<div class="absolute -right-16 md:-right-24 bottom-0">
		<img
			src="/img/elements/rusa-dan-pohon.png"
			alt="Batik Kuning"
			class="w-60 md:w-80 lg:w-108"
		/>
	</div>
	<div class="relative z-10 container max-w-screen-xl">
		<div class="flex flex-col md:flex-row items-center justify-center gap-8">
			<img
				src="/img/placeholder.png"
				alt={`${name} Logo`}
				class="w-full max-w-xs lg:max-w-md xl:max-w-xl rounded-md object-cover shadow-lg"
			/>
			<div class="flex flex-col items-start">
				<h1
					class="font-berkshire-swash text-yellow-s3-base text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
				>
					{name}
				</h1>
				<p class="mt-2 text-justify">{description}</p>
			</div>
		</div>
	</div>
</section>
