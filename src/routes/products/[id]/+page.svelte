<script lang="ts">
	import type { PageData } from './$types';
	import { Button, ImageLoader, Tile } from 'carbon-components-svelte';

	export let data: PageData;
	const { product } = data;
</script>

<Button href="/products">Back</Button>
<Tile style="align-content: baseline; max-height: min-content;">
	<h3>{product.title}</h3>
	<ImageLoader
		src={product.thumbnail}
		alt={product.description}
		ratio="1x1"
		style="border-radius: 3%; align-self: unset; max-height: 50rem; max-width: 50rem;"
	/>
	<p>{product.description}</p>
</Tile>
