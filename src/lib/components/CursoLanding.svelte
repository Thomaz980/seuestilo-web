<script>
    export let curso;
    import capa from '$img/cortes.jpeg';
    import { IconClock, IconClockFilled, IconUsers } from '@tabler/icons-svelte';
    
</script>

<div class="min-w-96 max-w-96 h-[32rem] flex flex-col items-center justify-end bg-white shadow-md rounded-lg relative overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('{curso.image}')"></div>
    
    <!-- Content overlay -->
    <div class="relative z-10 flex flex-col mt-4 gap-4 p-4 text-white" style="background-color: hsla(0, 0%, 0%, 0.6)">
        <h2 class="text-lg font-semibold tracking-wider uppercase">{curso.title}</h2>
        <p class="text-gray-200 text-sm">{curso.description}</p>
        <div class="flex justify-between">
            <div class="flex gap-2">
                <span class="py-1 px-4 rounded-lg bg-white flex flex-col items-center text-zinc-800 text-sm"> <span class="flex items-center"><IconClockFilled color=#FFB18F/> {curso.duration}</span> Duração </span>
                <span class="py-1 px-4 rounded-lg bg-white flex flex-col items-center text-zinc-800 text-sm"> <span class="flex items-center"><IconUsers color=#FFB18F/> {curso.vacancies}</span> Vagas </span>
            </div>
            <span class="py-1 px-1 rounded-lg bg-[#FFB18F] flex flex-col justify-center text-center text-white text-sm"> <span class="flex items-center"> Em breve... </span>
        </div>
    </div>

</div>


<style>
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
