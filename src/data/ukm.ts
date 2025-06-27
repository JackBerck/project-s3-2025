// src/data/ukm.ts
const ukm: {
	name: string;
	description: string;
	image: string;
	href: string;
	slug: string; // Tambahkan slug
	longDescription?: string; // Deskripsi panjang untuk detail
	events?: {
		title: string;
		description: string;
	}[];
	gallery?: {
		title: string;
		image: string;
	}[];
	contact?: {
		name: string;
		link: string;
	};
}[] = [
	{
		name: 'UKM Kesenian',
		slug: 'kesenian',
		description:
			'Unit Kegiatan Mahasiswa Kesenian (UKM Kesenian) adalah wadah bagi mahasiswa yang memiliki minat dan bakat di bidang seni.',
		longDescription:
			'Unit Kegiatan Mahasiswa Kesenian (UKM Kesenian) adalah organisasi mahasiswa yang bergerak di bidang seni dan budaya. UKM ini menjadi wadah bagi mahasiswa yang memiliki minat dan bakat di berbagai cabang seni seperti tari, musik, teater, dan seni rupa. Melalui kegiatan-kegiatan yang rutin dilaksanakan, anggota UKM Kesenian dapat mengembangkan kreativitas, memperdalam pengetahuan seni, dan berkontribusi dalam melestarikan budaya Indonesia.',
		image: '/img/ukm/kesenian.jpg',
		href: '/ukm/kesenian',
		events: [
			{
				title: 'Festival Seni Tahunan',
				description: 'Pentas seni tahunan yang menampilkan berbagai karya seni dari anggota UKM'
			},
			{
				title: 'Workshop Seni Tradisional',
				description: 'Pelatihan seni tradisional Indonesia untuk mahasiswa'
			}
		],
		gallery: [
			{
				title: 'Pentas Seni 2024',
				image: '/img/gallery/kesenian-1.jpg'
			},
			{
				title: 'Workshop Batik',
				image: '/img/gallery/kesenian-2.jpg'
			}
		],
		contact: {
			name: 'Instagram @ukm_kesenian_unsoed',
			link: 'https://instagram.com/ukm_kesenian_unsoed'
		}
	},
	{
		name: 'UKM Olahraga',
		slug: 'olahraga',
		description:
			'Unit Kegiatan Mahasiswa Olahraga adalah wadah untuk mengembangkan bakat dan minat mahasiswa dalam bidang olahraga.',
		longDescription:
			'Unit Kegiatan Mahasiswa Olahraga merupakan organisasi yang menaungi berbagai cabang olahraga di kampus. UKM ini bertujuan untuk mengembangkan prestasi olahraga mahasiswa, menjaga kebugaran, dan membangun karakter sportif. Dengan berbagai cabang olahraga yang tersedia, mahasiswa dapat memilih sesuai minat dan bakat mereka.',
		image: '/img/ukm/olahraga.jpg',
		href: '/ukm/olahraga',
		events: [
			{
				title: 'Turnamen Futsal Antar Fakultas',
				description: 'Kompetisi futsal rutin antar fakultas di lingkungan kampus'
			},
			{
				title: 'Senam Pagi Bersama',
				description: 'Kegiatan senam pagi rutin untuk menjaga kebugaran'
			}
		],
		gallery: [
			{
				title: 'Turnamen Futsal 2024',
				image: '/img/gallery/olahraga-1.jpg'
			},
			{
				title: 'Senam Pagi',
				image: '/img/gallery/olahraga-2.jpg'
			}
		],
		contact: {
			name: 'Instagram @ukm_olahraga_unsoed',
			link: 'https://instagram.com/ukm_olahraga_unsoed'
		}
	},
	{
		name: 'UKM Pecinta Alam',
		slug: 'pecinta-alam',
		description:
			'Unit Kegiatan Mahasiswa Pecinta Alam adalah wadah bagi mahasiswa yang memiliki minat terhadap alam dan lingkungan.',
		longDescription:
			'Unit Kegiatan Mahasiswa Pecinta Alam (UKM PA) adalah organisasi yang bergerak dalam bidang lingkungan hidup dan petualangan alam. UKM ini mengembangkan karakter mahasiswa melalui kegiatan-kegiatan outdoor seperti pendakian, camping, dan penelusuran gua. Selain itu, UKM PA juga aktif dalam kegiatan konservasi lingkungan dan edukasi kepada masyarakat tentang pentingnya menjaga kelestarian alam.',
		image: '/img/ukm/pecinta-alam.jpg',
		href: '/ukm/pecinta-alam',
		events: [
			{
				title: 'Ekspedisi Gunung Slamet',
				description: 'Pendakian bersama ke puncak tertinggi di Jawa Tengah'
			},
			{
				title: 'Aksi Bersih Lingkungan',
				description: 'Kegiatan pembersihan lingkungan dan edukasi konservasi'
			}
		],
		gallery: [
			{
				title: 'Pendakian Gunung Slamet',
				image: '/img/gallery/pa-1.jpg'
			},
			{
				title: 'Camping di Hutan Pinus',
				image: '/img/gallery/pa-2.jpg'
			}
		],
		contact: {
			name: 'Instagram @ukm_pa_unsoed',
			link: 'https://instagram.com/ukm_pa_unsoed'
		}
	},
	{
		name: 'UKM Kewirausahaan',
		slug: 'kewirausahaan',
		description:
			'Unit Kegiatan Mahasiswa Kewirausahaan adalah wadah untuk mengembangkan jiwa bisnis dan kewirausahaan mahasiswa.',
		longDescription:
			'Unit Kegiatan Mahasiswa Kewirausahaan merupakan organisasi yang fokus pada pengembangan soft skill dan hard skill mahasiswa dalam bidang bisnis dan kewirausahaan. UKM ini menyediakan platform bagi mahasiswa untuk belajar berbisnis, mengembangkan ide kreatif, dan membangun jaringan dengan para entrepreneur. Melalui berbagai program pelatihan dan workshop, anggota dapat mempersiapkan diri menjadi wirausaha muda yang sukses.',
		image: '/img/ukm/kewirausahaan.jpg',
		href: '/ukm/kewirausahaan',
		events: [
			{
				title: 'Seminar Bisnis Digital',
				description: 'Workshop tentang strategi bisnis online dan digital marketing'
			},
			{
				title: 'Kompetisi Business Plan',
				description: 'Lomba rencana bisnis tingkat mahasiswa se-universitas'
			}
		],
		gallery: [
			{
				title: 'Seminar Entrepreneur 2024',
				image: '/img/gallery/wirausaha-1.jpg'
			},
			{
				title: 'Expo Produk Mahasiswa',
				image: '/img/gallery/wirausaha-2.jpg'
			}
		],
		contact: {
			name: 'Instagram @ukm_wirausaha_unsoed',
			link: 'https://instagram.com/ukm_wirausaha_unsoed'
		}
	},
	{
		name: 'UKM Fotografi',
		slug: 'fotografi',
		description:
			'Unit Kegiatan Mahasiswa Fotografi adalah tempat berkumpulnya mahasiswa yang memiliki passion dalam dunia fotografi.',
		longDescription:
			'Unit Kegiatan Mahasiswa Fotografi adalah organisasi yang menaungi mahasiswa yang memiliki minat dalam seni fotografi dan videografi. UKM ini memberikan wadah untuk mengembangkan teknik fotografi, mempelajari teknologi terbaru, dan berkarya dalam berbagai genre fotografi. Anggota juga dilatih untuk menjadi dokumentaris handal dalam berbagai kegiatan kampus dan kemasyarakatan.',
		image: '/img/ukm/fotografi.jpg',
		href: '/ukm/fotografi',
		events: [
			{
				title: 'Photo Walk Kota Lama',
				description: 'Kegiatan hunting foto bersama di kawasan bersejarah'
			},
			{
				title: 'Workshop Editing Photo',
				description: 'Pelatihan teknik editing foto menggunakan software profesional'
			}
		],
		gallery: [
			{
				title: 'Pameran Foto 2024',
				image: '/img/gallery/foto-1.jpg'
			},
			{
				title: 'Photo Walk Session',
				image: '/img/gallery/foto-2.jpg'
			}
		],
		contact: {
			name: 'Instagram @ukm_foto_unsoed',
			link: 'https://instagram.com/ukm_foto_unsoed'
		}
	},
	{
		name: 'UKM Robotika',
		slug: 'robotika',
		description:
			'Unit Kegiatan Mahasiswa Robotika adalah wadah pengembangan teknologi robotika dan kecerdasan buatan.',
		longDescription:
			'Unit Kegiatan Mahasiswa Robotika merupakan organisasi yang bergerak dalam bidang teknologi robotika, programming, dan artificial intelligence. UKM ini menjadi tempat mahasiswa mengembangkan kemampuan teknis dalam membuat robot, mempelajari teknologi terdepan, dan berpartisipasi dalam kompetisi robotika tingkat nasional maupun internasional. Anggota dilatih untuk menguasai berbagai aspek robotika mulai dari hardware hingga software.',
		image: '/img/ukm/robotika.jpg',
		href: '/ukm/robotika',
		events: [
			{
				title: 'Kontes Robot Indonesia',
				description: 'Partisipasi dalam kompetisi robotika tingkat nasional'
			},
			{
				title: 'Workshop Arduino & IoT',
				description: 'Pelatihan dasar programming mikrokontroler dan Internet of Things'
			}
		],
		gallery: [
			{
				title: 'Robot Competition 2024',
				image: '/img/gallery/robotika-1.jpg'
			},
			{
				title: 'Workshop IoT',
				image: '/img/gallery/robotika-2.jpg'
			}
		],
		contact: {
			name: 'Instagram @ukm_robotika_unsoed',
			link: 'https://instagram.com/ukm_robotika_unsoed'
		}
	}
];

export default ukm;
