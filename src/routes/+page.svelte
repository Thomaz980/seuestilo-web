<script lang="js">
    // import components
    import Header from "$components/Header.svelte";
    import Banner from "$components/Banner.svelte";
    import Services from "$components/Services.svelte";
    import Products from "$components/Products.svelte";
    import Cursos from "$components/Cursos.svelte";
    import About from "$components/About.svelte";
    import Marcas from "$components/Marcas.svelte";
    import Novidades from "$components/Novidades.svelte";
    import Footer from "$components/Footer.svelte";
    import SeparatorLanding from "$components/SeparatorLanding.svelte";
    import ProdutoLanding from "$components/ProdutoLanding.svelte";
    import CursoLanding from "$components/CursoLanding.svelte";

    import {
        IconArrowRight,
        IconBrandInstagramFilled,
        IconBrandTwitterFilled,
        IconBrandYoutubeFilled,
        IconDiamond,
    } from "@tabler/icons-svelte";
   

    // import utils
    import logo from "$img/logo.png";

  
   

    
</script>

<main>
   
    <Header />
   
    <section id="main_content" class="flex flex-col items-center bg-slate-50">

        <Banner />
        <Services/>
       
        <SeparatorLanding/>
        
        <!-- <Cursos/> -->
        <Products/>
        <About/>

    </section>

    <Footer />
  
</main>
