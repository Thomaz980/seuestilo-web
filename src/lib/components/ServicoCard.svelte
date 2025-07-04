<script>
    import time from "$public/icons/time.svg";
    import cartIcon from "$img/mdi_cart.svg";
    import { fade } from 'svelte/transition';
    import { addToCart, cart } from '../stores/cartStore.js';
    export let servico = {};

    export let showPopup = undefined; // permite controle externo

    let selectedImg = servico.image;
    let selectedTamanho = servico.options?.["Tamanho"] ? servico.options["Tamanho"][0] : undefined;
    let selectedCor = servico.options?.["Cor"] ? servico.options["Cor"][0] : undefined;
    let showFeedback = false;
    let showPopupLocal = false;

    $: popupAberto = showPopup === undefined ? showPopupLocal : showPopup;

    function openPopup() {
        if (showPopup === undefined) {
            showPopupLocal = true;
        }
    }
    function closePopup() {
        if (showPopup === undefined) {
            showPopupLocal = false;
        } else {
            showPopup = false;
        }
    }

    function selectImg(idx) {
        if (servico.options && servico.options["Img"]) {
            selectedImg = servico.options["Img"][idx];
        }
        if (servico.options && servico.options["Cor"]) {
            selectedCor = servico.options["Cor"][idx];
        }
    }

    function comprar() {
        addToCart({
            id: servico.id,
            image: selectedImg,
            text: servico.text,
            tamanho: selectedTamanho,
            cor: selectedCor,
            valor: valorAtual,
            options: servico.options || {},
            quantidade: 1
        });
        showFeedback = true;
        setTimeout(() => showFeedback = false, 1800);
        // Fechar popup só depois do feedback sumir se for controle externo
        if (showPopup === undefined) {
            closePopup();
        } else {
            setTimeout(() => showPopup = false, 1800);
        }
    }

    // Função para formatar valor como moeda BRL
    function formatarValor(valor) {
        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function getObjectPosition(servico) {
        if (servico.objectPosition) return servico.objectPosition;
        if (servico.offsetX || servico.offsetY)
            return `${servico.offsetX || 'center'} ${servico.offsetY || 'center'}`;
        if (servico.offset) // compatibilidade antiga
            return `center ${servico.offset}`;
        return 'center center';
    }

    function valorPorTamanho(item) {
        const t = Number(item.tamanho);
        const tStr = String(item.tamanho).toUpperCase();
        if (item.precosPorTamanho && item.tamanho in item.precosPorTamanho) {
            return item.precosPorTamanho[item.tamanho];
        }
        if (item.id === 6) {
            if (t >= 38 && t <= 46) return 160;
            if (t >= 48 && t <= 54) return 180;
        }
        if (item.id === 7) {
            if (["P", "M", "G", "GG"].includes(tStr)) return 110;
            if (["G1", "G2", "G3"].includes(tStr)) return 130;
        }
        if (item.id === 8) {
            if (["P", "M", "G", "GG"].includes(tStr)) return 130;
            if (["G1", "G2", "G3"].includes(tStr)) return 150;
        }
        return item.valor || 0;
    }

    $: valorAtual = valorPorTamanho({ ...servico, tamanho: selectedTamanho });

    $: console.log("Current cart items:", JSON.stringify($cart, null, 2));
</script>

{#if popupAberto}
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" transition:fade>
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden relative">
        <button class="absolute top-3 right-3 bg-white rounded-full shadow p-1 text-gray-500 hover:text-gray-800 z-10" on:click={closePopup} title="Fechar">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <img 
            class="w-full object-cover" 
            style={`height: 180px; object-position: ${getObjectPosition(servico)};`}
            src={selectedImg} 
            alt="Imagem de Serviço" 
        />
        <div class="p-6">
            <h2 class="text-xl font-bold mb-4">{servico.text}</h2>
            <p class="mb-2">
                {servico.descricao}
            </p>
            <!-- Tamanhos disponíveis -->
            {#if servico.options?.["Tamanho"]?.length}
            <div class="flex gap-2 my-2 items-center">
                <span class="text-sm text-gray-700">Tamanho:</span>
                <select class="border rounded px-2 py-1 text-xs" bind:value={selectedTamanho} aria-label="Selecionar tamanho">
                    {#each servico.options["Tamanho"] as t}
                        <option value={t}>{t}</option>
                    {/each}
                </select>
            </div>
            {/if}
            <div class="flex gap-1 my-1 mt-4 mb-5">
                {#each servico.options?.["Cor"] ?? [] as c, i}
                    <span class="w-7 h-7 rounded border border-gray-300 inline-block cursor-pointer" style="background-color: #{c};" on:click={() => selectImg(i)} aria-role="button" tabindex="0"></span>
                {/each}
            </div>
            <div class="flex gap-2 mt-2">
                <button class="px-4 py-2 bg-[#D1D5DB] text-black rounded" on:click={closePopup}>{formatarValor(valorAtual)}</button>
                <button class="px-4 py-2 bg-[#68B261] text-white rounded flex items-center justify-center gap-2" on:click={comprar}>
                     Comprar <img src={cartIcon} alt="carrinho" class="w-5 h-5 ml-1" />
                </button>
            </div>
        </div>
    </div>
</div>
{/if}

{#if showPopup === undefined}
<div class="servico-card-preview" on:click={openPopup} tabindex="0" role="button" aria-label={`Visualizar detalhes de ${servico.text}`}
    style="width: 10rem; min-width: 10rem; max-width: 10rem;">
    <div class="servico-card-img-wrapper" style="width: 100%; height: 100%;">
        <img 
            src={servico.image} 
            alt="Imagem de Serviço" 
            style={`width: 100%; height: 100%; object-fit: cover; object-position: ${getObjectPosition(servico)}; display: block;`} 
            draggable="false"
        />
    </div>
    <div class="servico-card-title-bar">
        <p class="servico-card-title">{servico.text}</p>
    </div>
</div>
{/if}

{#if showFeedback}
    <div class="fixed left-1/2 top-0 translate-x-[-50%] mt-8 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-[9999] animate-toast-center">
        Adicionado ao carrinho!
    </div>
{/if}

<style scoped>
    @keyframes toast-center-in {
        0% { opacity: 0; transform: translate(-50%, -40px) scale(0.95); }
        60% { opacity: 1; transform: translate(-50%, 10px) scale(1.03); }
        80% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.98); }
    }
    .animate-toast-center {
        animation: toast-center-in 1.8s cubic-bezier(.4,1.3,.6,1) both;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);
        margin-top: 2rem;
    }
    .servico-card-preview {
        position: relative;
        width: 10rem;
        height: 15rem;
        max-width: 10rem;
        min-width: 10rem;
        max-height: 15rem;
        min-height: 15rem;
        overflow: hidden;
        border-radius: 0.5rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: #fff;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.04);
    }
    .servico-card-img-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        overflow: hidden;
    }
    .servico-card-img-wrapper img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        object-position: center;
        display: block;
        max-width: unset;
        max-height: unset;
    }
    .servico-card-title-bar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3.5rem;
        background: linear-gradient(0deg, rgba(0,0,0,0.5) 80%, transparent 100%);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 0.5rem;
    }
    .servico-card-title {
        color: #fff;
        font-size: 1rem;
        text-align: center;
        text-shadow: 0 1px 4px rgba(0,0,0,0.25);
        margin: 0;
    }
    .relative {
        position: relative;
        z-index: 1;
    }
    img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .z-50 {
        z-index: 50;
    }
</style>