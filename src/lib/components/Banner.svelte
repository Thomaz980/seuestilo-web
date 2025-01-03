
<script>

    import banner from '$img/banner.png';
    import { scrollToSection } from '$src/utils/scrollToSection.js';
   
</script>
<div id="banner" class="w-full flex flex-col items-center">
    <img src={banner} alt="Banner" class="w-full" />

    <a
        href="#servicos"
        class="relative bottom-16 px-6 py-2 rounded-full text-white text-lg bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0" on:click={(event) => { event.preventDefault(); scrollToSection('servicos'); }}
        >EXPLORAR COLEÇÃO</a
    >
</div>
<style scoped>
    
</style>