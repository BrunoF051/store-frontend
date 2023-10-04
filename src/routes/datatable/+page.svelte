<script lang="ts">
	import type { PageData } from './$types';
	import {
		TabulatorFull as Tabulator,
		type ColumnDefinition,
		type ColumnComponent,
		TabulatorFull
	} from 'tabulator-tables';
	import { FilterModule } from 'tabulator-tables';

	import { onMount } from 'svelte';

	export let data: PageData;
	const { source, users } = data;

	var headerMenu = [
		{
			label: 'Equal',
			action: function (e: Event, column: ColumnComponent) {
				column.updateDefinition({ headerFilterFunc: '=' } as ColumnDefinition);
			}
		},
		{
			label: 'Not Equal',
			action: (e: Event, column: ColumnComponent) => {
				column.updateDefinition({ headerFilterFunc: '!=' } as ColumnDefinition);
			}
		},

		{
			label: 'Contains',
			action: function (e: Event, column: ColumnComponent) {
				column.updateDefinition({ headerFilterFunc: 'in' } as ColumnDefinition);
			}
		},

		{
			label: 'Starts',
			action: function (e: Event, column: ColumnComponent) {
				column.updateDefinition({ headerFilterFunc: 'starts' } as ColumnDefinition);
			}
		},

		{
			label: 'Ends',
			action: function (e: Event, column: ColumnComponent) {
				column.updateDefinition({ headerFilterFunc: 'ends' } as ColumnDefinition);
			}
		}
	];

	let tableComponent: any;

	// const columns = [
	// 	{ title: 'ID', field: 'id', headerMenu, headerFilter: 'input', headerFilterFunc: '!=' },
	// 	{ title: 'Name', field: 'name', headerMenu, headerFilter: 'input', headerFilterFunc: '!=' },
	// 	{ title: 'Gender', field: 'gender', headerMenu, headerFilter: 'input', headerFilterFunc: '!=' },
	// 	{ title: 'Email', field: 'email', headerMenu, headerFilter: 'input', headerFilterFunc: '!=' },
	// 	{ title: 'City', field: 'city', headerMenu, headerFilter: 'input', headerFilterFunc: '!=' }
	// ];
	onMount(() => {
		new Tabulator(tableComponent, {
			data: source,
			reactiveData: true,
			autoColumns: true, // false
			pagination: true,
			paginationSize: 15,
			headerSort: true,
			responsiveLayout: 'hide',
			layout: 'fitColumns',
			movableRows: true,
			selectable: true,
			dataLoader: true,
			clipboard: true,
			// columns: columns
			autoColumnsDefinitions: (columns: any) => {
				columns?.forEach((column: ColumnDefinition) => {
					column.headerFilter = 'input';
					column.headerMenu = headerMenu;
					column.headerMenuIcon = "<i class='mdi mdi-filter-variant'></i>";
				});

				return columns;
			}
		});
	});
</script>

<div bind:this={tableComponent} />

<svelte:head>
	<link
		href="https://unpkg.com/tabulator-tables@4.9.1/dist/css/tabulator_midnight.min.css"
		rel="stylesheet"
	/>
</svelte:head>
