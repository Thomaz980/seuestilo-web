<script>

    import { IconArrowRight } from "@tabler/icons-svelte";
    import { servicos } from "$lib/data/servicosData.js";
    import ServicoCard from "./ServicoCard.svelte";
    import { scrollToSection } from '$src/utils/scrollToSection.js';
    import { fade } from 'svelte/transition';


    let selectedType = 'Tudo';

    function filterServicos(type) {
        selectedType = type;
    }
</script>

<div id="servicos" class="w-full pb-4 flex flex-col gap-6 items-center">
    <h2 class="text-2xl tracking-widest">SERVIÇOS</h2>
    <nav class="w-full flex flex-wrap justify-center text-lg text-slate-500 gap-2 px-4">
        <button class={selectedType === 'Tudo' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Tudo')}>Tudo</button>
        <button class={selectedType === 'Pele' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Pele')}>Pele</button>
        <button class={selectedType === 'Lábios' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Lábios')}>Lábios</button>
        <button class={selectedType === 'Olhar' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Olhar')}>Olhar</button>
        <button class={selectedType === 'Cabelos' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Cabelos')}>Cabelos</button>
        <button class={selectedType === 'Unhas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Unhas')}>Unhas</button>
    </nav>
    <div class="w-full flex flex-wrap items-center justify-center gap-4">
        {#each servicos.filter((servico, index) => selectedType !== 'Tudo' || index < 6) as servico (servico.text)}
            {#if selectedType === 'Tudo' || selectedType === servico.type}
                <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
                    <ServicoCard {servico} />
                </div>
            {/if}
        {/each}
    </div>
    <a href="#produtos" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('produtos'); }}>Explore mais <IconArrowRight/></a>
</div>