import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('https://dummyjson.com/products');

	const { products } = await res.json();

	return { products };
}) satisfies PageServerLoad;
