<script>
    import time from "$public/icons/time.svg";
    import cartIcon from "$img/mdi_cart.svg";
    import { fade } from 'svelte/transition';
    import { addToCart, cart } from '../stores/cartStore.js';
    export let servico = {};

    let showPopup = false;
    let selectedImg = servico.image;
    let selectedTamanho = servico.options?.["Tamanho"] ? servico.options["Tamanho"][0] : undefined;
    let selectedCor = servico.options?.["Cor"] ? servico.options["Cor"][0] : undefined;
    let showFeedback = false;

    function openPopup() {
        showPopup = true;
        selectedImg = servico.image;
        selectedCor = servico.options?.["Cor"] ? servico.options["Cor"][0] : undefined;
    }

    function closePopup() {
        showPopup = false;
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
            valor: servico.valor,
            options: servico.options || {},
            quantidade: 1
        });
        showFeedback = true;
        setTimeout(() => showFeedback = false, 1800);
        closePopup();
    }

    $: console.log("Current cart items:", JSON.stringify($cart, null, 2));
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="relative max-w-40 h-60 overflow-hidden rounded-lg cursor-pointer" on:click={openPopup}>
    <img src={servico.image} alt="Imagem de Serviço"/>
    <div class="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden bg-fixed" style="background-color: hsla(0, 0%, 0%, 0.4)">
        <div class="flex h-full items-center justify-center text-sm text-center">
            <p class="text-white opacity-100">{servico.text}</p>
        </div>
    </div>
</div>

{#if showPopup}
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" transition:fade>
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden relative">
        <button class="absolute top-3 right-3 bg-white rounded-full shadow p-1 text-gray-500 hover:text-gray-800 z-10" on:click={closePopup} title="Fechar">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <img 
            class="w-full object-cover" 
            style="height: 180px;" 
            src={selectedImg} 
            alt="Imagem de Serviço" 
        />
        <div class="p-6">
            <h2 class="text-xl font-bold mb-4">{servico.text}</h2>
            <p class="mb-2">
                {servico.descricao}
            </p>
            <div class="flex gap-1 my-1 mt-4 mb-5">
                {#each servico.options?.["Cor"] ?? [] as c, i}
                    <span class="w-7 h-7 rounded border border-gray-300 inline-block cursor-pointer" style="background-color: #{c};" on:click={() => selectImg(i)} aria-role="button" tabindex="0"></span>
                {/each}
            </div>
            <div class="flex gap-2 mt-2">
                <button class="px-4 py-2 bg-[#EBE1FF] text-black rounded" on:click={closePopup}>{servico.valor}</button>
                <button class="px-4 py-2 bg-[#68B261] text-white rounded flex items-center justify-center gap-2" on:click={comprar}>
                    Comprar <img src={cartIcon} alt="carrinho" class="w-5 h-5 ml-1" />
                </button>
            </div>
        </div>
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