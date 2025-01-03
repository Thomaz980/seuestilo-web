<script>
    import { IconArrowRight } from "@tabler/icons-svelte";
    import { scrollToSection } from '$src/utils/scrollToSection.js';
    import CursoLanding from './CursoLanding.svelte';
    import cursos from '$lib/data/cursosData.js';
</script>
<div id="cursos" class="w-full pb-4 flex flex-col gap-6 items-center">
    <h2 class="text-2xl tracking-widest">CURSOS</h2>
    <div class="w-full flex overflow-x-auto items-center justify-start gap-4 py-4">
        {#each cursos as curso}
            <CursoLanding {curso} />
        {/each}
    </div>
    <a href="#servicos" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('servicos'); }}>Explore mais <IconArrowRight/></a>
</div>