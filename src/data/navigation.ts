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
		title: 'Explore Unsoed',
		type: 'dropdown',
		key: 'explore-unsoed',
		submenu: [
			{ title: 'Profile Unsoed', href: '/profile-unsoed' },
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
