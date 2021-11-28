<script lang="ts">
	import '../app.css';

	function darkMode() {}
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
			<!-- logo -->
			<span class="ml-3 text-xl">Tailblocks</span>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<a class="mr-5 hover:text-gray-900">First Link</a>
			<a class="mr-5 hover:text-gray-900">Second Link</a>
			<a class="mr-5 hover:text-gray-900">Third Link</a>
			<a class="mr-5 hover:text-gray-900">Fourth Link</a>
		</nav>
		<div
			class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
		>
			<input
				type="checkbox"
				name="toggle"
				id="toggle"
				class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
				on:click={darkMode}
			/>
			<label
				for="toggle"
				class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
			/>
		</div>
	</div>
</header>

<slot />

<style lang="postcss">
	.toggle-checkbox:checked {
		@apply right-0 border-green-400;
		right: 0;
		border-color: #68d391;
	}
	.toggle-checkbox:checked + .toggle-label {
		@apply bg-green-400;
		background-color: #68d391;
	}
</style>
