<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	const faq = [
		{
			question: 'Apa itu Soedirman Students Summit (S3)?',
			answer:
				'Soedirman Students Summit (S3) adalah acara tahunan terbesar yang diselenggarakan oleh BEM Universitas Jenderal Soedirman. Acara ini menggabungkan berbagai rangkaian kegiatan seperti seminar, workshop, kompetisi, dan pertunjukan seni budaya yang bertujuan untuk mengembangkan potensi mahasiswa dan mempererat tali silaturahmi antar civitas akademika.'
		},
		{
			question: 'Siapa saja yang bisa mengikuti S3 2025?',
			answer:
				'S3 2025 terbuka untuk seluruh mahasiswa dari berbagai universitas di Indonesia, khususnya mahasiswa Unsoed. Beberapa kegiatan juga terbuka untuk umum seperti seminar dan pertunjukan seni budaya. Setiap kegiatan memiliki kriteria peserta yang berbeda-beda sesuai dengan jenis acaranya.'
		},
		{
			question: 'Kapan dan dimana S3 2025 akan dilaksanakan?',
			answer:
				'S3 2025 akan dilaksanakan pada tahun 2025 dengan lokasi utama di kampus Universitas Jenderal Soedirman, Purwokerto. Jadwal lengkap dan venue detail akan diumumkan lebih lanjut melalui media sosial resmi dan website S3.'
		},
		{
			question: 'Bagaimana cara mendaftar untuk mengikuti S3 2025?',
			answer:
				'Pendaftaran dapat dilakukan melalui website resmi S3 atau link pendaftaran yang akan dibagikan melalui media sosial. Proses pendaftaran biasanya dibuka beberapa bulan sebelum acara berlangsung. Pastikan untuk mengikuti media sosial resmi S3 agar tidak ketinggalan informasi pendaftaran.'
		},
		{
			question: 'Apakah ada biaya untuk mengikuti S3 2025?',
			answer:
				'Biaya pendaftaran bervariasi tergantung jenis kegiatan yang diikuti. Beberapa acara mungkin gratis, sementara yang lain memerlukan biaya pendaftaran. Informasi detail mengenai biaya akan disampaikan bersamaan dengan pengumuman pendaftaran masing-masing kegiatan.'
		},
		{
			question: 'Apa saja kegiatan yang ada di S3 2025?',
			answer:
				'S3 2025 akan menampilkan berbagai kegiatan menarik seperti seminar nasional, workshop pengembangan diri, kompetisi akademik dan non-akademik, pertunjukan seni budaya, pameran, dan berbagai acara networking. Detail lengkap kegiatan akan diumumkan secara bertahap.'
		},
		{
			question: 'Bagaimana cara mendapatkan informasi terbaru tentang S3 2025?',
			answer:
				'Ikuti media sosial resmi S3 di Instagram, TikTok, YouTube, dan platform lainnya. Anda juga bisa bergabung dengan grup WhatsApp atau Telegram yang akan dibagikan untuk mendapatkan update langsung. Website resmi juga akan terus diperbarui dengan informasi terkini.'
		},
		{
			question: 'Apakah ada sertifikat untuk peserta S3 2025?',
			answer:
				'Ya, peserta yang mengikuti kegiatan S3 2025 akan mendapatkan sertifikat sesuai dengan kegiatan yang diikuti. Sertifikat akan diberikan kepada peserta yang hadir penuh dan memenuhi persyaratan yang telah ditentukan untuk masing-masing kegiatan.'
		}
	];

	// Menggunakan single value untuk better reactivity
	let openIndex: number = -1;

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 100,
			delay: 0
		});

		AOS.refresh();
	});

	function toggleFAQ(index: number) {
		if (openIndex === index) {
			openIndex = -1; // Close if already open
		} else {
			openIndex = index; // Open this one
		}
		console.log(`FAQ toggled: openIndex is now ${openIndex}`);
	}
</script>

<section id="faq-contact-us" class="section-padding-x relative overflow-hidden py-16">
	<!-- Background Decorations -->
	<div class="absolute inset-0 opacity-5">
		<div class="bg-yellow-s3-base absolute top-10 right-10 h-32 w-32 rounded-full blur-3xl"></div>
		<div
			class="bg-rose-s3-secondary absolute bottom-10 left-10 h-40 w-40 rounded-full blur-3xl"
		></div>
		<div class="bg-rose-s3-base absolute top-1/2 right-1/4 h-24 w-24 rounded-full blur-2xl"></div>
	</div>

	<div class="relative z-10 container max-w-screen-xl">
		<div class="flex flex-col items-center justify-center">
			<!-- Header Section -->
			<div
				class="mb-12 flex flex-col items-center justify-center gap-2"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="0"
			>
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Atas"
					class="w-36 md:w-40 lg:w-54"
					data-aos="zoom-in"
					data-aos-duration="600"
					data-aos-delay="100"
				/>
				<h2
					class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="200"
				>
					Frequently Asked Questions
				</h2>
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Bawah"
					class="w-36 scale-y-[-1] transform md:w-40 lg:w-54"
					data-aos="zoom-in"
					data-aos-duration="600"
					data-aos-delay="300"
				/>
			</div>

			<!-- Description -->
			<div
				class="mb-12 max-w-3xl text-center"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="400"
			>
				<p class="mb-4 text-lg leading-relaxed text-gray-700">Punya pertanyaan tentang S3 2025?</p>
				<p class="leading-relaxed text-gray-600">
					Temukan jawaban untuk pertanyaan yang sering diajukan tentang Soedirman Students Summit di
					bawah ini. Jika pertanyaan Anda belum terjawab, jangan ragu untuk menghubungi kami melalui
					media sosial.
				</p>
			</div>

			<!-- FAQ Items -->
			<div class="w-full max-w-4xl space-y-4">
				{#each faq as item, index (index)}
					<div
						class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay={500 + index * 100}
					>
						<!-- Question Button -->
						<button
							class="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-300 hover:bg-gray-50 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:outline-none"
							on:click={() => toggleFAQ(index)}
							type="button"
						>
							<h3
								class="group-hover:text-rose-s3-base pr-4 text-lg font-semibold text-gray-800 transition-colors duration-300"
							>
								{item.question}
							</h3>
							<div class="ml-4 flex-shrink-0">
								<div
									class="from-rose-s3-secondary to-rose-s3-base flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-white transition-all duration-300 group-hover:scale-110 {openIndex ===
									index
										? 'rotate-180'
										: 'rotate-0'}"
								>
									<svg
										class="h-5 w-5 transition-transform duration-300"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						</button>

						<!-- Answer Content -->
						{#if openIndex === index}
							<div class="px-6 pt-2 pb-6">
								<div
									class="from-rose-s3-secondary to-rose-s3-base mb-4 h-px w-full bg-gradient-to-r opacity-20"
								></div>
								<p class="leading-relaxed text-gray-600">
									{item.answer}
								</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Additional Contact CTA -->
			<div
				class="mt-12 text-center"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="1200"
			>
				<p class="mb-6 text-gray-600">
					Masih ada pertanyaan lain? Jangan ragu untuk menghubungi kami!
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a
						href="https://wa.me/6285290431823"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700 hover:shadow-xl"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"
							/>
						</svg>
						WhatsApp
					</a>
					<a
						href="mailto:soedirmanstudentsummit25@gmail.com"
						class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.82l8.544 6.408 8.544-6.408h1.82c.904 0 1.636.732 1.636 1.636z"
							/>
						</svg>
						Email
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Responsive adjustments */
	@media (max-width: 768px) {
		h3 {
			font-size: 1rem;
		}
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
