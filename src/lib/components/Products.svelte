<script>
    import { IconArrowRight } from "@tabler/icons-svelte";
    import { scrollToSection } from '$src/utils/scrollToSection.js';
    import ProdutoLanding from './ProdutoLanding.svelte';
    import product1 from '$img/looks/look1.png';
    import product2 from '$img/looks/look2.png';
    import product3 from '$img/looks/look3.png';
    import product4 from '$img/looks/look4.png';


</script>
<div id="produtos" class="w-full pb-4 flex flex-col gap-6 items-center">
    <h2 class="text-2xl tracking-widest">LOOKS</h2>
    <div class="w-full flex overflow-x-auto items-center justify-start gap-4 pl-[0%] py-4">
        <ProdutoLanding image={product1} title='Conjunto camisa verde - calça branca' price='__,__'/>
        <ProdutoLanding image={product2} title='Conjunto camisa branca - calça preta' price='__,__'/>
        <ProdutoLanding image={product3} title='Conjunto camisa vermelha - calça branca' price='__,__'/>
        <ProdutoLanding image={product4} title='Conjunto camisa preta - calça cinza' price='__,__'/>
    </div>
    <a href="/" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('produtos'); }}>Explore mais <IconArrowRight/></a>
</div>