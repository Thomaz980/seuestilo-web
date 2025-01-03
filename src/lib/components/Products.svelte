<script>
    import { IconArrowRight } from "@tabler/icons-svelte";
    import { scrollToSection } from '$src/utils/scrollToSection.js';
    import ProdutoLanding from './ProdutoLanding.svelte';
    import product1 from '$img/product1.png';


</script>
<div id="produtos" class="w-full pb-4 flex flex-col gap-6 items-center">
    <h2 class="text-2xl tracking-widest">PRODUTOS</h2>
    <div class="w-full flex overflow-x-auto items-center justify-start gap-4 pl-[0%] py-4">
        <ProdutoLanding image={product1} title='Produtos em fase de catalogação!' price='---'/>
        <ProdutoLanding image={product1} title='Produtos em fase de catalogação!' price='---'/>
        <ProdutoLanding image={product1} title='Produtos em fase de catalogação!' price='---'/>
        <ProdutoLanding image={product1} title='Produtos em fase de catalogação!' price='---'/>
    </div>
    <a href="/" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('produtos'); }}>Explore mais <IconArrowRight/></a>
</div>