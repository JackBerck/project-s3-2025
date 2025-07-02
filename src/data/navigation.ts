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
		href: '/',
		type: 'link'
	},
	{
		title: 'FAQ',
		href: '/',
		type: 'link'
	},
	{
		title: 'Committee',
		href: '/committee',
		type: 'link'
	},
	{
		title: 'Contact Us',
		href: '/',
		type: 'link'
	}
];

export default navigation;
