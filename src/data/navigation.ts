const navigation: {
	title: string;
	href: string;
	type: string;
	key?: string;
	submenu?: {
		title: string;
		href: string;
	}[];
}[] = [
	{
		title: 'Home',
		href: '/',
		type: 'link'
	},
	{
		title: 'Explore Unsoed',
		href: '/explore-unsoed',
		type: 'dropdown',
		submenu: [
			{ title: 'Explore Unsoed', href: '/explore-unsoed' },
			{ title: 'UKM', href: '/ukm' },
			{ title: 'Paguyuban', href: '/paguyuban' }
		]
	},
	{
		title: 'Gensoed Guide',
		href: '/gensoed-guide',
		type: 'link'
	},
	{
		title: 'FAQ',
		href: '/faq',
		type: 'link'
	},
	{
		title: 'Committee',
		href: '/committee',
		type: 'link'
	},
	{
		title: 'Contact Us',
		href: '/contact-us',
		type: 'link'
	}
];

export default navigation;
