<script>

    import banner from '$img/img/capa2.jpeg';
    import { scrollToSection } from '$src/utils/scrollToSection.js';
   
</script>
<div id="banner" class="w-full flex flex-col items-center">
    <a
        href="#servicos"
        class="absolute top-15 left-1/2 transform -translate-x-1/2 w-[90%] px-6 py-2 rounded-full text-white text-sm text-center bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0" on:click={(event) => { event.preventDefault(); scrollToSection('servicos'); }}
        >QUER SE VESTIR COMO UM HOMEM DE SUCESSO</a
    >

    <img src={banner} alt="Banner" class="banner-img" />

    <a
        href="#servicos"
        class="relative bottom-16 px-6 py-2 rounded-full text-white text-mg bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0" on:click={(event) => { event.preventDefault(); scrollToSection('servicos'); }}
        >VEM PARA A SEU ESTILO</a
    >
</div>
<style scoped>
.banner-img {
    width: 100%;
    height: 41rem;
    object-fit: cover;
    object-position: center 72%; 
}
</style>