<script>
    let { open = $bindable() } = $props()
</script>


{#if open}
    <nav id="hamburguer-menu" class="w-full bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-2xl flex flex-col items-center p-4 gap-4 lg:gap-8 text-lg lg:text-xl font-regular">
        <a href="/">Sobre</a>
        <a href="/">Contato</a>
        <a href="/">Blog</a>
    </nav>
{/if}

<style>
    #hamburguer-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: 0.3s ease;
    } 

    
    #hamburguer-menu a {
        color: white;
        font-size: 24px;
        margin: 1rem 0;
    }
</style>