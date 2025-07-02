<script>
	import afterMovies from '../../data/after-movies';
</script>

<section id="videos-home" class="section-padding-x overflow-hidden py-12">
	<div class="container max-w-screen-xl">
		<div
			class="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 lg:gap-16"
		>
			<h2 class="text-rose-s3-base font-berkshire-swash text-4xl font-semibold lg:text-5xl">
				#SalamSoedirman
			</h2>
			<iframe
				src="https://www.youtube.com/embed/Q-A_Y6H-tbg?si=g66CK4mrOhBLjWj5"
				title="YouTube video player"
				frameborder="0"
				class="aspect-video w-full rounded-md xl:max-w-xl"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
		<div
			class="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row-reverse md:gap-8 lg:gap-16"
		>
			<h2 class="text-rose-s3-base font-berkshire-swash text-4xl font-semibold lg:text-5xl">
				#GenerasiSoedirman
			</h2>
			<iframe
				src="https://www.youtube.com/embed/5-W7wDOEsDc?si=fjC6RT8-czZxhpVl"
				title="YouTube video player"
				frameborder="0"
				class="aspect-video w-full rounded-md xl:max-w-xl"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
		<div class="flex flex-col items-center justify-center gap-4">
			<h2 class="text-rose-s3-base font-berkshire-swash text-center font-semibold">
				Kilas Balik Soedirman Student Summit
			</h2>
			<div class="scrollbar-hide w-full overflow-x-auto">
				<div class="flex gap-6 md:flex-wrap md:items-center md:justify-center">
					{#each afterMovies as movie (movie.year)}
						<div class="flex-shrink-0 text-center md:flex-shrink">
							<iframe
								src={movie.link}
								title={`YouTube video player ${movie.name}`}
								frameborder="0"
								class="aspect-video w-72 rounded-md md:w-full md:xl:max-w-xl"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
							<h3 class="text-rose-s3-base font-berkshire-swash font-medium">{movie.year}</h3>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
