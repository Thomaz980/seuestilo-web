<script>
    export let curso;
    import capa from '$img/cortes.jpeg';
    
</script>

<div class="curso-card flex flex-col items-center bg-white shadow-md rounded-lg p-4">
    <img src={capa} alt={curso.title} class="w-full h-40 object-cover rounded-t-lg" />
    <div class="flex flex-col items-center mt-4">
        <h3 class="text-lg font-semibold curso-title">{curso.title}</h3>
        <p class="text-gray-600 curso-description">{curso.description}</p>
        <span class="text-xl font-bold mt-2">R${curso.price}</span>
    </div>
</div>

<style>
    .curso-card {
        width: 300px; /* Define a largura fixa para os cards */
        height: 350px; /* Define a altura fixa para os cards */
        display: flex;
        flex-direction: column;
    }
    .curso-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .curso-description {
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Limita a descrição a 3 linhas */
        line-clamp: 3; /* Limita a descrição a 3 linhas */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
