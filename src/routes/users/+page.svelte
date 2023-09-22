<script lang="ts">
	import { Column, Grid, Row, ToastNotification } from 'carbon-components-svelte';
	import type { PageData } from './$types';
	import { SkeletonText } from 'carbon-components-svelte';

	export let data: PageData;
</script>

<Grid narrow>
	<Row padding>
		<Column>Username</Column>
		<Column>Email</Column>
	</Row>

	{#await data.data}
		<SkeletonText />
		<SkeletonText />
		<SkeletonText />
		<SkeletonText />
	{:then users}
		{#each users as user}
			<Row padding>
				<Column>{user.username}</Column>
				<Column>{user.email}</Column>
			</Row>
		{/each}
	{:catch}
		<ToastNotification
			lowContrast
			kind="error"
			title="Error"
			subtitle="A connection server error occurred."
			caption={new Date().toLocaleString()}
		/>
	{/await}
</Grid>
