// src/data/paguyuban.ts
const paguyuban: {
    name: string;
    description: string;
    image: string;
    href: string;
    slug: string; // Tambahkan slug
    longDescription?: string; // Deskripsi panjang untuk detail
    events: {
        title: string;
        description: string;
    }[];
    gallery: {
        title: string;
        image: string;
    }[];
    contact: {
        name: string;
        link: string;
    };
}[] = [
    {
        name: 'Paguyuban Jawa Tengah',
        slug: 'jawa-tengah',
        description:
            'Paguyuban mahasiswa asal Jawa Tengah yang menjadi wadah silaturahmi dan pelestarian budaya Jawa Tengah.',
        longDescription:
            'Paguyuban Jawa Tengah adalah organisasi kemahasiswaan yang menghimpun mahasiswa yang berasal dari berbagai daerah di Jawa Tengah. Paguyuban ini bertujuan untuk mempererat tali silaturahmi antar mahasiswa, melestarikan budaya dan tradisi Jawa Tengah, serta memberikan dukungan sosial bagi anggotanya. Melalui berbagai kegiatan budaya dan sosial, paguyuban ini menjadi rumah kedua bagi mahasiswa perantau.',
        image: '/img/paguyuban/jawa-tengah.jpg',
        href: '/paguyuban/jawa-tengah',
        events: [
            {
                title: 'Festival Budaya Jawa Tengah',
                description: 'Pentas budaya tahunan menampilkan tarian dan kesenian tradisional'
            },
            {
                title: 'Bakti Sosial Kampung Halaman',
                description: 'Kegiatan sosial untuk membantu masyarakat di daerah asal'
            }
        ],
        gallery: [
            {
                title: 'Festival Budaya 2024',
                image: '/img/placeholder.png'
            },
            {
                title: 'Perayaan Kartini',
                image: '/img/placeholder.png'
            }
        ],
        contact: {
            name: '@paguyuban_jateng',
            link: 'https://instagram.com/paguyuban_jateng'
        }
    },
    {
        name: 'Paguyuban Jawa Barat',
        slug: 'jawa-barat',
        description:
            'Wadah berkumpulnya mahasiswa asal Jawa Barat untuk melestarikan budaya Sunda dan mempererat persaudaraan.',
        longDescription:
            'Paguyuban Jawa Barat merupakan komunitas mahasiswa yang berasal dari berbagai wilayah di Jawa Barat. Organisasi ini aktif dalam melestarikan budaya Sunda, mengadakan kegiatan-kegiatan yang mempererat hubungan antar anggota, dan memberikan support system bagi mahasiswa perantau. Paguyuban ini juga sering mengadakan acara budaya dan diskusi tentang perkembangan daerah asal.',
        image: '/img/paguyuban/jawa-barat.jpg',
        href: '/paguyuban/jawa-barat',
        events: [
            {
                title: 'Gelar Seni Budaya Sunda',
                description: 'Pertunjukan seni tradisional dan modern khas Jawa Barat'
            },
            {
                title: 'Diskusi Pembangunan Jabar',
                description: 'Forum diskusi tentang pembangunan dan potensi Jawa Barat'
            }
        ],
        gallery: [
            {
                title: 'Seni Budaya Sunda 2024',
                image: '/img/gallery/jabar-1.jpg'
            },
            {
                title: 'Ngariung Bareng',
                image: '/img/gallery/jabar-2.jpg'
            }
        ],
        contact: {
            name: '@paguyuban_jabar',
            link: 'https://instagram.com/paguyuban_jabar'
        }
    },
    {
        name: 'Paguyuban Jakarta',
        slug: 'jakarta',
        description:
            'Paguyuban mahasiswa asal Jakarta dan sekitarnya yang menjadi tempat berkumpul dan berbagi pengalaman.',
        longDescription:
            'Paguyuban Jakarta adalah organisasi yang menghimpun mahasiswa yang berasal dari DKI Jakarta dan wilayah sekitarnya. Paguyuban ini menjadi wadah untuk berbagi pengalaman hidup di ibu kota, networking, dan mempertahankan identitas sebagai anak Jakarta. Dengan kegiatan yang beragam, mulai dari gathering hingga program pemberdayaan, paguyuban ini membantu anggotanya beradaptasi dengan lingkungan baru.',
        image: '/img/paguyuban/jakarta.jpg',
        href: '/paguyuban/jakarta',
        events: [
            {
                title: 'Jakarta Fair Mini',
                description: 'Pameran kuliner dan produk khas Jakarta'
            },
            {
                title: 'Gathering Anak Betawi',
                description: 'Acara kumpul bersama dan sharing session'
            }
        ],
        gallery: [
            {
                title: 'Jakarta Fair 2024',
                image: '/img/gallery/jakarta-1.jpg'
            },
            {
                title: 'Gathering Session',
                image: '/img/gallery/jakarta-2.jpg'
            }
        ],
        contact: {
            name: '@paguyuban_jakarta',
            link: 'https://instagram.com/paguyuban_jakarta'
        }
    },
    {
        name: 'Paguyuban Sumatra',
        slug: 'sumatra',
        description:
            'Paguyuban yang menghimpun mahasiswa dari berbagai daerah di Pulau Sumatra untuk melestarikan budaya Melayu.',
        longDescription:
            'Paguyuban Sumatra adalah wadah bersatu mahasiswa yang berasal dari berbagai provinsi di Pulau Sumatra. Organisasi ini berkomitmen untuk melestarikan kekayaan budaya Melayu, Batak, Minang, dan budaya lainnya dari Sumatra. Melalui kegiatan seni, budaya, dan sosial, paguyuban ini memperkuat ikatan persaudaraan dan membantu anggotanya dalam berbagai aspek kehidupan perkuliahan.',
        image: '/img/paguyuban/sumatra.jpg',
        href: '/paguyuban/sumatra',
        events: [
            {
                title: 'Festival Budaya Sumatra',
                description: 'Showcase budaya dari berbagai daerah di Sumatra'
            },
            {
                title: 'Bazar Kuliner Nusantara',
                description: 'Pameran makanan khas dari berbagai daerah Sumatra'
            }
        ],
        gallery: [
            {
                title: 'Festival Budaya 2024',
                image: '/img/gallery/sumatra-1.jpg'
            },
            {
                title: 'Tari Saman Performance',
                image: '/img/gallery/sumatra-2.jpg'
            }
        ],
        contact: {
            name: '@paguyuban_sumatra',
            link: 'https://instagram.com/paguyuban_sumatra'
        }
    },
    {
        name: 'Paguyuban Kalimantan',
        slug: 'kalimantan',
        description:
            'Paguyuban mahasiswa asal Kalimantan yang menjadi wadah pelestarian budaya Dayak dan tradisi Borneo.',
        longDescription:
            'Paguyuban Kalimantan merupakan organisasi yang menghimpun mahasiswa dari seluruh provinsi di Pulau Kalimantan. Paguyuban ini memiliki misi khusus untuk melestarikan budaya Dayak dan tradisi-tradisi unik dari Borneo. Selain kegiatan budaya, paguyuban ini juga aktif dalam isu-isu lingkungan mengingat Kalimantan sebagai paru-paru dunia. Anggota paguyuban saling mendukung dalam perkuliahan dan kehidupan sosial.',
        image: '/img/paguyuban/kalimantan.jpg',
        href: '/paguyuban/kalimantan',
        events: [
            {
                title: 'Erau Cultural Festival',
                description: 'Festival budaya Dayak dan tradisi Kalimantan'
            },
            {
                title: 'Kampanye Kelestarian Hutan',
                description: 'Kegiatan edukasi tentang pentingnya menjaga hutan Kalimantan'
            }
        ],
        gallery: [
            {
                title: 'Erau Festival 2024',
                image: '/img/gallery/kalimantan-1.jpg'
            },
            {
                title: 'Tari Dayak Performance',
                image: '/img/gallery/kalimantan-2.jpg'
            }
        ],
        contact: {
            name: '@paguyuban_kalimantan',
            link: 'https://instagram.com/paguyuban_kalimantan'
        }
    },
    {
        name: 'Paguyuban Indonesia Timur',
        slug: 'indonesia-timur',
        description:
            'Paguyuban yang menghimpun mahasiswa dari kawasan Indonesia Timur untuk melestarikan budaya dan tradisi daerah.',
        longDescription:
            'Paguyuban Indonesia Timur adalah organisasi yang menghimpun mahasiswa dari berbagai daerah di kawasan Indonesia Timur seperti Sulawesi, Maluku, Papua, dan Nusa Tenggara. Paguyuban ini berperan penting dalam melestarikan kekayaan budaya dan tradisi dari wilayah timur Indonesia. Dengan keberagaman budaya yang luar biasa, paguyuban ini menjadi miniatur Indonesia dengan segala keunikan dan kearifan lokalnya.',
        image: '/img/paguyuban/indonesia-timur.jpg',
        href: '/paguyuban/indonesia-timur',
        events: [
            {
                title: 'Pesta Budaya Timur',
                description: 'Perayaan budaya dari berbagai daerah Indonesia Timur'
            },
            {
                title: 'Dialog Pembangunan Timur',
                description: 'Diskusi tentang pembangunan dan potensi Indonesia Timur'
            }
        ],
        gallery: [
            {
                title: 'Pesta Budaya 2024',
                image: '/img/gallery/timur-1.jpg'
            },
            {
                title: 'Tari Tradisional Papua',
                image: '/img/gallery/timur-2.jpg'
            }
        ],
        contact: {
            name: '@paguyuban_timur',
            link: 'https://instagram.com/paguyuban_timur'
        }
    }
];

export default paguyuban;
