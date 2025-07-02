<script>

    import { IconArrowRight } from "@tabler/icons-svelte";
    import { servicos } from "$lib/data/servicosData.js";
    import ServicoCard from "./ServicoCard.svelte";
    import { scrollToSection } from '$src/utils/scrollToSection.js';
    import { fade } from 'svelte/transition';

    let selectedType = 'Tudo';
    let mostrarListaExpandida = false;
    let servicoSelecionado = null;
    let mostrarPopupDireto = false;

    function filterServicos(type) { selectedType = type; }
    function abrirListaExpandida() {
        mostrarListaExpandida = true;
        setTimeout(() => {
            const nav = document.querySelector('#servicos nav');
            if (nav) nav.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Também move o scroll da lista para o topo
            const lista = document.querySelector('.max-w-2xl.overflow-y-auto');
            if (lista) lista.scrollTop = 0;
        }, 0);
    }
    function fecharListaExpandida() { mostrarListaExpandida = false; servicoSelecionado = null; }
    function selecionarServico(servico) {
        servicoSelecionado = servico;
        mostrarPopupDireto = true;
    }
    function fecharPopupDireto() {
        mostrarPopupDireto = false;
        servicoSelecionado = null;
    }

</script>

<div id="servicos" class="w-full pb-4 flex flex-col gap-6 items-center">
    <h2 class="text-2xl tracking-widest">CATÁLOGO</h2>
    <nav class="w-full flex flex-wrap justify-center text-lg text-slate-500 gap-2 px-4">
        <button class={selectedType === 'Tudo' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Tudo')}>Tudo</button>
        <button class={selectedType === 'Bermudas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Bermudas')}>Bermudas</button>
        <button class={selectedType === 'Calçados' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Calçados')}>Calçados</button>
        <button class={selectedType === 'Calças' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Calças')}>Calças</button>
        <button class={selectedType === 'Camisas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Camisas')}>Camisas</button>
        <button class={selectedType === 'Acessórios' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Acessórios')}>Acessórios</button>
    </nav>
    <div class="w-full flex flex-wrap items-center justify-center gap-4 max-h-[47rem] overflow-y-auto">
        {#if selectedType === 'Tudo'}
            {#each servicos.slice(0, 6) as servico (servico.id)}
                <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
                    <ServicoCard {servico} />
                </div>
            {/each}
        {:else}
            {#each servicos.filter(servico => servico.type === selectedType) as servico (servico.id)}
                <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
                    <ServicoCard {servico} />
                </div>
            {/each}
        {/if}
    </div>
    <a href="#produtos" class="flex items-center" on:click|preventDefault={() => {
        const container = document.querySelector('#servicos .flex.flex-wrap');
        if (container) container.scrollTop = 0;
    }}>Explore mais <IconArrowRight/></a>
</div>