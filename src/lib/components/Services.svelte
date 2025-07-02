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
        <button class={selectedType === 'Cuecas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Cuecas')}>Cuecas</button>
    </nav>
    <div class="w-full flex flex-wrap items-center justify-center gap-4">
        {#if mostrarListaExpandida}
            {#if mostrarPopupDireto && servicoSelecionado}
                <ServicoCard servico={servicoSelecionado} bind:showPopup={mostrarPopupDireto} />
                <div class="fixed inset-0 z-40" on:click={fecharPopupDireto}></div>
            {:else}
                <div class="w-full flex flex-col gap-2 items-center">
                    <div class="w-full flex justify-end mb-2">
                        <button class="px-3 py-1 text-sm bg-gray-200 rounded" on:click={fecharListaExpandida}>Fechar</button>
                    </div>
                    <ul class="w-full max-w-2xl flex flex-col gap-2 max-h-[28rem] overflow-y-auto">
                        {#each servicos.filter(s => selectedType === 'Tudo' || selectedType === s.type) as s, i (s.id)}
                            <li class="flex items-center gap-4 p-2 border rounded cursor-pointer hover:bg-gray-50 transition" on:click={() => selecionarServico(s)} tabindex="0">
                                <img src={s.image} alt={s.text} class="w-16 h-16 object-cover rounded" style={`object-position: ${s.objectPosition || 'center'};`} />
                                <div class="flex-1">
                                    <div class="font-semibold">{s.text}</div>
                                    <div class="text-sm text-gray-600">{Number(s.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        {:else}
            {#each servicos.filter((servico, index) => selectedType !== 'Tudo' || index < 6) as servico (servico.id)}
                {#if selectedType === 'Tudo' || selectedType === servico.type}
                    <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
                        <ServicoCard {servico} />
                    </div>
                {/if}
            {/each}
        {/if}
    </div>
    <a href="#produtos" class="flex items-center" on:click|preventDefault={abrirListaExpandida}>Explore mais <IconArrowRight/></a>
</div>