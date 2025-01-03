<script lang="js">
    import Header from "$lib/Header.svelte";
    import {
        IconArrowRight,
        IconBrandInstagramFilled,
        IconBrandTwitterFilled,
        IconBrandYoutubeFilled,
        IconDiamond,
    } from "@tabler/icons-svelte";
    import ServicoCard from "$lib/ServicoCard.svelte";
    import Footer from "$lib/Footer.svelte";
    import SeparatorLanding from "$lib/SeparatorLanding.svelte";
    import ProdutoLanding from "$lib/ProdutoLanding.svelte";
    import CursoLanding from "$lib/CursoLanding.svelte";
    import { servicos } from "$lib/data/servicosData.js";
    import { cursos } from "$lib/data/cursosData.js";
    import { fade } from 'svelte/transition';
    // images
    import banner from "$img/banner.png";
    import corte1 from "$img/pele1.png";
    import img1 from "$img/microSobrancelhas.png";
    import img2 from "$img/mlabial.png";
    import img3 from "$img/pele1.png";
    import img4 from "$img/mlabial.png";
    import novidades from "$img/novidades.png";
    import cartierLogo from "$img/Catier.png";
    import gucciLogo from "$img/Gucci.png";
    import tiffanyLogo from "$img/Tiffany.png";
    import novidades2 from "$img/novidades2.png";
    import product1 from "$img/product1.png";
    import logo from "$img/logo.png";

    let selectedType = 'Tudo';

    function filterServicos(type) {
        selectedType = type;
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<main>
    <header>
        <Header />
    </header>

    <section id="main_content" class="flex flex-col items-center bg-slate-50">
        <div id="banner" class="w-full flex flex-col items-center">
            <img src={banner} alt="Banner" class="w-full" />

            <a
                href="#servicos"
                class="relative bottom-16 px-6 py-2 rounded-full text-white text-lg bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0" on:click={(event) => { event.preventDefault(); scrollToSection('servicos'); }}
                >EXPLORAR COLEÇÃO</a
            >
        </div>

        <div id="servicos" class="w-full pb-4 flex flex-col gap-6 items-center">
            <h2 class="text-2xl tracking-widest">SERVIÇOS</h2>
            <nav class="w-full flex flex-wrap justify-center text-lg text-slate-500 gap-2 px-4">
                <button class={selectedType === 'Tudo' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Tudo')}>Tudo</button>
                <button class={selectedType === 'Pele' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Pele')}>Pele</button>
                <button class={selectedType === 'Lábios' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Lábios')}>Lábios</button>
                <button class={selectedType === 'Olhar' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Olhar')}>Olhar</button>
                <button class={selectedType === 'Cabelos' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Cabelos')}>Cabelos</button>
                <button class={selectedType === 'Unhas' ? 'text-slate-700 underline underline-offset-8' : ''} on:click={() => filterServicos('Unhas')}>Unhas</button>
            </nav>
            <div class="w-full flex flex-wrap items-center justify-center gap-4">
                {#each servicos.filter((servico, index) => selectedType !== 'Tudo' || index < 6) as servico (servico.text)}
                    {#if selectedType === 'Tudo' || selectedType === servico.type}
                        <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
                            <ServicoCard {servico} />
                        </div>
                    {/if}
                {/each}
            </div>
            <a href="#produtos" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('produtos'); }}>Explore mais <IconArrowRight/></a>
        </div>

        <SeparatorLanding/>

        <div id="marcas" class="w-full pb-4 flex flex-col gap-6 items-center">
            <h2 class="text-lg tracking-widest">MAGCOLORPIGMENTOS</h2>
            <div class="w-full px-4 flex flex-wrap items-center justify-center gap-6">
                <img src={cartierLogo} alt="Cartier">
                <img src={gucciLogo} alt="Gucci">
                <img src={tiffanyLogo} alt="Tiffany">
            </div>
        </div>

        <SeparatorLanding/>
        
        <div id="novidades" class="w-full pb-4 flex flex-col gap-6 items-center">
            <h2 class="text-2xl tracking-widest">NOVIDADES</h2>
            <div class="w-full flex flex-col gap-2">
                <img src={novidades} alt="Curso">
                <img src={novidades2} alt="Video">
            </div>
        </div>
        
        <SeparatorLanding/>

        <div id="produtos" class="w-full pb-4 flex flex-col gap-6 items-center">
            <h2 class="text-2xl tracking-widest">PRODUTOS</h2>
            <div class="w-full flex overflow-x-auto items-center justify-center gap-4 pl-[35%] py-4">
                <ProdutoLanding image={product1} title='Harris Tweed Three button Jacket' price='120'/>
                <ProdutoLanding image={product1} title='Harris Tweed Three button Jacket' price='120'/>
                <ProdutoLanding image={product1} title='Harris Tweed Three button Jacket' price='120'/>
                <ProdutoLanding image={product1} title='Harris Tweed Three button Jacket' price='120'/>
            </div>
            <a href="/" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('produtos'); }}>Explore mais <IconArrowRight/></a>
        </div>

        <div id="cursos" class="w-full pb-4 flex flex-col gap-6 items-center">
            <h2 class="text-2xl tracking-widest">CURSOS</h2>
            <div class="w-full flex overflow-x-auto items-center justify-center gap-4 pl-[35%] py-4">
                {#each cursos as curso}
                    <CursoLanding {curso} />
                {/each}
            </div>
            <a href="#servicos" class="flex items-center" on:click={(event) => { event.preventDefault(); scrollToSection('servicos'); }}>Explore mais <IconArrowRight/></a>
        </div>

        <div id="tendencias" class="w-full bg-slate-100 py-4 flex flex-col gap-2 items-center">
            <h2 class="text-2xl tracking-widest">@TENDÊNCIAS</h2>
            <div class="w-full flex flex-wrap items-center justify-start gap-2 py-4 px-8">
                <a href="/" class="px-4 py-2 text-slate-700 bg-white rounded-full">#2025</a>
                <a href="/" class="px-4 py-2 text-slate-700 bg-white rounded-full">#beleza</a>
                <a href="/" class="px-4 py-2 text-slate-700 bg-white rounded-full">#produtos</a>
                <a href="/" class="px-4 py-2 text-slate-700 bg-white rounded-full">#pele</a>
                <a href="/" class="px-4 py-2 text-slate-700 bg-white rounded-full">#cilios</a>
                <a href="/" class="px-4 py-2 text-slate-700 bg-white rounded-full">#sobrancelhas</a>
                <a href="/" class="px-4 py-2 text-slate-700 bg-white rounded-full">#labios</a>
            </div>
        </div>

        <div id="espaco" class="w-full bg-slate-50 py-4 flex flex-col gap-8 items-center">
            <img src={logo} alt="Logo" class="max-w-40">
            <div class="w-full flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                <span class="flex flex-col items-center text-center justify-center gap-2 max-w-44">
                    <img src={gucciLogo} alt="Logo">
                    <p>Ambiente aconchegante e acolhedor</p>
                </span>
                <span class="flex flex-col items-center text-center justify-center gap-2 max-w-44">
                    <img src={gucciLogo} alt="Logo">
                    <p>Você merece o melhor todos os dias</p>
                </span>
                <span class="flex flex-col items-center text-center justify-center gap-2 max-w-44">
                    <img src={gucciLogo} alt="Logo">
                    <p>Espaços elegantes e sofisticados</p>
                </span>
                <span class="flex flex-col items-center text-center justify-center gap-2 max-w-44">
                    <img src={gucciLogo} alt="Logo">
                    <p>Meu momento nosso compromisso</p>
                </span>
            </div>
        </div>
    </section>

    <footer class="w-full px-4 pt-8 pb-2 gap-6 flex flex-col bg-rose-200">
        <div class="w-full px-8 flex justify-around">
            <IconBrandTwitterFilled size="32" color="#334155" />
            <a href="https://www.instagram.com/espacopauladiniz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <IconBrandInstagramFilled size="32" color="#334155" />
            </a>
            <IconBrandYoutubeFilled size="32" color="#334155" />
        </div>
        <div class="w-2/5 self-center flex items-center justify-center gap-2">
            <div class="w-20 border-b border-b-slate-500 border-solid"></div>
            <IconDiamond />
            <div class="w-20 border-b border-b-slate-500 border-solid"></div>
        </div>
        <div class="flex flex-col text-center">
            <a
                class="text-slate-700 text-lg"
                href="mailto:espaçopauladiniz@gmail.com"
                >espaçopauladiniz@gmail.com</a
            >
            <a class="text-slate-700 text-lg" href="tel:81992401038">
                (81) 99240-1038</a
            >
            <span class="text-slate-700 text-lg">
                08:00 - 22:00 de Segunda à Sexta
            </span>
        </div>
        <SeparatorLanding/>
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
