<script>
    import { cart, changeQuantity, removeFromCart } from '../stores/cartStore.js';
    import { fade } from 'svelte/transition';
    import cartIcon from "$img/mdi_cart.svg";
    import whatsappIcon from '$img/whatsapp.png'; 
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let pagamento = "Pix";
    let entrega = "Retirada na loja";
    let etapaFinalizacao = false;
    let mostrarPopupNumero = false;
    let numeroSelecionado = null;

    function formatarValor(valor) {
        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function handleTamanhoChange(item, event) {
        const novoTamanho = event.target.value;
        cart.update(items => {
            const idx = items.findIndex(i => i.id === item.id && i.tamanho === item.tamanho && i.cor === item.cor);
            if (idx !== -1) {
                const updated = [...items];
                updated[idx] = { ...item, tamanho: novoTamanho };
                return updated;
            }
            return items;
        });
    }

    function handleCorChange(item, event) {
        const novaCor = event.target.value;
        cart.update(items => {
            const idx = items.findIndex(i => i.id === item.id && i.tamanho === item.tamanho && i.cor === item.cor);
            if (idx !== -1) {
                const updated = [...items];
                updated[idx] = { ...item, cor: novaCor };
                return updated;
            }
            return items;
        });
    }

    function abrirPopupNumero() {
        mostrarPopupNumero = true;
    }

    function fecharPopupNumero() {
        mostrarPopupNumero = false;
    }

    function escolherNumero(numero) {
        numeroSelecionado = numero;
        mostrarPopupNumero = false;
        enviarWhatsApp(numeroSelecionado);
    }

    function redirecionarParaWhatsApp(numero, mensagem, origem = '') {
        const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(data => {
                const ip = data.ip;
                return fetch("https://script.google.com/macros/s/AKfycbzYGHbeJ3C_DRgQoQhOEjnTrcACGNf7Mq0Y8YUofQ13upf9hqnJMIS3yOJbiGPdpi_p/exec", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `numero=${numero}&ip=${ip}&origem=${origem}`
                });
            })
            .catch(() => {
                return fetch("https://script.google.com/macros/s/AKfycbzYGHbeJ3C_DRgQoQhOEjnTrcACGNf7Mq0Y8YUofQ13upf9hqnJMIS3yOJbiGPdpi_p/exec", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `numero=${numero}&ip=desconhecido&origem=${origem}`
                });
            })
            .finally(() => {
                window.open(urlWhatsApp, "_blank");
            });
    }

    function enviarWhatsApp(numero) {
        numero = numero || numeroSelecionado || "5581993880905"; 
        let mensagem = `*Olá! Gostaria de comprar os seguintes produtos:* \n`;

        const produtosAgrupados = {};
        $cart.forEach(item => {
            const key = item.id;
            if (!produtosAgrupados[key]) {
                produtosAgrupados[key] = {
                    text: item.text,
                    valor: item.valor,
                    corNomeQtd: {},
                    options: item.options
                };
            }

            let corNome = item.cor;
            if (item.options && item.options["Cor"] && item.options["NomeCor"]) {
                const corIdx = item.options["Cor"].indexOf(item.cor);
                if (corIdx > -1) {
                    corNome = item.options["NomeCor"][corIdx];
                }
            }
            if (!produtosAgrupados[key].corNomeQtd[corNome]) {
                produtosAgrupados[key].corNomeQtd[corNome] = 0;
            }
            produtosAgrupados[key].corNomeQtd[corNome] += item.quantidade;
            produtosAgrupados[key].valorFormatado = formatarValor(valorPorTamanho(item));
        });
        Object.values(produtosAgrupados).forEach(produto => {
            mensagem += `\n*Produto:* ${produto.text}`;
            mensagem += `\n*Preço:* ${produto.valorFormatado}`;
            mensagem += `\n*Tamanhos/Cores:*`;
            Object.entries(produto.corNomeQtd).forEach(([corNome, qtd]) => {
                mensagem += `\n- ${corNome}: ${qtd} unidade${qtd > 1 ? 's' : ''}`;
            });
            mensagem += `\n-------------------------`;
        });
        mensagem += `\n*Total da compra:* ${formatarValor(totalCarrinho)}`;
        mensagem += `\n*Forma de pagamento:* ${pagamento}`;
        mensagem += `\n*Forma de entrega:* ${entrega}`;
        redirecionarParaWhatsApp(numero, mensagem, 'seuestilo-web');
    }

    function finalizarPedido() {
        etapaFinalizacao = true;
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

    $: totalCarrinho = $cart.reduce((acc, item) => {
        const valorNum = valorPorTamanho(item);
        return acc + (valorNum * item.quantidade);
    }, 0);

    function removeItemFromCart(item) {
        cart.update(items => items.filter(i => !(i.id === item.id && i.tamanho === item.tamanho && i.cor === item.cor)));
    }
</script>

<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" transition:fade role="dialog" aria-modal="true" aria-label="Carrinho de compras">
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        <div class="p-6 relative">
            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" on:click={() => dispatch('close')} title="Fechar carrinho" aria-label="Fechar carrinho">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2" id="cart-title">
                <img src={cartIcon} alt="Carrinho" class="w-7 h-7" /> Carrinho de Compras
            </h2>
            {#if $cart.length === 0}
                <p class="text-center text-gray-500">Seu carrinho está vazio.</p>
            {:else}
                <div class="max-h-80 overflow-y-auto pr-2" tabindex="0" aria-label="Lista de itens do carrinho">
                    <ul class="divide-y divide-gray-200">
                        {#each [...$cart].reverse() as item}
                            <li class="flex items-center gap-3 py-3">
                                <img src={item.options && item.options["Cor"] && item.options["Img"] ? item.options["Img"][item.options["Cor"].indexOf(item.cor || item.options["Cor"][0])] : item.image} alt={item.text} class="w-16 h-16 object-cover rounded" />
                                <div class="flex-1">
                                    <div class="flex items-center justify-between">
                                        <div class="font-semibold">{item.text}</div>
                                        <button class="text-red-500 ml-2" on:click={() => removeItemFromCart(item)} title="Remover" aria-label="Remover item do carrinho">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                        <label for={`tamanho-${item.id}`} class="sr-only">Tamanho</label>
                                        Tamanho:
                                        <select id={`tamanho-${item.id}`} class="border rounded px-2 py-1" on:change={e => handleTamanhoChange(item, e)} aria-label="Selecionar tamanho">
                                            {#each item.options?.["Tamanho"] ?? [item.tamanho] as t}
                                                <option value={t} selected={t === item.tamanho}>{t}</option>
                                            {/each}
                                        </select>
                                    </div>
                                    {#if item.options && item.options["NomeCor"] && item.options["Cor"]}
                                    <div class="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                        <label for={`cor-${item.id}`} class="sr-only">Cor</label>
                                        Cor:
                                        <select id={`cor-${item.id}`} class="border rounded px-2 py-1" on:change={e => handleCorChange(item, e)} aria-label="Selecionar cor">
                                            {#each item.options["NomeCor"] as nomeCor, idx}
                                                <option value={item.options["Cor"][idx]} selected={item.cor === item.options["Cor"][idx]}>{nomeCor}</option>
                                            {/each}
                                        </select>
                                    </div>
                                    {/if}
                                    <div class="flex items-center justify-between mt-1">
                                        <div class="text-sm text-gray-700">Valor: {formatarValor(valorPorTamanho(item))}</div>
                                        <div class="text-sm flex items-center gap-2">
                                            <button class="px-2 py-1 bg-gray-200 rounded" on:click={() => changeQuantity(item.id, item.tamanho, item.cor, -1)} aria-label="Diminuir quantidade" tabindex="0">-</button>
                                            <span aria-live="polite">{item.quantidade}</span>
                                            <button class="px-2 py-1 bg-gray-200 rounded" on:click={() => changeQuantity(item.id, item.tamanho, item.cor, 1)} aria-label="Aumentar quantidade" tabindex="0">+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
                <!-- Total da compra -->
                <div class="flex justify-between items-center mt-4 mb-2 px-1">
                    <span class="font-semibold text-lg text-gray-700">Total:</span>
                    <span class="font-bold text-xm text-green-700">{formatarValor(totalCarrinho)}</span>
                </div>
                {#if !etapaFinalizacao}
                    <div class="flex justify-center mt-4">
                        <button class="px-4 py-2 bg-[#68B261] text-white rounded" on:click={finalizarPedido} aria-label="Finalizar pedido">
                            Finalizar pedido
                        </button>
                    </div>
                {:else}
                    <div class="flex flex-col gap-4 mt-4">
                        <div class="flex flex-col gap-2">
                            <div>
                                <span class="block text-sm text-gray-700 mb-1 font-semibold">Forma de pagamento:</span>
                                <div class="flex gap-2" role="radiogroup" aria-label="Forma de pagamento">
                                    <button type="button" class="px-3 py-1 rounded border transition-colors duration-150 focus:outline-none {pagamento === 'Pix' ? 'bg-[#68B261] text-white border-[#68B261]' : 'bg-white text-gray-700 border-gray-300'}" aria-pressed={pagamento === 'Pix'} aria-label="Selecionar Pix" on:click={() => pagamento = 'Pix'}>Pix</button>
                                    <button type="button" class="px-3 py-1 rounded border transition-colors duration-150 focus:outline-none {pagamento === 'Cartão' ? 'bg-[#68B261] text-white border-[#68B261]' : 'bg-white text-gray-700 border-gray-300'}" aria-pressed={pagamento === 'Cartão'} aria-label="Selecionar Cartão" on:click={() => pagamento = 'Cartão'}>Cartão</button>
                                    <button type="button" class="px-3 py-1 rounded border transition-colors duration-150 focus:outline-none {pagamento === 'Dinheiro' ? 'bg-[#68B261] text-white border-[#68B261]' : 'bg-white text-gray-700 border-gray-300'}" aria-pressed={pagamento === 'Dinheiro'} aria-label="Selecionar Dinheiro" on:click={() => pagamento = 'Dinheiro'}>Dinheiro</button>
                                </div>
                            </div>
                            <div>
                                <span class="block text-sm text-gray-700 mb-1 font-semibold">Forma de entrega:</span>
                                <div class="flex gap-2" role="radiogroup" aria-label="Forma de entrega">
                                    <button type="button" class="px-3 py-1 rounded border transition-colors duration-150 focus:outline-none {entrega === 'Retirada na loja' ? 'bg-[#68B261] text-white border-[#68B261]' : 'bg-white text-gray-700 border-gray-300'}" aria-pressed={entrega === 'Retirada na loja'} aria-label="Selecionar retirada na loja" on:click={() => entrega = 'Retirada na loja'}>Retirada na loja</button>
                                    <button type="button" class="px-3 py-1 rounded border transition-colors duration-150 focus:outline-none {entrega === 'Correios' ? 'bg-[#68B261] text-white border-[#68B261]' : 'bg-white text-gray-700 border-gray-300'}" aria-pressed={entrega === 'Correios'} aria-label="Selecionar Correios" on:click={() => entrega = 'Correios'}>Correios</button>
                                    <button type="button" class="px-3 py-1 rounded border transition-colors duration-150 focus:outline-none {entrega === 'Entregador' ? 'bg-[#68B261] text-white border-[#68B261]' : 'bg-white text-gray-700 border-gray-300'}" aria-pressed={entrega === 'Entregador'} aria-label="Selecionar Entregador" on:click={() => entrega = 'Entregador'}>Entregador</button>
                                </div>
                            </div>
                        </div>
                        <button class="px-4 py-2 bg-[#68B261] text-white rounded" on:click={abrirPopupNumero} aria-label="Enviar pedido pelo WhatsApp">
                            Enviar pedido pelo WhatsApp
                        </button>
                    </div>
                {/if}
            {/if}
        </div>
    </div>
</div>

{#if mostrarPopupNumero}
    <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full flex flex-col items-center gap-4" role="dialog" aria-modal="true" aria-label="Escolher atendente WhatsApp">
            <h3 class="text-lg font-semibold mb-2">Escolha o atendente:</h3>
            <button class="w-full px-4 py-2 bg-[#68B261] text-white rounded mb-2 flex items-center justify-center gap-2" on:click={() => escolherNumero('5581993880905')} aria-label="Enviar para Reyson">
                <img src={whatsappIcon} alt="WhatsApp" class="w-5 h-5" /> Consultor Reyson
            </button>
            <button class="w-full px-4 py-2 bg-[#68B261] text-white rounded flex items-center justify-center gap-2" on:click={() => escolherNumero('5581992881187')} aria-label="Enviar para Joseph">
                <img src={whatsappIcon} alt="WhatsApp" class="w-5 h-5" /> Consultor Joseph
            </button>
            <button class="mt-2 text-gray-500" on:click={fecharPopupNumero} aria-label="Cancelar">Cancelar</button>
        </div>
    </div>
{/if}

<style scoped>
    .z-50 {
        z-index: 50;
    }
    .max-h-80 {
        max-height: 20rem;
    }
    .overflow-y-auto {
        overflow-y: auto;
    }
    .pr-2 {
        padding-right: 0.5rem;
    }
</style>