<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	const socialMedia = [
		{
			platform: 'Instagram',
			name: '@soedirmanstudentsummit',
			url: 'https://www.instagram.com/soedirmanstudentsummit/',
			color: 'from-pink-500 to-purple-600',
			hoverColor: 'hover:from-pink-600 hover:to-purple-700',
			icon: 'instagram'
		},
		{
			platform: 'TikTok',
			name: '@soedirmanstudentsummit',
			url: 'https://www.tiktok.com/@soedirmanstudentsummit',
			color: 'from-black to-gray-800',
			hoverColor: 'hover:from-gray-800 hover:to-black',
			icon: 'tiktok'
		},
		{
			platform: 'WhatsApp',
			name: 'Minsoed S3',
			url: 'https://wa.me/6285290431823',
			color: 'from-green-500 to-green-600',
			hoverColor: 'hover:from-green-600 hover:to-green-700',
			icon: 'whatsapp'
		},
		{
			platform: 'Spotify',
			name: 'Soedirman Students Summit',
			url: 'https://open.spotify.com/user/317jtugbgtp3gi5jnrnj6pys265q?si=DYBG44kjRYmuD67OY95k2g',
			color: 'from-green-400 to-green-500',
			hoverColor: 'hover:from-green-500 hover:to-green-600',
			icon: 'spotify'
		},
		{
			platform: 'YouTube',
			name: 'BEM Unsoed',
			url: 'https://www.youtube.com/@BEMUnsoed',
			color: 'from-red-500 to-red-600',
			hoverColor: 'hover:from-red-600 hover:to-red-700',
			icon: 'youtube'
		},
		{
			platform: 'Email',
			name: 'soedirmanstudentsummit25@gmail.com',
			url: 'mailto:soedirmanstudentsummit25@gmail.com',
			color: 'from-blue-500 to-blue-600',
			hoverColor: 'hover:from-blue-600 hover:to-blue-700',
			icon: 'email'
		}
	];

	onMount(() => {
		// Initialize AOS
		AOS.init({
			duration: 800,
			easing: 'ease-in-out-cubic',
			once: true,
			offset: 24,
			delay: 0
		});

		// Refresh AOS when component mounts
		AOS.refresh();
	});

	function getIcon(iconName: string) {
		const icons: { [key: string]: string } = {
			instagram: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,

			tiktok: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>`,

			whatsapp: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/></svg>`,

			spotify: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,

			youtube: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,

			email: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.82l8.544 6.408 8.544-6.408h1.82c.904 0 1.636.732 1.636 1.636z"/></svg>`
		};
		return icons[iconName] || icons.email;
	}
</script>

<section
	id="social-media-contact-us"
	class="section-padding-x relative overflow-hidden pt-24 pb-16"
>
	<!-- Background Decorations -->
	<div class="absolute inset-0 opacity-5">
		<div class="bg-rose-s3-secondary absolute top-10 left-10 h-32 w-32 rounded-full blur-3xl"></div>
		<div
			class="bg-yellow-s3-base absolute right-10 bottom-10 h-40 w-40 rounded-full blur-3xl"
		></div>
		<div class="bg-rose-s3-base absolute top-1/2 left-1/4 h-24 w-24 rounded-full blur-2xl"></div>
	</div>

	<div class="relative z-10 container max-w-screen-xl">
		<div class="flex flex-col items-center justify-center">
			<!-- Ornament -->
			<div
				class="flex flex-col items-center justify-center pt-8 md:gap-2"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="200"
			>
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Atas"
					class="w-36 md:w-40 lg:w-54"
					data-aos="fade-down"
					data-aos-duration="600"
					data-aos-delay="100"
				/>
				<h2
					class="font-berkshire-swash text-rose-s3-base px-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="300"
				>
					Ikuti Kami di Media Sosial
				</h2>
				<img
					src="/img/elements/ornamen-1.png"
					alt="Ornamen Bawah"
					class="w-36 scale-y-[-1] transform md:w-40 lg:w-54"
					data-aos="fade-down"
					data-aos-duration="600"
					data-aos-delay="400"
				/>
			</div>

			<!-- Description -->
			<div
				class="mb-12 mt-8 max-w-3xl text-center"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="400"
			>
				<p class="leading-relaxed text-gray-700">
					Jangan lewatkan kabar terbaru dan konten menarik lainnya dari kami! Ikuti kami di berbagai
					platform sosial media untuk tetap terhubung dan menjadi yang pertama tahu tentang
					informasi penting lainnya mengenai S3.
				</p>
			</div>

			<!-- Social Media Cards -->
			<div class="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each socialMedia as social, index}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay={600 + index * 100}
					>
						<!-- Background Gradient -->
						<div
							class="absolute inset-0 bg-gradient-to-br {social.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10"
						></div>

						<!-- Content -->
						<div class="relative z-10">
							<!-- Icon and Platform -->
							<div class="mb-4 flex items-center gap-4">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br {social.color} {social.hoverColor} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
								>
									{@html getIcon(social.icon)}
								</div>
								<div>
									<h3
										class="font-bold text-gray-800 transition-colors duration-300 group-hover:text-gray-900"
									>
										{social.platform}
									</h3>
									<div
										class="h-0.5 w-0 bg-gradient-to-r {social.color} transition-all duration-300 group-hover:w-full"
									></div>
								</div>
							</div>

							<!-- Account Name -->
							<div class="mb-4">
								<p
									class="text-sm font-medium break-all text-gray-600 transition-colors duration-300 group-hover:text-gray-700"
								>
									{social.name}
								</p>
							</div>

							<!-- Call to Action -->
							<div class="flex items-center justify-between">
								<span
									class="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-600"
								>
									Klik untuk mengikuti
								</span>
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover:bg-gradient-to-br group-hover:{social.color} transition-all duration-300 group-hover:scale-110"
								>
									<svg
										class="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</div>
							</div>
						</div>

						<!-- Hover Effect Overlay -->
						<div
							class="absolute inset-0 bg-gradient-to-br {social.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5"
						></div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Enhanced hover animations */
	.group:hover .h-0\.5 {
		transition-delay: 0.1s;
	}

	/* Custom scrollbar if needed */
	.overflow-auto::-webkit-scrollbar {
		width: 4px;
	}

	.overflow-auto::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	.overflow-auto::-webkit-scrollbar-thumb {
		background: #c1c1c1;
		border-radius: 2px;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.group:hover {
			transform: translateY(-2px) !important;
		}
	}

	/* AOS override untuk mobile */
	@media (max-width: 768px) {
		[data-aos] {
			transition-duration: 0.6s !important;
		}
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		.group {
			transition: none;
		}

		.group:hover {
			transform: none;
		}

		/* Disable AOS for users who prefer reduced motion */
		[data-aos] {
			pointer-events: auto !important;
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}
	}
</style>
