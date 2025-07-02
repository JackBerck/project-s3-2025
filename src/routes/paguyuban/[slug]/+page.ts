import { error } from '@sveltejs/kit';
import paguyuban from '../../../data/paguyuban';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const paguyubanItem = paguyuban.find((item) => item.slug === params.slug);

	if (!paguyubanItem) {
		throw error(404, 'Paguyuban tidak ditemukan');
	}

	return {
		paguyuban: paguyubanItem
	};
};
