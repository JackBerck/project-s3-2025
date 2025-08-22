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
		logo: '/img/sponsorships/pnm.webp',
		size: 'xl'
	},
	{
		name: "Bank Indonesia",
		logo: '/img/sponsorships/bi.webp',
		size: 'xl'
	},
	{
		name: "QRIS",
		logo: '/img/sponsorships/qris.webp',
		size: 'xl'
	},
	{
		name: "Pekan QRIS",
		logo: '/img/sponsorships/pekan-qris.webp',
		size: 'xl'
	},
	{
		name: "PeKA",
		logo: '/img/sponsorships/peka.webp',
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
		logo: '/img/sponsorships/kahf.webp',
		size: 'md'
	},
	{
		name: "Emina",
		logo: '/img/sponsorships/emina.webp',
		size: 'md'
	},
	{
		name: "Wardah",
		logo: '/img/sponsorships/wardah.webp',
		size: 'md'
	},
	{
		name: "Java Heritage",
		logo: '/img/sponsorships/jahe.webp',
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
		logo: '/img/sponsorships/serasa.webp',
		size: 'sm'
	},
	{
		name: "almeera",
		logo: '/img/sponsorships/almeera.webp',
		size: 'sm'
	},
	{
		name: "Rantaka",
		logo: '/img/sponsorships/rantaka.webp',
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
		logo: '/img/sponsorships/oronaminc.webp',
		size: 'xs'
	},
	{
		name: 'Inul',
		logo: '/img/sponsorships/inul.webp',
		size: 'xs'
	},
	{
		name: 'Cinemoon',
		logo: '/img/sponsorships/cinemoon.webp',
		size: 'xs'
	},
	{
		name: 'Panglima Besar',
		logo: '/img/sponsorships/pb.webp',
		size: 'xs'
	},
	{
		name: "Pocari Sweat",
		logo: '/img/sponsorships/pocari.webp',
		size: 'xs'
	},
	{
		name: "thera",
		logo: '/img/sponsorships/thera.webp',
		size: 'xs'
	},
	{
		name: "KOI5 Photography",
		logo: '/img/sponsorships/koi5.webp',
		size: 'xs'
	},
	{
		name: "Fourteen Adventure",
		logo: '/img/sponsorships/fourteen.webp',
		size: 'xs'
	},
	{
		name: "Tendaku",
		logo: '/img/sponsorships/tendaku.webp',
		size: 'xs'
	},
	{
		name: "Guswo",
		logo: '/img/sponsorships/guswo.webp',
		size: 'xs'
	},
	{
		name: "AiRos",
		logo: '/img/sponsorships/airos.webp',
		size: 'xs'
	},
	{
		name: "Teras",
		logo: '/img/sponsorships/teras.webp',
		size: 'xs'
	},
	{
		name: "Dpiros",
		logo: '/img/sponsorships/dpiros.webp',
		size: 'xs'
	},
	{
		name: "Semasa",
		logo: '/img/sponsorships/semasa.webp',
		size: 'xs'
	}
];

export default sponsorships;
