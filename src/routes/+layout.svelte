<script>
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');

	:global(html) {
		font-family: "Tenor Sans", sans-serif;
	}
</style>