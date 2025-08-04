export interface Assignment {
	name: string;
	description: string;
	longDescription: string;
	image: string;
	link?: string;
	openedAt?: Date;
}

export const assignments: Assignment[] = [
	{
		name: 'Borang FGD',
		description: 'Membuat borang FGD untuk mengumpulkan data mahasiswa dan mata kuliah',
		longDescription:
			'Perkembangan informasi digital di media sosial sangat pesat. Hal tersebut perlu dimanfaatkan dengan baik, salah satunya yaitu dimanfaatkan sebagai media promosi acara ataupun kegiatan. Dengan Borang FGD Diadakannya penugasan borang yang akan dipublikasikan melalui media sosial instagram merupakan solusi yang tepat untuk membuat acara meriah dan dengan cepat dapat diketahui banyak orang, karena instagram merupakan salah satu media sosial dengan pengguna terbanyak di indonesia.',
		image: '/img/placeholder.png',
		link: '/assignments/sistem-akademik',
		openedAt: new Date('2025-07-01')
	},
	{
		name: 'Green Waves (Ecobrick)',
		description: 'Membuat website resmi untuk profil universitas dengan desain responsif',
		longDescription:
			'Isu lingkungan saat ini menuntut keterlibatan aktif dari seluruh lapisan masyarakat, termasuk mahasiswa sebagai generasi muda. Melalui pendekatan kreatif dan inovatif, limbah yang sebelumnya dianggap tidak berguna dapat diolah menjadi produk yang memiliki nilai guna dan estetika. Tema “Green Waves” menggambarkan semangat baru dalam membangun gelombang kesadaran lingkungan yang dimulai dari langkah kecil namun bermakna. Oleh karena itu, kegiatan ini dirancang untuk mendorong mahasiswa baru agar mulai berperan dalam menciptakan solusi lingkungan melalui karya nyata.',
		image: '/img/placeholder.png',
		link: '/assignments/website-universitas',
		openedAt: new Date('2025-07-31')
	},
	{
		name: 'Video Perkenalan Diri',
		description: 'Membuat video perkenalan diri untuk mahasiswa baru',
		longDescription:
			"Memahami diri sendiri adalah langkah awal untuk bisa menghargai setiap hal yang dimiliki baik kekuatan, kekurangan, mimpi, maupun perjalanan. Dalam proses mengenal dunia baru, mengenal diri menjadi pondasi yang tak kalah penting. Dengan memahami diri sendiri maka mudah bagi kita untuk mengembangkan sesuatu yang kita miliki. “Pieces of Me” merupakan ruang untuk merangkai potongan-potongan kecil tentang diri, bukan hanya tentang nama atau asal, tetapi tentang apa yang membentuk diri hingga hari ini. Melalui “Pieces of Me”, setiap individu diajak menyelami, merangkai, dan membagikan kisahnya dengan cara yang paling otentik.",
		image: '/img/placeholder.png',
		openedAt: new Date('2025-07-17')
	},
	{
		name: 'Resonansi',
		description: 'Membangun platform pembelajaran daring untuk mahasiswa',
		longDescription:
			'Refleksi Seni, Olahraga, dan Kreasi (RESONANSI), adalah salah satu rangkaian acara dari Soedirman Student Summit (S3) 2025 yang menjadi wadah bagi mahasiswa baru Universitas Jenderal Soedirman untuk mengekspresikan bakat, kreativitas, dan kemampuan mereka di berbagai bidang seni. Mulai dari menyanyi, bermain musik, tari modern maupun tradisional, hingga keterampilan unik lainnya, RESONANSI hadir untuk merayakan keberagaman seni dan menciptakan harmoni di antara para Soedirman Muda. RESONANSI bukan sekadar ajang pencarian bakat, tapi juga ruang belajar untuk membangun rasa percaya diri, mengasah kreativitas, dan memperkenalkan potensi seni maba kepada seluruh keluarga besar Unsoed. Melalui RESONANSI, mahasiswa baru diajak untuk menunjukkan karya terbaiknya, menginspirasi satu sama lain, dan berkontribusi dalam semangat kolaborasi di Soedirman Student Summit 2025.',
		image: '/img/placeholder.png',
		link: '/assignments/elearning-portal',
		openedAt: new Date('2025-07-26')
	},
	{
		name: 'Essay Refleksi',
		description: 'Mengembangkan sistem manajemen perpustakaan berbasis web',
		longDescription:
			'Masa perkuliahan adalah tahap penting untuk mempersiapkan diri menghadapi dunia kerja, di mana mahasiswa perlu mulai mengembangkan karir sejak awal masuk perguruan tinggi. Adaptasi di kampus bukan hanya soal sosial dan akademik, tetapi juga kesempatan mengenali potensi, membangun kompetensi, dan merancang jalur karir. Melalui esai refleksi, mahasiswa dapat menilai kesiapan, mengidentifikasi kelebihan dan kekurangan, serta menetapkan tujuan karir yang jelas, sehingga terdorong untuk aktif mengembangkan keterampilan dan jaringan profesional sebagai dasar kesuksesan di masa depan.',
		image: '/img/placeholder.png',
		link: '/assignments/perpustakaan-digital',
		openedAt: new Date('2025-07-19')
	},
	// Done
	{
		name: 'Papan Kelompok',
		description: 'Membuat papan informasi kreatif untuk kelompok mahasiswa baru',
		longDescription:
			'Papan kelompok berfungsi sebagai media berbagi ide, rencana, dan informasi antar anggota kelompok. Setiap kelompok wajib membuat papan berukuran 100 cm x 60 cm yang memuat nama kelompok, dapat dihias sekreatif mungkin tanpa menutupi identitas, serta tidak mengandung unsur SARA. Sertakan tagar #ShankaraAbhinaya dan #PranaArthawiyasa pada papan.',
		image: '/img/placeholder.png',
		link: '/assignments/penjadwalan-ruang',
		openedAt: new Date('2025-07-31')
	},
	// Done
	{
		name: 'Yel-Yel Kelompok',
		description: 'Yel-yel kelompok untuk memperkenalkan diri dan kelompok',
		longDescription:
			'Yel-yel kelompok adalah seruan atau teriakan semangat yang dibuat untuk menunjukkan kekompakan, solidaritas, dan identitas sebuah kelompok. Yel-yel ini sering digunakan dalam berbagai kegiatan kelompok seperti perkemahan, lomba, masa orientasi, atau kegiatan kelompok lainnya, untuk membangkitkan semangat dan kebersamaan. Bersifat wajib bagi seluruh mahasiswa baru, dengan ketentuan: Yel-yel merupakan gagasan original dari masing-masing kelompok! Yel-yel tidak mengandung unsur SARA dan tidak menyinggung pihak lain! Yel-yel dapat digunakan sebagai penyemangat.',
		image: '/img/placeholder.png',
		link: '/assignments/tugas-akhir',
		openedAt: new Date('2025-07-31')
	},
	{
		name: 'Campaign Anti Kekerasan Seksual (Short Movie)',
		description: 'Membuat film pendek untuk kampanye anti kekerasan seksual',
		longDescription:
			'Kekerasan seksual merupakan isu serius yang dapat terjadi di berbagai lingkungan, termasuk di lingkungan kampus. Mahasiswa baru sebagai bagian dari sivitas akademika memiliki peran penting dalam menciptakan dan menjaga ruang aman di lingkungan perkuliahan. Melalui kampanye ini, diharapkan mahasiswa baru tidak hanya memahami bentuk-bentuk kekerasan seksual, tetapi juga mampu bersikap kritis, empatik, dan berani dalam menolak serta melaporkan tindakan tersebut.',
		image: '/img/placeholder.png',
		openedAt: new Date('2025-08-04')
	},
	{
		name: 'Green Waves (Karya dan Karsa)',
		description: 'Membuat karya seni atau inovasi untuk kampanye lingkungan',
		longDescription:
			'Isu lingkungan saat ini menuntut keterlibatan aktif dari seluruh lapisan masyarakat, termasuk mahasiswa sebagai generasi muda. Melalui pendekatan kreatif dan inovatif, limbah yang sebelumnya dianggap tidak berguna dapat diolah menjadi produk yang memiliki nilai guna dan estetika. Tema “Green Waves” menggambarkan semangat baru dalam membangun gelombang kesadaran lingkungan yang dimulai dari langkah kecil namun bermakna. Oleh karena itu, kegiatan ini dirancang untuk mendorong mahasiswa baru agar mulai berperan dalam menciptakan solusi lingkungan melalui karya nyata.',
		image: '/img/placeholder.png',
		link: '/assignments/portal-beasiswa',
		openedAt: new Date('2025-08-04')
	},
	{
		name: 'LGD (Leader Group Discussion)',
		description: 'Membuat diskusi kelompok terarah untuk mengasah kemampuan kepemimpinan',
		longDescription:
			'Dalam menghadapi tantangan lingkungan dan sosial, kepemimpinan yang efektif berperan penting dalam membangun kesadaran serta mendorong aksi kolektif. Seorang pemimpin diskusi bukan hanya bertindak sebagai fasilitator, tetapi juga sebagai agen perubahan yang mampu menggugah pemikiran kritis, menginspirasi solusi, dan menggerakkan komunitas menuju perubahan nyata. Dengan dibuatnya tugas Leaderless Group Discussion ini diharapkan mahasiswa baru dapat membangun kepercayaan diri, melatih kemampuan dalam hal memimpin, serta aktif terlibat dalam nyata serta di lingkungan sekitar.',
		image: '/img/placeholder.png',
		link: '/assignments/event-kampus',
		openedAt: new Date('2025-08-08')
	},
	{
	    name: "Digital Campaign",
	    description: "Membuat kampanye digital untuk meningkatkan kesadaran isu sosial",
	    longDescription: "Kekerasan seksual merupakan isu serius yang dapat terjadi di berbagai lingkungan, termasuk di lingkungan kampus. Mahasiswa baru sebagai bagian dari sivitas akademika memiliki peran penting dalam menciptakan dan menjaga ruang aman di lingkungan perkuliahan. Melalui kampanye ini, diharapkan mahasiswa baru tidak hanya memahami bentuk-bentuk kekerasan seksual, tetapi juga mampu bersikap kritis, empatik, dan berani dalam menolak serta melaporkan tindakan tersebut.",
	    image: "/img/placeholder.png",
	    openedAt: new Date("2025-08-09")
	},
	{
	    name: "Life Mapping (Add Yours)",
	    description: "Membuat peta kehidupan untuk refleksi pribadi",
	    longDescription: "Life Mapping adalah bagian dari upaya membangun refleksi diri bagi mahasiswa baru dalam mengidentifikasi perjalanan hidup mereka sejauh ini dan menggambarkan langkah-langkah yang ingin mereka ambil ke depan, terutama di lingkungan universitas. Penugasan ini tidak hanya bertujuan untuk menggali potensi pribadi, tetapi juga untuk menumbuhkan kesadaran akan tantangan, peluang, dan tujuan hidup yang akan dihadapi selama perkuliahan. Sebagai mahasiswa baru, kalian berada di titik awal dari perjalanan panjang yang akan membentuk masa depan. Dengan Life Mapping, mahasiswa baru diminta untuk merefleksikan berbagai pengalaman yang telah dilalui, mencatat setiap pembelajaran yang didapatkan, dan merencanakan masa depan sesuai dengan nilai-nilai dan citacita pribadi yang ingin dicapai di kampus",
	    image: "/img/placeholder.png",
	    openedAt: new Date("2025-08-09")
	},
	{
	    name: "SOLO (School of Leadership Organization)",
	    description: "Membuat program pelatihan kepemimpinan untuk mahasiswa baru",
	    longDescription: "School of Leadership Organization (SOLO) merupakan program sekolah kepemimpinan yang ditujukan untuk meningkatkan potensi, pemahaman serta kontribusi mahasiswa Universitas Jenderal Soedirman dalam berorganisasi. Branding SOLO bertujuan untuk meningkatkan kesadaran mahasiswa baru akan pentingnya kepemimpinan yang mampu membawa perubahan nyata, tidak hanya dalam tindakan, tetapi juga dalam membangun hubungan yang sehat di dalam tim. Mahasiswa diajak untuk mengenal kepemimpinan yang berpijak pada empati, visi ke depan, serta kemampuan menginspirasi dan memotivasi orang lain. Dengan diadakannya penugasan branding SOLO yang akan dipublikasikan melalui instagram akan menjadi salah satu alternatif untuk memberi gambaran terkait gaya kepemimpinan kepada mahasiswa baru di era society 5.0.",
	    image: "/img/placeholder.png",
	    openedAt: new Date("2025-08-09")
	},
	{
	    name: "Twibbon",
	    description: "Membuat twibbon untuk merayakan menjelangnya hari puncak S3",
	    longDescription: "Penggunaan twibbon sebagai media perkenalan merupakan bentuk aktualisasi identitas mahasiswa baru yang inklusif dan kreatif. Melalui media visual ini, mahasiswa dapat menunjukkan kebanggaan sebagai bagian dari sivitas akademika sekaligus mempererat rasa kebersamaan antar mahasiswa baru. Penugasan ini juga sejalan dengan semangat digitalisasi komunikasi yang efektif dan representatif di era saat ini.",
	    image: "/img/placeholder.png",
	    openedAt: new Date("2025-08-09")
	},
];
