const barangBawaan: {
	name: string;
	desc: string;
	image: string;
	required: boolean;
}[] = [
	{
		name: 'Almamater',
		desc: 'Seragam almamater untuk kegiatan resmi',
		image: '/img/placeholder.png',
		required: true
	},
	{
		name: 'Topi Unsoed',
		desc: 'Topi resmi Universitas Soedirman',
		image: '/img/placeholder.png',
		required: true
	},
	{
		name: 'Backpack',
		desc: 'Tas ransel untuk membawa perlengkapan',
		image: '/img/placeholder.png',
		required: true
	},
	{
		name: 'Alat Sholat',
		desc: 'Perlengkapan ibadah sholat',
		image: '/img/placeholder.png',
		required: true
	},
	{
		name: 'Obat Obatan pribadi',
		desc: 'Obat-obatan untuk kebutuhan kesehatan pribadi',
		image: '/img/placeholder.png',
		required: true
	},
	{
		name: 'Tumbler',
		desc: 'Botol minum untuk tetap terhidrasi',
		image: '/img/placeholder.png',
		required: true
	},
	{
		name: 'Pembalut + plastik',
		desc: 'Pembalut dan plastik untuk kebutuhan khusus',
		image: '/img/placeholder.png',
		required: false
	}
];

export default barangBawaan;
