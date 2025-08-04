const barangBawaan: {
	name: string;
	desc: string;
	image: string;
	required: boolean;
}[] = [
	{
		name: 'ID Card',
		desc: 'Kartu identitas resmi untuk kegiatan',
		image: '/img/barang-bawaan/id-card.png',
		required: true
	},
	{
		name: 'Alat Tulis',
		desc: 'Perlengkapan alat tulis untuk kegiatan',
		image: '/img/barang-bawaan/alat-tulis.png',
		required: true
	},
	{
		name: 'Tumbler',
		desc: 'Botol minum untuk tetap terhidrasi',
		image: '/img/barang-bawaan/tumbler.png',
		required: true
	},
	{
		name: 'Alat Sholat',
		desc: 'Perlengkapan ibadah sholat',
		image: '/img/barang-bawaan/alat-sholat.png',
		required: false
	},
	{
		name: 'Obat-Obatan pribadi',
		desc: 'Obat-obatan untuk kebutuhan kesehatan pribadi',
		image: '/img/barang-bawaan/obat-pribadi.png',
		required: false
	},
	{
		name: 'Power Bank',
		desc: 'Power bank untuk mengisi daya perangkat elektronik',
		image: '/img/barang-bawaan/power-bank.png',
		required: false
	},
	{
		name: 'Sandal',
		desc: 'Sandal untuk kenyamanan saat beristirahat',
		image: '/img/barang-bawaan/sandal.png',
		required: false
	}
];

export default barangBawaan;
