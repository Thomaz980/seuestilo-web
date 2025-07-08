<script>

    import banner from '$img/img/capa2.jpeg';
    import { scrollToSection } from '$src/utils/scrollToSection.js';
   
</script>
<div id="banner" class="w-full flex flex-col items-center">
    <img src={banner} alt="Banner" class="banner-img" />

    <a
        href="#servicos"
        class="relative bottom-16 px-6 py-2 rounded-full text-white text-lg bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0" on:click={(event) => { event.preventDefault(); scrollToSection('servicos'); }}
        >EXPLORAR COLEÇÃO</a
    >
</div>
<style scoped>
.banner-img {
    width: 100%;
    height: 38rem;
    object-fit: cover;
    object-position: center 78%; /* Mostra mais a parte de baixo da imagem */
}
</style>