import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const fetchUrl = 'https://dummyjson.com/products';

	// const fetchUrl = 'https://go-fiber-blond.vercel.app/api/product';

	const res = await fetch(fetchUrl);

	const { products } = await res.json();

	return { products };
}) satisfies PageServerLoad;
