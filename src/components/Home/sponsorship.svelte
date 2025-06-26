<script lang="ts">
	import sponsorships from '../../data/sponsorships';
</script>

<section
	id="sponsorship-home"
	class="section-padding-x text-light-base from-10% from-yellow-s3-base via-light-base to-100% to-rose-s3-base relative overflow-hidden bg-gradient-to-b py-12 md:py-12"
>
	<div class="container max-w-screen-xl">
		<div class="mb-8 flex flex-col items-center justify-center pt-8 md:gap-2">
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Atas"
				class="animate-fade-in w-36 md:w-40 lg:w-54"
			/>
			<h2
				class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
			>
				Sponsorship
			</h2>
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="animate-fade-in w-36 scale-y-[-1] transform md:w-40 lg:w-54"
			/>
		</div>
		<div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
			{#each sponsorships as sponsorship}
				<div
					class="transition-transform hover:scale-105 flex items-center justify-center"
				>
					<img
						src={sponsorship.logo}
						alt={sponsorship.name}
						class="h-16 w-auto object-contain"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
