<script lang="ts">
	import SwiperFaculty from '../Swipers/faculty.svelte';
    import dataFakultas from '../../data/faculties';
</script>

<section class="section-padding-x pt-12 pb-24">
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
				Fakultas di Unsoed
			</h2>
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="animate-fade-in w-36 scale-y-[-1] transform md:w-40 lg:w-54"
			/>
		</div>
		<div class="flex h-96 max-h-96 w-full overflow-hidden md:h-80 md:max-h-80">
			<SwiperFaculty fakultas={dataFakultas} />
		</div>
	</div>
</section>
