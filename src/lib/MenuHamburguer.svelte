<script>
    let { open = $bindable() } = $props()
</script>


{#if open}
    <nav class="w-full bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-2xl flex flex-col items-center p-4 gap-4 lg:gap-8 text-lg lg:text-xl font-regular">
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        <a href="#">Blog</a>
    </nav>
{/if}