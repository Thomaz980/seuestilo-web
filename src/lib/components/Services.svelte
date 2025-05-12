<script>

    import { IconArrowRight } from "@tabler/icons-svelte";
    import { servicos } from "$lib/data/servicosData.js";
    import ServicoCard from "./ServicoCard.svelte";
    import { scrollToSection } from '$src/utils/scrollToSection.js';
    import { fade } from 'svelte/transition';

    let selectedType = 'Tudo';
    function filterServicos(type) { selectedType = type; }

</script>

<div id="servicos" class="w-full pb-4 flex flex-col gap-6 items-center">
    <h2 class="text-2xl tracking-widest">CATÁLOGO</h2>
    <nav class="w-full flex flex-wrap justify-center text-lg text-slate-500 gap-2 px-4">
        <button class={selectedType === 'Tudo' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Tudo')}>Tudo</button>
        <button class={selectedType === 'Bermudas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Bermudas')}>Bermudas</button>
        <button class={selectedType === 'Calçados' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Calçados')}>Calçados</button>
        <button class={selectedType === 'Calças' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Calças')}>Calças</button>
        <button class={selectedType === 'Camisas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Camisas')}>Camisas</button>
        <button class={selectedType === 'Cuecas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Cuecas')}>Cuecas</button>
    </nav>
    <div class="w-full flex flex-wrap items-center justify-center gap-4">
        {#each servicos.filter((servico, index) => selectedType !== 'Tudo' || index < 6) as servico (servico.id)}
            {#if selectedType === 'Tudo' || selectedType === servico.type}
                <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
                    <ServicoCard {servico} />
                </div>
            {/if}
        {/each}
    </div>
    <a href="#produtos" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('produtos'); }}>Explore mais <IconArrowRight/></a>
</div>