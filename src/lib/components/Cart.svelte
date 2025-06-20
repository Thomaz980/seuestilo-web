<script>
    import { cart, changeQuantity, removeFromCart } from '../stores/cartStore.js';
    import { fade } from 'svelte/transition';
    import cartIcon from "$img/mdi_cart.svg";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleTamanhoChange(item, event) {
        removeFromCart(item.id, item.tamanho);
        cart.update(items => [
            ...items,
            { ...item, tamanho: event.target.value }
        ]);
    }

    function enviarWhatsApp() {
        const numero = "5581986514383";
        let mensagem = `*Olá! Gostaria de comprar os seguintes produtos:*`;
        $cart.forEach(item => {
            let imagem = item.image;
            if (item.options && item.options["Cor"] && item.options["Img"]) {
                const corIdx = item.options["Cor"].indexOf(item.cor || item.options["Cor"][0]);
                if (corIdx > -1 && item.options["Img"][corIdx]) {
                    imagem = item.options["Img"][corIdx];
                }
            }
            mensagem += `\nProduto: ${item.text}`;
            mensagem += `\nTamanho: ${item.tamanho}`;
            mensagem += `\nPreço: ${item.valor}`;
            mensagem += `\nImagem: ${imagem}`;
            mensagem += `\nQuantidade: ${item.quantidade}`;
            mensagem += `\n-------------------------`;
        });
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    }
</script>

<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" transition:fade>
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        <div class="p-6 relative">
            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" on:click={() => dispatch('close')} title="Fechar carrinho">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
                <img src={cartIcon} alt="Carrinho" class="w-7 h-7" /> Carrinho de Compras
            </h2>
            {#if $cart.length === 0}
                <p class="text-center text-gray-500">Seu carrinho está vazio.</p>
            {:else}
                <ul class="divide-y divide-gray-200">
                    {#each $cart as item}
                        <li class="flex items-center gap-3 py-3">
                            <img src={item.options && item.options["Cor"] && item.options["Img"] ? item.options["Img"][item.options["Cor"].indexOf(item.cor || item.options["Cor"][0])] : item.image} alt={item.text} class="w-16 h-16 object-cover rounded" />
                            <div class="flex-1">
                                <div class="flex items-center justify-between">
                                    <div class="font-semibold">{item.text}</div>
                                    <button class="text-red-500 ml-2" on:click={() => removeFromCart(item.id, item.tamanho)} title="Remover">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                    Tamanho:
                                    <select class="border rounded px-2 py-1" on:change={e => handleTamanhoChange(item, e)}>
                                        {#each item.options?.["Tamanho"] ?? [item.tamanho] as t}
                                            <option value={t} selected={t === item.tamanho}>{t}</option>
                                        {/each}
                                    </select>
                                </div>
                                <div class="flex items-center justify-between mt-1">
                                    <div class="text-sm text-gray-700">Valor: {item.valor}</div>
                                    <div class="text-sm flex items-center gap-2">
                                        <button class="px-2 py-1 bg-gray-200 rounded" on:click={() => changeQuantity(item.id, item.tamanho, -1)}>-</button>
                                        <span>{item.quantidade}</span>
                                        <button class="px-2 py-1 bg-gray-200 rounded" on:click={() => changeQuantity(item.id, item.tamanho, 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
                <div class="flex justify-center mt-4 gap-2">
                    <button class="px-4 py-2 bg-[#68B261] text-white rounded" on:click={enviarWhatsApp}>
                        Enviar pedido pelo WhatsApp
                    </button>
                </div>
            {/if}
        </div>
    </div>
</div>

<style scoped>
    .z-50 {
        z-index: 50;
    }
</style>