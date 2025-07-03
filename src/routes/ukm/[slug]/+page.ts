// src/routes/ukm/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import ukm from '../../../data/ukm';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const ukmItem = ukm.find((item) => item.slug === params.slug);

	if (!ukmItem) {
		throw error(404, 'UKM tidak ditemukan');
	}

	return {
		ukm: ukmItem
	};
};

export const entries = () => {
	return ukm.map((item) => ({
		slug: item.slug
	}));
};
