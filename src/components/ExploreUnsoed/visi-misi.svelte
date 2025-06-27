<script>
    import { visi, misi } from "../../data/visi-misi";
</script>

<section
	id="visi-misi-explore-unsoed"
	class="section-padding-x bg-rose-s3-secondary text-light-base pt-24 pb-12"
>
	<div class="container max-w-screen-xl">
		<div class="flex flex-wrap gap-4 md:gap-8">
			<div class="m-auto flex flex-col flex-wrap justify-center gap-4 md:flex-row md:gap-0">
				<div class="flex-1 items-center">
					<h2 class="text-center font-berkshire-swash font-semibold">Visi</h2>
					<p class="text-justify">
						{visi}
					</p>
				</div>
				<div class="bg-light-base mx-4 hidden min-h-full min-w-2 rounded-md md:block"></div>
				<div class="flex-1 items-center">
					<h2 class="text-center font-berkshire-swash font-semibold">Misi</h2>
					<ol class="list-decimal pl-4 text-justify">
						{#each misi as item}
							<li>{item}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
