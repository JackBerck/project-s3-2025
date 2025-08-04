const barangBawaan: {
	name: string;
	desc: string;
	image: string;
	required: boolean;
}[] = [
	{
		name: 'ID Card',
		desc: 'Kartu identitas resmi untuk kegiatan',
		image: '/img/barang-bawaan/id-card.webp',
		required: true
	},
	{
		name: 'Alat Tulis',
		desc: 'Perlengkapan alat tulis untuk kegiatan',
		image: '/img/barang-bawaan/alat-tulis.webp',
		required: true
	},
	{
		name: 'Tumbler',
		desc: 'Botol minum untuk tetap terhidrasi',
		image: '/img/barang-bawaan/tumbler.webp',
		required: true
	},
	{
		name: 'Alat Sholat',
		desc: 'Perlengkapan ibadah sholat',
		image: '/img/barang-bawaan/alat-sholat.webp',
		required: false
	},
	{
		name: 'Obat-Obatan pribadi',
		desc: 'Obat-obatan untuk kebutuhan kesehatan pribadi',
		image: '/img/barang-bawaan/obat-pribadi.webp',
		required: false
	},
	{
		name: 'Power Bank',
		desc: 'Power bank untuk mengisi daya perangkat elektronik',
		image: '/img/barang-bawaan/power-bank.webp',
		required: false
	},
	{
		name: 'Sandal',
		desc: 'Sandal untuk kenyamanan saat beristirahat',
		image: '/img/barang-bawaan/sandal.webp',
		required: false
	}
];

export default barangBawaan;
