<script>
    export let curso;
</script>

<div class="curso-card flex flex-col items-center bg-white shadow-md rounded-lg p-4">
    <img src={curso.image} alt={curso.title} class="w-full h-40 object-cover rounded-t-lg" />
    <div class="flex flex-col items-center mt-4">
        <h3 class="text-lg font-semibold">{curso.title}</h3>
        <p class="text-gray-600">{curso.description}</p>
        <span class="text-xl font-bold mt-2">R${curso.price}</span>
    </div>
</div>

<style>
    .curso-card {
        width: 200px;
    }
</style>
