<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';

	// Active tab state
	let activeTab = 'dresscode';
	let activeDresscodeSub = 'day1';
	let activeGender = 'laki-laki';

	// Swiper instances
	let barangSwiperContainer: HTMLElement;
	let barangSwiper: Swiper;

	// Data for Dresscode
	const dresscodeData = {
		day1: {
			'laki-laki': [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja putih lengan panjang.',
				'Dasi hitam.',
				'Sepatu bertali dominan hitam.',
				'Jas dan topi almamater.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).',
				'Bagi Perempuan menggunakan bawahan berupa rok hitam panjang (dilarang span).'
			],
			perempuan: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja putih lengan panjang.',
				'Dasi hitam.',
				'Sepatu bertali dominan hitam.',
				'Jas dan topi almamater.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).',
				'Bagi Perempuan menggunakan bawahan berupa rok hitam panjang (dilarang span).'
			]
		},
		day2: {
			'laki-laki': [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja putih lengan panjang.',
				'Dasi hitam.',
				'Sepatu bertali dominan hitam.',
				'Jas dan topi almamater.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).',
				'Bagi Perempuan menggunakan bawahan berupa rok hitam panjang (dilarang span).'
			],
			perempuan: [
				'Pakaian tidak menampilkan lekuk tubuh.',
				'Kemeja putih lengan panjang.',
				'Dasi hitam.',
				'Sepatu bertali dominan hitam.',
				'Jas dan topi almamater.',
				'Rambut tidak berwarna.',
				'Bagi yang menggunakan ikat pinggang wajib berwarna hitam.',
				'Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).',
				'Bagi Perempuan menggunakan bawahan berupa rok hitam panjang (dilarang span).'
			]
		}
	};

	// Data for Barang Bawaan
	const barangBawaan = [
		{
			name: 'Tumbler',
			desc: 'Botol minum untuk tetap terhidrasi',
			image: '/img/placeholder.png',
			required: true
		},
		{
			name: 'Power Bank',
			desc: 'Untuk mengisi daya perangkat elektronik',
			image: '/img/placeholder.png',
			required: true
		},
		{
			name: 'Notebook & Pulpen',
			desc: 'Untuk mencatat hal-hal penting',
			image: '/img/placeholder.png',
			required: true
		},
		{
			name: 'Masker Cadangan',
			desc: 'Masker cadangan untuk protokol kesehatan',
			image: '/img/placeholder.png',
			required: true
		},
		{
			name: 'Tisu/Hand Sanitizer',
			desc: 'Untuk menjaga kebersihan tangan',
			image: '/img/placeholder.png',
			required: true
		},
		{
			name: 'Snack Ringan',
			desc: 'Cemilan untuk menambah energi',
			image: '/img/placeholder.png',
			required: false
		},
		{
			name: 'Payung/Jas Hujan',
			desc: 'Antisipasi cuaca tidak menentu',
			image: '/img/placeholder.png',
			required: false
		},
		{
			name: 'Kamera/Handphone',
			desc: 'Untuk dokumentasi momen berharga',
			image: '/img/placeholder.png',
			required: false
		}
	];

	// Data for Do's and Dont's
	const dosAndDonts = {
		dos: [
			'Datang tepat waktu sesuai jadwal',
			'Mengikuti dresscode yang telah ditentukan',
			'Membawa perlengkapan yang diperlukan',
			'Menjaga sikap dan sopan santun',
			'Aktif berpartisipasi dalam kegiatan',
			'Menjaga kebersihan lingkungan',
			'Mengikuti protokol kesehatan',
			'Berinteraksi dengan peserta lain',
			'Dokumentasi kegiatan dengan bijak',
			'Mematuhi aturan yang berlaku'
		],
		donts: [
			'Terlambat atau tidak hadir tanpa kabar',
			'Memakai pakaian yang tidak sesuai dresscode',
			'Membawa barang-barang berbahaya',
			'Bersikap tidak sopan atau kasar',
			'Mengganggu jalannya acara',
			'Membuang sampah sembarangan',
			'Mengabaikan protokol kesehatan',
			'Menyendiri atau tidak bersosialisasi',
			'Mengambil foto/video tanpa izin',
			'Melanggar peraturan yang telah ditetapkan'
		]
	};

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		// Initialize Swiper for Barang Bawaan
		initializeBarangSwiper();

		return () => {
			if (barangSwiper) {
				barangSwiper.destroy(true, true);
			}
		};
	});

	function initializeBarangSwiper() {
		if (barangSwiperContainer) {
			barangSwiper = new Swiper(barangSwiperContainer, {
				slidesPerView: 1,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				breakpoints: {
					640: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30
					}
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				effect: 'coverflow',
				coverflowEffect: {
					rotate: 20,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true
				}
			});
		}
	}

	// Tambahkan di bagian script
	let activeBarangIndex = 0;

	// Fungsi untuk mengatur item aktif
	function setActiveBarang(index: number) {
		activeBarangIndex = index;
	}

	// Fungsi navigasi
	function nextBarang() {
		activeBarangIndex = (activeBarangIndex + 1) % barangBawaan.length;
	}

	function prevBarang() {
		activeBarangIndex = activeBarangIndex === 0 ? barangBawaan.length - 1 : activeBarangIndex - 1;
	}

	// Auto-play slider (opsional)
	onMount(() => {
		// ... existing onMount code ...

		// Auto-play slider every 4 seconds
		const autoPlay = setInterval(() => {
			if (activeTab === 'barang') {
				nextBarang();
			}
		}, 4000);

		return () => {
			// ... existing cleanup code ...
			clearInterval(autoPlay);
		};
	});

	function setActiveTab(tab: string) {
		activeTab = tab;
		AOS.refresh();
	}

	function setActiveDresscodeSub(sub: string) {
		activeDresscodeSub = sub;
	}

	function setActiveGender(gender: string) {
		activeGender = gender;
	}
</script>

<svelte:head>
	<title>Starter Pack | S3 2025</title>
</svelte:head>

<section id="starterpack" class="bg-light-base section-padding-x pt-36 pb-16">
	<div class="container max-w-screen-xl">
		<!-- Header -->
		<div class="mb-12 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
			<!-- Ornament Top -->
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen"
				class="mx-auto mb-4 w-36 md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="200"
			/>
			<h1
				class="font-berkshire-swash text-rose-s3-base mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="400"
			>
				Starter Pack S3 2025
			</h1>
			<!-- Ornament Bottom -->
			<img
				src="/img/elements/ornamen-1.png"
				alt="Ornamen Bawah"
				class="ornament-bottom w-36 scale-y-[-1] transform md:w-40 lg:w-54"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="1000"
			/>
			<p
				class="text-dark-base mx-auto max-w-2xl text-lg"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="600"
			>
				Panduan lengkap untuk mempersiapkan diri mengikuti Soedirman Student Summit 2025
			</p>
		</div>

		<!-- Tab Navigation -->
		<div
			class="mb-8 flex flex-wrap justify-center gap-4"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="800"
		>
			<button
				class="flex items-center rounded-lg border-2 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 {activeTab ===
				'dresscode'
					? 'border-rose-s3-base bg-rose-s3-base text-white shadow-lg'
					: 'border-gray-300 bg-white text-gray-600 hover:border-rose-400 hover:text-rose-500'}"
				on:click={() => setActiveTab('dresscode')}
			>
				<svg
					class="mr-2 h-5 w-5"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 512"
					><path
						d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z"
					/></svg
				>
				Dress Code
			</button>
			<button
				class="flex items-center rounded-lg border-2 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 {activeTab ===
				'barang'
					? 'border-rose-s3-base bg-rose-s3-base text-white shadow-lg'
					: 'border-gray-300 bg-white text-gray-600 hover:border-rose-400 hover:text-rose-500'}"
				on:click={() => setActiveTab('barang')}
			>
				<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
					/>
				</svg>
				Barang Bawaan
			</button>
			<button
				class="flex items-center rounded-lg border-2 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 {activeTab ===
				'dosdonts'
					? 'border-rose-s3-base bg-rose-s3-base text-white shadow-lg'
					: 'border-gray-300 bg-white text-gray-600 hover:border-rose-400 hover:text-rose-500'}"
				on:click={() => setActiveTab('dosdonts')}
			>
				<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				Do's & Don'ts
			</button>
		</div>

		<!-- Tab Content -->
		<div class="tab-content">
			<!-- Dresscode Tab -->
			{#if activeTab === 'dresscode'}
				<div
					style="animation: fadeIn 0.5s ease-in-out;"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="200"
				>
					<!-- Day Selection -->
					<div class="mb-6 flex justify-center gap-4">
						<button
							class="rounded-lg border-2 px-8 py-2 font-medium transition-all duration-300 hover:scale-105 {activeDresscodeSub ===
							'day1'
								? 'border-rose-s3-base bg-rose-s3-base text-white'
								: 'border-rose-300 bg-white text-rose-500 hover:bg-rose-50'}"
							on:click={() => setActiveDresscodeSub('day1')}
						>
							Hari 1
						</button>
						<button
							class="rounded-lg border-2 px-8 py-2 font-medium transition-all duration-300 hover:scale-105 {activeDresscodeSub ===
							'day2'
								? 'border-rose-s3-base bg-rose-s3-base text-white'
								: 'border-rose-300 bg-white text-rose-500 hover:bg-rose-50'}"
							on:click={() => setActiveDresscodeSub('day2')}
						>
							Hari 2
						</button>
					</div>

					<!-- Gender Selection -->
					<div class="mb-8 flex justify-center gap-4">
						<button
							class="flex items-center rounded-lg border px-6 py-2 transition-all duration-300 {activeGender ===
							'laki-laki'
								? 'border-rose-s3-base bg-rose-s3-base text-white'
								: 'border-gray-300 bg-white text-gray-600 hover:border-rose-400 hover:text-rose-500'}"
							on:click={() => setActiveGender('laki-laki')}
						>
							<svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 14a6 6 0 1112 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
								/>
							</svg>
							Laki-laki
						</button>
						<button
							class="flex items-center rounded-lg border px-6 py-2 transition-all duration-300 {activeGender ===
							'perempuan'
								? 'border-rose-s3-base bg-rose-s3-base text-white'
								: 'border-gray-300 bg-white text-gray-600 hover:border-rose-400 hover:text-rose-500'}"
							on:click={() => setActiveGender('perempuan')}
						>
							<svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 14a6 6 0 1112 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
								/>
							</svg>
							Perempuan
						</button>
					</div>

					<!-- Dresscode Items -->
					<div class="grid gap-8 lg:grid-cols-2">
						<!-- Rules List -->
						<div class="h-fit rounded-lg border border-gray-200 bg-white p-6 shadow-md">
							<h3 class="text-dark-base mb-4 text-xl font-bold">
								Aturan Dresscode {activeDresscodeSub === 'day1' ? 'Hari 1' : 'Hari 2'}
							</h3>
							<ul class="list-none space-y-3">
								{#each dresscodeData[activeDresscodeSub][activeGender] as item, index}
									<li>
										<div
											class="flex items-start gap-3"
											data-aos="fade-up"
											data-aos-duration="600"
											data-aos-delay={400 + index * 100}
										>
											<svg
												class="text-rose-s3-base mt-0.5 h-5 w-5 flex-shrink-0"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
											<span class="text-gray-700">{item}</span>
										</div>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Visual Examples -->
						<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
							<h3 class="text-dark-base mb-4 text-xl font-bold">Contoh Penampilan</h3>

							<!-- Day 1 Examples -->
							{#if activeDresscodeSub === 'day1'}
								{#if activeGender === 'laki-laki'}
									<div class="flex flex-col items-center gap-4">
										<img
											src="/img/dresscodes/laki-laki.png"
											alt="Dresscode Laki-laki Hari 1"
											class="w-full max-w-sm rounded-lg shadow-lg"
											data-aos="fade-up"
											data-aos-duration="600"
											data-aos-delay="800"
										/>
										<p class="text-center text-gray-700">
											Penampilan <span class="text-rose-s3-base font-bold">Laki-laki</span> pada Hari
											1 S3 2025
										</p>
									</div>
								{:else}
									<!-- Perempuan Day 1 - Show both hijab and non-hijab -->
									<div class="space-y-6">
										<div class="flex flex-col items-center gap-4">
											<img
												src="/img/dresscodes/perempuan-hijab.png"
												alt="Dresscode Perempuan Berhijab Hari 1"
												class="w-full max-w-xs rounded-lg shadow-lg"
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-delay="800"
											/>
											<p class="text-center text-gray-700">
												Penampilan <span class="text-rose-s3-base font-bold"
													>Perempuan Berhijab</span
												> pada Hari 1
											</p>
										</div>

										<div class="flex flex-col items-center gap-4">
											<img
												src="/img/dresscodes/perempuan-non-hijab.png"
												alt="Dresscode Perempuan Tidak Berhijab Hari 1"
												class="w-full max-w-xs rounded-lg shadow-lg"
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-delay="900"
											/>
											<p class="text-center text-gray-700">
												Penampilan <span class="text-rose-s3-base font-bold"
													>Perempuan Tidak Berhijab</span
												> pada Hari 1
											</p>
										</div>
									</div>
								{/if}
							{:else}
								<!-- Day 2 Examples -->
								{#if activeGender === 'laki-laki'}
									<div class="flex flex-col items-center gap-4">
										<img
											src="/img/dresscodes/laki-laki.png"
											alt="Dresscode Laki-laki Hari 2"
											class="w-full max-w-sm rounded-lg shadow-lg"
											data-aos="fade-up"
											data-aos-duration="600"
											data-aos-delay="800"
										/>
										<p class="text-center text-gray-700">
											Penampilan <span class="text-rose-s3-base font-bold">Laki-laki</span> pada Hari
											2 S3 2025
										</p>
									</div>
								{:else}
									<!-- Perempuan Day 2 - Show both hijab and non-hijab -->
									<div class="space-y-6">
										<div class="flex flex-col items-center gap-4">
											<img
												src="/img/dresscodes/perempuan-hijab.png"
												alt="Dresscode Perempuan Berhijab Hari 2"
												class="w-full max-w-xs rounded-lg shadow-lg"
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-delay="800"
											/>
											<p class="text-center text-gray-700">
												Penampilan <span class="text-rose-s3-base font-bold"
													>Perempuan Berhijab</span
												> pada Hari 2
											</p>
										</div>

										<div class="flex flex-col items-center gap-4">
											<img
												src="/img/dresscodes/perempuan-non-hijab.png"
												alt="Dresscode Perempuan Tidak Berhijab Hari 2"
												class="w-full max-w-xs rounded-lg shadow-lg"
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-delay="900"
											/>
											<p class="text-center text-gray-700">
												Penampilan <span class="text-rose-s3-base font-bold"
													>Perempuan Tidak Berhijab</span
												> pada Hari 2
											</p>
										</div>
									</div>
								{/if}
							{/if}
						</div>
					</div>
				</div>
			{/if}

			<!-- Barang Bawaan Tab -->
			{#if activeTab === 'barang'}
				<div
					style="animation: fadeIn 0.5s ease-in-out;"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="200"
				>
					<!-- <div class="mb-8 text-center">
						<img
							src="/img/elements/ornamen-1.png"
							alt="Ornamen"
							class="mx-auto mb-4 w-24 md:w-28"
							data-aos="zoom-in"
							data-aos-duration="600"
						/>
						<h3 class="font-berkshire-swash text-rose-s3-base mb-4 text-3xl font-bold">
							Barang Bawaan
						</h3>
						<p class="mx-auto max-w-2xl text-gray-600">
							Siapkan barang-barang berikut untuk mendukung kegiatan S3 2025
						</p>
					</div> -->

					<!-- Custom Slider Container -->
					<div class="relative mx-auto max-w-6xl px-4">
						<!-- Main Item Display -->
						<div class="mb-8 flex justify-center">
							<div
								class="main-item-card transform transition-all duration-700 ease-in-out"
								data-aos="zoom-in"
								data-aos-duration="800"
							>
								<div
									class="relative overflow-visible rounded-2xl shadow-2xl"
									style="background: linear-gradient(135deg, #e23c64 0%, #feb3c5 100%); width: 400px; height: 500px;"
								>
									<!-- Main Item Image Container -->
									<div
										class="relative flex items-center justify-center p-12 backdrop-blur-sm"
										style="height: 320px; background-color: rgba(255, 255, 255, 0.2);"
									>
										<img
											src={barangBawaan[activeBarangIndex].image}
											alt={barangBawaan[activeBarangIndex].name}
											class="max-h-48 w-auto transform object-contain transition-all duration-500 hover:scale-110"
											loading="lazy"
										/>
										{#if barangBawaan[activeBarangIndex].required}
											<div
												class="absolute top-4 right-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white shadow-lg"
											>
												Wajib
											</div>
										{:else}
											<div
												class="absolute top-4 right-4 rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-white shadow-lg"
											>
												Opsional
											</div>
										{/if}
									</div>

									<!-- Main Item Content -->
									<div class="p-8 text-center text-white">
										<h4 class="mb-3 text-2xl font-bold">{barangBawaan[activeBarangIndex].name}</h4>
										<p class="text-lg leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
											{barangBawaan[activeBarangIndex].desc}
										</p>
									</div>
								</div>
							</div>
						</div>

						<!-- Thumbnail Slider -->
						<!-- <div class="flex items-center justify-center gap-4 pb-4">
							{#each barangBawaan as barang, index}
								<button
									class="thumbnail-item flex-shrink-0 transform transition-all duration-500 ease-in-out hover:scale-110 {index ===
									activeBarangIndex
										? 'active scale-125'
										: 'scale-90 opacity-70'}"
									on:click={() => setActiveBarang(index)}
									data-aos="fade-up"
									data-aos-duration="600"
									data-aos-delay={200 + index * 50}
								>
									<div
										class="relative overflow-hidden rounded-xl border-2 shadow-lg transition-all duration-300 {index ===
										activeBarangIndex
											? 'border-rose-s3-base shadow-xl'
											: 'border-transparent hover:border-rose-300'}"
										style="background: linear-gradient(135deg, #e23c64 0%, #feb3c5 100%); width: 120px; height: 140px;"
									>
										<div
											class="relative flex items-center justify-center p-4 backdrop-blur-sm"
											style="height: 80px; background-color: rgba(255, 255, 255, 0.2);"
										>
											<img
												src={barang.image}
												alt={barang.name}
												class="max-h-12 w-auto object-contain"
												loading="lazy"
											/>
											{#if barang.required}
												<div
													class="absolute top-1 right-1 rounded-full bg-red-500 px-1 py-0.5 text-xs font-bold text-white"
												>
													W
												</div>
											{:else}
												<div
													class="absolute top-1 right-1 rounded-full bg-yellow-500 px-1 py-0.5 text-xs font-bold text-white"
												>
													O
												</div>
											{/if}
										</div>
										<div class="p-3 text-center text-white">
											<h5 class="text-xs leading-tight font-semibold">{barang.name}</h5>
										</div>
									</div>
								</button>
							{/each}
						</div> -->

						<!-- Navigation Arrows -->
						<button
							class="text-rose-s3-base absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-rose-50"
							on:click={prevBarang}
							aria-label="Previous item"
						>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>

						<button
							class="text-rose-s3-base absolute top-1/2 right-0 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-rose-50"
							on:click={nextBarang}
							aria-label="Next item"
						>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>

						<!-- Progress Indicators -->
						<div class="mt-6 flex justify-center gap-2">
							{#each barangBawaan as _, index}
								<button
									class="h-3 w-3 rounded-full transition-all duration-300 {index ===
									activeBarangIndex
										? 'bg-rose-s3-base scale-125'
										: 'bg-gray-300 hover:bg-rose-300'}"
									on:click={() => setActiveBarang(index)}
									aria-label="Go to item {index + 1}"
								></button>
							{/each}
						</div>
					</div>
				</div>
			{/if}

			<!-- Do's and Don'ts Tab -->
			{#if activeTab === 'dosdonts'}
				<div
					style="animation: fadeIn 0.5s ease-in-out;"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="200"
				>
					<div class="grid gap-8 lg:grid-cols-2">
						<!-- Do's -->
						<div
							class="rounded-lg border border-gray-200 bg-white p-6 shadow-md"
							data-aos="fade-right"
							data-aos-duration="800"
							data-aos-delay="400"
						>
							<div class="mb-6 flex items-center text-green-600">
								<svg class="mr-3 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								<h3 class="text-2xl font-bold">DO'S</h3>
							</div>
							<div class="space-y-3">
								{#each dosAndDonts.dos as item, index}
									<div
										class="flex items-start gap-3 rounded-lg bg-green-50 p-3"
										data-aos="fade-up"
										data-aos-duration="600"
										data-aos-delay={600 + index * 50}
									>
										<svg
											class="h-5 w-5 flex-shrink-0 text-green-600"
											style="margin-top: 2px;"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>{item}</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- Don'ts -->
						<div
							class="rounded-lg border border-gray-200 bg-white p-6 shadow-md"
							data-aos="fade-left"
							data-aos-duration="800"
							data-aos-delay="400"
						>
							<div class="mb-6 flex items-center text-red-600">
								<svg class="mr-3 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
								<h3 class="text-2xl font-bold">DON'TS</h3>
							</div>
							<div class="space-y-3">
								{#each dosAndDonts.donts as item, index}
									<div
										class="flex items-start gap-3 rounded-lg bg-red-50 p-3"
										data-aos="fade-up"
										data-aos-duration="600"
										data-aos-delay={600 + index * 50}
									>
										<svg
											class="h-5 w-5 flex-shrink-0 text-red-600"
											style="margin-top: 2px;"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>{item}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Animations */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Swiper Overrides */
	:global(.swiper-pagination-bullet) {
		background-color: #e23c64 !important;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}
	}
</style>
