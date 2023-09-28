import { writable } from 'svelte/store';

const loggin = () => {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		in: () => {
			set(true);
		},
		out: () => {
			set(false);
		}
	};
};

export const logged = loggin;
