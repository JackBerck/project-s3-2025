const navigation: {
	title: string;
	href?: string;
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
		title: 'About Unsoed',
		type: 'dropdown',
		key: 'about-unsoed',
		submenu: [
			{ title: 'Explore Unsoed', href: '/explore-unsoed' },
			{ title: 'UKM', href: '/ukm' },
			{ title: 'Paguyuban', href: '/paguyuban' }
		]
	},
	{
		title: 'Gensoed Guide',
		type: 'dropdown',
		key: 'gensoed-guide',	
		submenu: [
			{ title: 'Assignment', href: '/assignment' },
			{ title: 'Starterpack', href: '/starterpack' }
		]
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
