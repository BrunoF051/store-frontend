import type { PageServerLoad } from './$types';

export const load = (async () => {
	const fetchUrl = 'https://go-fiber-blond.vercel.app/api/user';

	const res = await fetch(fetchUrl);

	const { data } = await res.json();
	return { data };
}) satisfies PageServerLoad;
