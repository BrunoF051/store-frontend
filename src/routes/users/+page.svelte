<script lang="ts">
	import {
		Button,
		DataTable,
		Pagination,
		Toolbar,
		ToolbarContent,
		ToolbarBatchActions,
		OverflowMenu,
		OverflowMenuItem,
		ToolbarSearch
	} from 'carbon-components-svelte';
	import Save from 'carbon-icons-svelte/lib/Save.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { rows } = data;

	let pageSize = 10;
	let page = 1;
	let filteredRowIds: any[] = [];
	let selectedRowIds = [rows[0].id, rows[1].id];
	$: console.log('filteredRowIds', filteredRowIds);
</script>

<DataTable
	zebra
	sortable
	batchSelection
	batchExpansion
	nonExpandableRowIds={rows.filter((row) => row.gender !== 'female').map((row) => row.id)}
	bind:selectedRowIds
	headers={[
		{ key: 'overflow', empty: true },
		{ key: 'id', value: 'Id', sort: false },
		{ key: 'name', value: 'Name' },
		{ key: 'email', value: 'Email' },
		{ key: 'gender', value: 'Gender' },
		{ key: 'address', value: 'Address' },
		{ key: 'city', value: 'City' }
	]}
	{rows}
	{pageSize}
	{page}
>
	<strong slot="title">BSS Grid</strong>
	<span slot="description" style="font-size: 1rem"> List of user from dummyjson. </span>
	<svelte:fragment slot="expanded-row" let:row>
		<pre>{JSON.stringify(row, null, 2)}</pre>
	</svelte:fragment>

	<svelte:fragment slot="cell" let:cell>
		{#if cell.key === 'overflow'}
			<OverflowMenu>
				<OverflowMenuItem text="Restart" />
				<OverflowMenuItem
					href="https://cloud.ibm.com/docs/loadbalancer-service"
					text="API documentation"
				/>
				<OverflowMenuItem danger text="Stop" />
			</OverflowMenu>
		{:else}{cell.value}{/if}
	</svelte:fragment>

	<Toolbar>
		<ToolbarBatchActions>
			<Button icon={Save}>Save</Button>
		</ToolbarBatchActions>
		<ToolbarContent>
			<ToolbarSearch persistent value="" shouldFilterRows bind:filteredRowIds />
		</ToolbarContent>
	</Toolbar>
</DataTable>

<Pagination bind:pageSize bind:page totalItems={filteredRowIds.length} pageSizeInputDisabled />
