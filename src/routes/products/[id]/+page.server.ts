import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://dummyjson.com/products/${params.id}`);

	const product = await res.json();

	return { product };
}) satisfies PageServerLoad;
