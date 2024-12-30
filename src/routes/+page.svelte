<script>
  import { onMount } from "svelte";
  import Header from "$lib/Header.svelte";
  import {
    IconArrowAutofitContent,
    IconArrowRight,
    IconBraces,
    IconBrandInstagramFilled,
    IconBrandTwitter,
    IconBrandTwitterFilled,
    IconBrandYoutubeFilled,
    IconDiamond,
    IconMedal,
    IconRings,
  } from "@tabler/icons-svelte";
  import ServicoCard from "$lib/ServicoCard.svelte";
  import Footer from "$lib/Footer.svelte";
  import SeparatorLanding from "$lib/SeparatorLanding.svelte";
  import ProdutoLanding from "$lib/ProdutoLanding.svelte";
  // images
  import banner from "../images/banner.png";
  import corte1 from "../images/corte1.jpeg";
  import img1 from "../images/img01.png";
  import img2 from "../images/img02.png";
  import img3 from "../images/img03.png";
  import img4 from "../images/img04.png";
  import novidades from "../images/novidades.png";
  import cartierLogo from "../images/Catier.png";
  import gucciLogo from "../images/Gucci.png";
  import tiffanyLogo from "../images/Tiffany.png";
  import novidades2 from "../images/novidades2.png";
  import product1 from "../images/product1.png";
  import logo from "../images/logo.png";

  const servicos = [
    { image: img1, text: "Micropigmentação Labial", category: "Lábios" },
    { image: img2, text: "Limpeza de Pele", category: "Pele" },
    {
      image: img3,
      text: "Micropigmentação de sobrancelha",
      category: "Sobrancelhas",
    },
    { image: img4, text: "Técnica Fio a Fio", category: "Sobrancelhas" },
    { image: img1, text: "Micropigmentação Labial", category: "Lábios" },
    { image: img2, text: "Limpeza de Pele", category: "Pele" },
    {
      image: img3,
      text: "Micropigmentação de sobrancelha",
      category: "Sobrancelhas",
    },
    { image: img4, text: "Técnica Fio a Fio", category: "Sobrancelhas" },
  ];
</script>

<main>
  <header>
    <Header />
  </header>

  <section id="main_content" class="flex flex-col items-center bg-slate-50">
    <div id="banner" class="w-full flex flex-col items-center">
      <img src={banner} alt="Banner" class="w-full" />
      <a
        href="/"
        class="relative bottom-16 px-6 py-2 rounded-full text-white text-lg bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0"
        >EXPLORAR COLEÇÃO</a
      >
    </div>

    <div id="servicos" class="w-full pb-4 flex flex-col gap-6 items-center">
      <h2 class="text-2xl tracking-widest">servicos</h2>
      <div
        class="w-full flex overflow-x-auto items-initial justify-initial gap-4 py-4 pl-2"
      >
        <ProdutoLanding
          image={img1}
          title="Micropigmentação Labial"
          price="300"
        />

        <ProdutoLanding image={img2} title="Técnica Fio a Fio" price="110" />
        <ProdutoLanding image={img3} title="Shadow" price="120" />
        <ProdutoLanding image={img4} title="shadow 2" price="210" />
        <ProdutoLanding image={corte1} title="shadow 2" price="210" />
        <ProdutoLanding image={banner} title="shadow 2" price="210" />
      </div>
      <a href="/" class="flex items-center">Explore mais <IconArrowRight /></a>
    </div>

    <SeparatorLanding />

    <div id="novidades" class="w-full pb-4 flex flex-col gap-6 items-center">
      <h2 class="text-2xl tracking-widest">Cursos</h2>
      <div class="w-full flex flex-col gap-2">
        <img src={novidades} alt="Curso" />
      </div>
    </div>

    <SeparatorLanding />

    <div id="produtos" class="w-full pb-4 flex flex-col gap-6 items-center">
      <h2 class="text-2xl tracking-widest">PRODUTOS</h2>
      <div
        class="w-full flex overflow-x-auto items-center justify-center gap-2 pl-[15%] py-4"
      >
        <ProdutoLanding 
          image={product1}
          title="Produtos disponíveis em breve"
          price="0"
        />
        <ProdutoLanding
          image={product1}
          title="Produtos disponíveis em breve"
          price="0"
        />
      </div>
      <a href="/" class="flex items-center">Explore mais <IconArrowRight /></a>
    </div>

    <SeparatorLanding />

    <div
      id="espaco"
      class="w-full bg-slate-50 py-4 flex flex-col gap-8 items-center"
    >
      <img src={logo} alt="Logo" class="max-w-40" />
      <div
        class="w-full flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500"
      >
        <span
          class="flex flex-col items-center text-center justify-center gap-2 max-w-44 "
        >
          <p>
            Ambiente aconchegante e acolhedor para você se sentir em casa e
            relaxar.
          </p>
        </span>
      </div>
    </div>
  </section>

  <footer class="w-full px-4 pt-8 pb-2 gap-6 flex flex-col bg-rose-200">
    <div class="w-full px-8 flex justify-around">
      <IconBrandTwitterFilled size="32" color="#334155" />
      <IconBrandInstagramFilled size="32" color="#334155" />
      <IconBrandYoutubeFilled size="32" color="#334155" />
    </div>
    <div class="w-2/5 self-center flex items-center justify-center gap-2">
      <div class="w-20 border-b border-b-slate-500 border-solid"></div>
      <IconDiamond />
      <div class="w-20 border-b border-b-slate-500 border-solid"></div>
    </div>
    <div class="flex flex-col text-center">
      <a class="text-slate-700 text-lg" href="mailto:espaçopauladiniz@gmail.com"
        >espaçopauladiniz@gmail.com</a
      >
      <a class="text-slate-700 text-lg" href="tel:81992401038">
        (83) 986494774</a
      >
      <span class="text-slate-700 text-lg">
        08:00 - 22:00 de Segunda à Sexta
      </span>
    </div>
    <SeparatorLanding />
    <nav class="flex justify-around text-lg px-4">
      <a href="/">Sobre</a>
      <a href="/">Contato</a>
      <a href="/">Blog</a>
    </nav>
    <div class="flex flex-col items-center text-slate-500 text-sm">
      <span>Copyright© espaçopauladiniz</span>
      <span>Todos os Direitos Reservados.</span>
    </div>
  </footer>
</main>

<style>
  #main_content {
    min-height: 100vh;
    overflow: hidden;
    scrollbar-width: none;
  }



  #banner {
    min-height: 50vh;
  }

  #servicos {
    min-height: 50vh;
  }

  #novidades {
    min-height: 50vh;
  }

  #produtos {
    min-height: 50vh;
  }

  #espaco {
    min-height: 30vh;
  }
</style>
