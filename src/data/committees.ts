const committees: {
	name: string;
	memberName: string;
	image: string;
	imageBackground: string;
	description: string;
	staff?: string[];
}[] = [
	{
		name: 'Project Officer',
		memberName: 'Muhammad Zaki Dzulfikar',
		image: '/img/committee/members/project-officer.webp',
		imageBackground: '/img/committee/backgrounds/committee-background-1.webp',
		description:
			'Selamat datang rekan-rekan mahasiswa yang bersemangat! Sebagai ketua panitia, saya merasa terhormat dapat berdiri di hadapan kalian semua pada hari yang bersejarah ini. Kegiatan yang kita laksanakan hari ini bukan hanya sekedar acara, tetapi juga wujud nyata dari semangat kolaborasi dan inovasi.'
	},
	{
		name: 'Secretary',
		memberName: 'Sinta Ayu',
		image: '/img/committee/members/secretary.webp',
		imageBackground: '/img/committee/backgrounds/committee-background-2.webp',
		description:
			'Sebagai sekretaris, saya bertugas untuk mengatur segala kegiatan panitia dan memastikan komunikasi berjalan lancar antar divisi untuk kesuksesan acara ini.',
		staff: ['Bagus Indrawan', 'Megita Caroline', 'Ageng Praba']
	},
	{
		name: 'Treasurer',
		memberName: 'Rizky Fauzan',
		image: '/img/committee/members/treasurer.webp',
		imageBackground: '/img/committee/backgrounds/committee-background-3.webp',
		description:
			'Sebagai bendahara, saya bertanggung jawab mengatur keuangan panitia dengan transparan dan akuntabel untuk memastikan setiap dana terpakai dengan efektif.',
		staff: ['Diky Hamzah', 'Fathur Rahman', 'Rizky Maulana']
	},
	{
		name: 'Design, Decoration & Documentation',
		memberName: 'Dimas Prasetyo',
		image: '/img/committee/members/documentation.webp',
		imageBackground: '/img/committee/backgrounds/committee-background-4.webp',
		description:
			'Tim kreatif kami bertugas menciptakan visual yang menarik dan mengabadikan setiap momen berharga dalam acara ini untuk kenangan yang tak terlupakan.',
		staff: [
			'Maya Putri',
			'Arief Budiman',
			'Layla Safitri',
			'Budi Santoso',
			'Citra Dewi',
			'Eko Prasetya',
			'Fitri Handayani',
			'Galih Nugroho',
			'Layla Safitri',
			'Budi Santoso',
			'Citra Dewi',
			'Eko Prasetya',
			'Fitri Handayani',
			'Galih Nugroho',
			'Layla Safitri',
			'Budi Santoso',
			'Citra Dewi',
			'Eko Prasetya',
			'Fitri Handayani',
			'Galih Nugroho',
			'Layla Safitri',
			'Budi Santoso',
			'Citra Dewi',
			'Eko Prasetya',
			'Fitri Handayani',
			'Galih Nugroho'
		]
	},
	{
		name: 'Publications & Information Technology',
		memberName: 'Rifka Diah',
		image: '/img/committee/members/publications.webp',
		imageBackground: '/img/committee/backgrounds/committee-background-5.webp',
		description:
			'Sebagai divisi publikasi dan IT, kami bertanggung jawab menyebarkan informasi acara dan mengelola sistem teknologi untuk mendukung kesuksesan acara.',
		staff: ['Ahmad Fadhil', 'Sari Wulandari']
	}
];

export default committees;
