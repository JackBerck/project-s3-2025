<script>
	import HomeMascotsDocumentation from "./documentation.svelte";
</script>

<section
	id="mascots-home"
	class="section-padding-x text-light-base relative overflow-hidden pt-16 pb-12 md:pt-0 xl:pt-24"
>
	<div class="absolute top-48 -left-24 md:top-72 lg:-left-24 xl:-left-48">
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="w-60 md:w-80 lg:w-108 xl:w-144"
		/>
	</div>
	<div class="absolute top-84 -right-24 md:top-180 lg:top-172 lg:-right-24 xl:top-144 xl:-right-48">
		<img
			src="/img/elements/batik-kuning-1.png"
			alt="Batik Kuning"
			class="w-60 md:w-80 lg:w-108 xl:w-144"
		/>
	</div>
	<div class="absolute bottom-40 -left-16">
		<img src="/img/elements/wayang-1.png" alt="Batik Kuning" class="w-36 md:w-48 lg:w-72 xl:w-84" />
	</div>
	<div class="absolute -right-16 bottom-40 scale-x-[-1] transform">
		<img src="/img/elements/wayang-1.png" alt="Batik Kuning" class="w-36 md:w-48 lg:w-72 xl:w-84" />
	</div>
	<div class="relative z-10 container max-w-screen-xl">
		<div class="m-auto mb-8 flex w-full max-w-screen-md flex-col text-center sm:mb-12">
			<div class="flex items-center">
				<div class="w-full lg:w-[768px]">
					<img
						src="/img/mascots/perkenalan-cowok.webp"
						alt="Perkenalan Chibi Maskot S3 Cowok"
						class="inline-block rounded"
					/>
				</div>
			</div>
			<div class="flex items-center">
				<div class="w-full lg:w-[768px]">
					<img
						src="/img/mascots/perkenalan-cewek.webp"
						alt="Perkenalan Chibi Maskot S3 Cewek"
						class="inline-block rounded"
					/>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="m-auto mb-8 max-w-[270px] text-center sm:max-w-xs md:max-w-md lg:max-w-lg">
				<img
					class="m-auto"
					src="/img/mascots/chibi-cewek-cowok.webp"
					alt="Maskot Soedirman Student Summit"
				/>
			</div>
			<div class="text-dark-base mx-auto mb-8 text-center">
				<h2
					class="font-berkshire-swash text-rose-s3-base mb-4 rounded-md p-2 text-2xl font-semibold md:text-3xl lg:text-5xl"
				>
					Mengenal Lebih Dekat dengan Soedirman Student Summit
				</h2>
				<p class="font-plus-jakarta-sans mx-auto max-w-screen-lg rounded-md p-2 text-center">
					Soedirman Student Summit (S3) merupakan kegiatan tahunan yang diselenggarakan sebagai
					wadah untuk pengenalan kehidupan perkuliahan dan untuk menyambut mahasiswa baru
					Universitas Jenderal Soedirman. Rangkaian kegiatan S3 bertujuan sebagai gerbang awal
					mahasiswa baru untuk mengenal dirinya sendiri dengan mengimplementasikan nilai-nilai yang
					akan dibawakan, serta mengenal lebih jauh tentang Universitas Jenderal Soedirman
				</p>
			</div>
			<HomeMascotsDocumentation />
		</div>
	</div>
</section>
