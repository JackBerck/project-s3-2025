<script lang="ts">
	import { onMount } from 'svelte';

	let name = '';
	let faculty = '';
	let group = '';
	let companion = '';
	let motivation = '';
	let isButtonDisabled = true;
	let copyStatus = 'Salin Caption';

	// Update button state
	$: isButtonDisabled =
		!name.trim() || !faculty.trim() || !group.trim() || !companion.trim() || !motivation.trim();

	// Caption template
	$: caption = `[SHANKARA ABHINAYA : Satukan Harsa Awali Narasi dengan Karsa dan
Aksi, Rangkul Potensi Diri Bersama Nilai Harmoni Ciptakan Kolaborasi
Nyala Soedirman Muda] 

${motivation || '(Kata kata motivasi untuk diri sendiri sebagai Mahasiswa Baru Universitas Jenderal Soedirman)'}

Saya ${name || '(nama)'} dari Fakultas ${faculty || '(...)'} siap mengikuti rangkaian acara
Soedirman Student Summit 2025.

#SoedirmanStudentSummit #UniversitasJenderalSoedirman
#Gensoed2025 #ShankaraAbhinaya #S32025 #Prana Artawiyasa
#GensoedTwibbon_${companion || 'pendamping'} #${group || 'Kelompok'}

@soedirmanstudentsummit @instagramkelompok @instagrampendamping`;

	function handleCopy() {
		if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
			navigator.clipboard
				.writeText(caption)
				.then(() => {
					copyStatus = 'Caption Berhasil Disalin';
					setTimeout(() => {
						copyStatus = 'Salin Caption';
					}, 1500);
				})
				.catch(() => {
					fallbackCopy();
				});
		} else {
			fallbackCopy();
		}
	}

	function fallbackCopy() {
		try {
			const textarea = document.createElement('textarea');
			textarea.value = caption;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			copyStatus = 'Caption Berhasil Disalin';
			setTimeout(() => {
				copyStatus = 'Salin Caption';
			}, 1500);
		} catch {
			copyStatus = 'Gagal Menyalin';
			setTimeout(() => {
				copyStatus = 'Salin Caption';
			}, 1500);
		}
	}
</script>

<section id="body-twibbon" class="section-padding-x py-24 md:pt-36 md:pb-16">
	<div class="container max-w-screen-xl">
		<h1 class="font-berkshire-swash text-rose-s3-base mb-4 font-bold">
			Template Caption Twibbon S3 2025
		</h1>
		<div class="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
			<aside class="flex flex-shrink-0 flex-col items-center gap-6">
				<img
					src="/img/twibbon.webp"
					class="w-full max-w-[325px] rounded-2xl border-4 border-white/30 bg-white/10 object-cover shadow-xl"
					alt="Twibbon"
				/>
				<a
					href="https://www.capcut.com/tv2/ZSSX81h9w/"
					target="_blank"
					class="bg-dark-base text-white-base w-full max-w-[325px] rounded-xl px-6 py-3 text-center font-semibold shadow-lg transition duration-200 hover:bg-slate-700"
				>
					Download Template
				</a>
			</aside>
			<aside class="flex flex-grow flex-col gap-8">
				<div
					class="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg md:p-8"
				>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
						<div class="flex flex-col gap-2">
							<label for="name-field" class="text-dark-base font-semibold normal-font-size">Nama Lengkap</label>
							<input
								class="text-dark-base rounded-md bg-white px-5 py-3 font-medium outline-1 outline-gray-300 focus:outline-[3px] normal-font-size"
								placeholder="Masukan nama kamu..."
								id="name-field"
								bind:value={name}
								maxlength="50"
							/>
						</div>
						<div class="flex flex-col gap-2">
							<label for="faculty-field" class="text-dark-base font-semibold normal-font-size">Fakultas</label>
							<input
								class="text-dark-base rounded-md bg-white px-5 py-3 font-medium outline-1 outline-gray-300 focus:outline-[3px] normal-font-size"
								placeholder="Masukan fakultas kamu..."
								id="faculty-field"
								bind:value={faculty}
								maxlength="50"
							/>
						</div>
						<div class="flex flex-col gap-2">
							<label for="group-field" class="text-dark-base font-semibold normal-font-size">Kelompok</label>
							<input
								class="text-dark-base rounded-md bg-white px-5 py-3 font-medium outline-1 outline-gray-300 focus:outline-[3px] normal-font-size"
								placeholder="Masukan kelompok kamu..."
								id="group-field"
								bind:value={group}
								maxlength="50"
							/>
						</div>
						<div class="flex flex-col gap-2">
							<label for="companion-field" class="text-dark-base font-semibold normal-font-size"
								>Nama Pendamping Kelompok</label
							>
							<input
								class="text-dark-base rounded-md bg-white px-5 py-3 font-medium outline-1 outline-gray-300 focus:outline-[3px] normal-font-size"
								placeholder="Masukan nama pendamping kamu..."
								id="companion-field"
								bind:value={companion}
								maxlength="50"
							/>
						</div>
					</div>
					<div class="mt-4 flex flex-col gap-2">
						<label for="motivation-field" class="text-dark-base font-semibold normal-font-size"
							>Motivasi/Kata-kata untuk Diri Sendiri</label
						>
						<textarea
							class="text-dark-base rounded-md bg-white px-5 py-3 font-medium outline-1 outline-gray-300 focus:outline-[3px] normal-font-size"
							placeholder="Tulis motivasi atau harapanmu sebagai mahasiswa baru..."
							id="motivation-field"
							bind:value={motivation}
							rows="3"
							maxlength="200"
						></textarea>
					</div>
				</div>
				<div
					class="flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg md:p-8"
				>
					<p class="font-semibold w-full bg-yellow-s3-base text-light-base px-3 py-2 rounded-md large-font-size font-junigarden">Caption Preview</p>
					<p
						class="rounded-md font-medium break-words whitespace-pre-wrap normal-font-size"
						id="caption"
					>
						{caption}
					</p>
					<button
						class="bg-rose-s3-base text-white-base w-full rounded-xl px-6 py-3 text-center font-semibold shadow-lg transition duration-200 hover:brightness-110 disabled:bg-gray-400 disabled:hover:brightness-100 md:w-auto"
						on:click={handleCopy}
						disabled={isButtonDisabled}
					>
						{copyStatus}
					</button>
				</div>
			</aside>
		</div>
	</div>
</section>
