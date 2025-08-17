const sponsorships: {
	name: string;
	logo: string;
	size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}[] = [
	// xl
	{
		name: 'Bank Mandiri',
		logo: '/img/sponsorships/mandiri.webp',
		size: 'xl'
	},
	{
		name: 'Gojek',
		logo: '/img/sponsorships/gojek.webp',
		size: 'xl'
	},
	{
		name: "PNM",
		logo: '/img/sponsorships/pnm.png',
		size: 'xl'
	},
	{
		name: "Bank Indonesia",
		logo: '/img/sponsorships/bi.png',
		size: 'xl'
	},
	{
		name: "QRIS",
		logo: '/img/sponsorships/qris.png',
		size: 'xl'
	},
	{
		name: "Pekan QRIS",
		logo: '/img/sponsorships/pekan-qris.png',
		size: 'xl'
	},
	{
		name: "PeKA",
		logo: '/img/sponsorships/peka.png',
		size: 'xl'
	},
	// lg
	// (tidak ada data dengan size 'lg')
	// md
	{
		name: 'Pringsewu',
		logo: '/img/sponsorships/pringsewu.webp',
		size: 'md'
	},
	{
		name: 'Madu Nusantara',
		logo: '/img/sponsorships/madu-nusantara.webp',
		size: 'md'
	},
	{
		name: 'Bocah Nyanteng',
		logo: '/img/sponsorships/bocah-nyanteng.webp',
		size: 'md'
	},
	{
		name: 'Arasta Alpha',
		logo: '/img/sponsorships/arasta-alpha.webp',
		size: 'md'
	},
	{
		name: 'KAI',
		logo: '/img/sponsorships/kai.webp',
		size: 'md'
	},
	{
		name: "Kahf",
		logo: '/img/sponsorships/kahf.png',
		size: 'md'
	},
	{
		name: "Emina",
		logo: '/img/sponsorships/emina.png',
		size: 'md'
	},
	{
		name: "Wardah",
		logo: '/img/sponsorships/wardah.png',
		size: 'md'
	},
	{
		name: "Java Heritage",
		logo: '/img/sponsorships/jahe.png',
		size: 'md'
	},
	// sm
	{
		name: 'Sari Roti',
		logo: '/img/sponsorships/sari-roti.webp',
		size: 'sm'
	},
	{
		name: 'Bank BTN',
		logo: '/img/sponsorships/btn.webp',
		size: 'sm'
	},
	{
		name: "Serasa",
		logo: '/img/sponsorships/serasa.jpg',
		size: 'sm'
	},
	{
		name: "almeera",
		logo: '/img/sponsorships/almeera.jpg',
		size: 'sm'
	},
	{
		name: "Rantaka",
		logo: '/img/sponsorships/rantaka.png',
		size: 'sm'
	},
	// xs
	{
		name: 'Bank BNI',
		logo: '/img/sponsorships/bni.webp',
		size: 'xs'
	},
	{
		name: 'ZIFT Indonesia',
		logo: '/img/sponsorships/zift.webp',
		size: 'xs'
	},
	{
		name: 'Hydro Coco',
		logo: '/img/sponsorships/hydro-coco.webp',
		size: 'xs'
	},
	{
		name: 'Artivity',
		logo: '/img/sponsorships/artivity.webp',
		size: 'xs'
	},
	{
		name: 'Hangout',
		logo: '/img/sponsorships/hangout.webp',
		size: 'xs'
	},
	{
		name: 'Bento Kopi',
		logo: '/img/sponsorships/bento-kopi.webp',
		size: 'xs'
	},
	{
		name: 'Colony',
		logo: '/img/sponsorships/colony.webp',
		size: 'xs'
	},
	{
		name: 'Sekala',
		logo: '/img/sponsorships/sekala.webp',
		size: 'xs'
	},
	{
		name: 'Grey',
		logo: '/img/sponsorships/grey.webp',
		size: 'xs'
	},
	{
		name: 'Taman Coffee',
		logo: '/img/sponsorships/taman-coffee.webp',
		size: 'xs'
	},
	{
		name: 'Teras Kita',
		logo: '/img/sponsorships/teras-kita.webp',
		size: 'xs'
	},
	{
		name: 'Ora Umum',
		logo: '/img/sponsorships/ora-umum.webp',
		size: 'xs'
	},
	{
		name: 'Advo Cafe',
		logo: '/img/sponsorships/advo-cafe.webp',
		size: 'xs'
	},
	{
		name: 'Meatboss',
		logo: '/img/sponsorships/meatboss.webp',
		size: 'xs'
	},
	{
		name: 'Oronamin C',
		logo: '/img/sponsorships/oronaminc.png',
		size: 'xs'
	},
	{
		name: 'Inul',
		logo: '/img/sponsorships/inul.png',
		size: 'xs'
	},
	{
		name: 'Cinemoon',
		logo: '/img/sponsorships/cinemoon.png',
		size: 'xs'
	},
	{
		name: 'Panglima Besar',
		logo: '/img/sponsorships/pb.png',
		size: 'xs'
	},
	{
		name: "Pocari Sweat",
		logo: '/img/sponsorships/pocari.png',
		size: 'xs'
	},
	{
		name: "thera",
		logo: '/img/sponsorships/thera.jpg',
		size: 'xs'
	},
	{
		name: "KOI5 Photography",
		logo: '/img/sponsorships/koi5.jpg',
		size: 'xs'
	},
	{
		name: "Fourteen Adventure",
		logo: '/img/sponsorships/fourteen.jpg',
		size: 'xs'
	},
	{
		name: "Tendaku",
		logo: '/img/sponsorships/tendaku.png',
		size: 'xs'
	},
	{
		name: "Guswo",
		logo: '/img/sponsorships/guswo.jpg',
		size: 'xs'
	},
	{
		name: "AiRos",
		logo: '/img/sponsorships/airos.png',
		size: 'xs'
	},
	{
		name: "Teras",
		logo: '/img/sponsorships/teras.jpg',
		size: 'xs'
	},
	{
		name: "Dpiros",
		logo: '/img/sponsorships/dpiros.jpg',
		size: 'xs'
	},
	{
		name: "Semasa",
		logo: '/img/sponsorships/semasa.jpg',
		size: 'xs'
	}
];

export default sponsorships;
