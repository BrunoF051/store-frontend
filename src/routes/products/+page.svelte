<script lang="ts">
	import type { PageData } from './$types';
	import { Tile } from 'carbon-components-svelte';
	import { ImageLoader } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { SkeletonPlaceholder } from 'carbon-components-svelte';
	import { ToastNotification } from 'carbon-components-svelte';

	export let data: PageData;

	const skeletonTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<Grid fullWidth>
	<Row>
		{#await data.data}
			{#each skeletonTiles as tile}
				<Column sm={3.5} md={4} lg={5}>
					<SkeletonPlaceholder style="height: 4rem; width: 12rem;" />
				</Column>
			{/each}
		{:then products}
			{#each products as product}
				<Column sm={3.5} md={4} lg={5}>
					<Tile style="border-radius: 3%; margin-top: 4%;">
						<h1>{product.title}</h1>
						<ImageLoader
							src={product.thumbnail}
							alt={product.description}
							ratio="1x1"
							style="border-radius: 3%; align-self: unset; object-fit: contain; max-height: 100%;"
						/>
						<p style="margin: 3%;">{product.description}</p>
						<Button style="border-radius: 5%;">$ {product.price}</Button>
					</Tile>
				</Column>
			{/each}
		{:catch error}
			<ToastNotification
				lowContrast
				kind="error"
				title="Error"
				subtitle="A connection server error occurred."
				caption={new Date().toLocaleString()}
			/>
		{/await}
	</Row>
</Grid>
