<script>
    export let servico = {};

    let showPopup = false;

    function openPopup() {
        showPopup = true;
    }

    function closePopup() {
        showPopup = false;
    }
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
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-xl font-bold mb-4">{servico.text}</h2>
            <p class="mb-2"><strong>Descrição:</strong> {servico.descricao}</p>
            <p class="mb-2"><strong>Tempo:</strong> {servico.tempo}</p>
            <p class="mb-4"><strong>Valor:</strong> {servico.valor}</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={closePopup}>Fechar</button>
        </div>
    </div>
{/if}

<style scoped>
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