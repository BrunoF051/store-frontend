import type { User } from '../../interfaces/interfaces';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const fetchUrl = 'https://dummyjson.com/users';

	const res = await fetch(fetchUrl);

	const { users } = await res.json();
	const rows: User[] = users.map((user: User) => {
		return {
			id: user.id,
			name: user.firstName + user.lastName,
			email: user.email,
			gender: user.gender,
			address: user.address.address,
			city: user.address.city
		};
	});
	return { users, rows };
}) satisfies PageServerLoad;
