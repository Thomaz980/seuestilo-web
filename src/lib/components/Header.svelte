<script>
    import { Hamburger } from "svelte-hamburgers";
    import MenuHamburguer from "./MenuHamburguer.svelte";
    import logo from "$img/img/seuestilo.svg"
    import { IconSearch } from "@tabler/icons-svelte";

    let open = $state(false);
</script>

<header class="w-full px-4 lg:px-6 h-24 text-lg flex items-center justify-center bg-slate-50 border border-gray-50 rounded-2xl">       
        <div class="hamburguer-icon">
            <!-- <Hamburger
                    class="hamburguer-icon"
                    title="Toggle nav links"
                    ariaControls="nav"
                    type="spring"
                    --layer-spacing="8px"
                    --layer-height="2px"
                    --border-radius="10px"
                    --color="black"
                    bind:open
            /> -->
            <img src={logo} alt="Logo">
        </div>    
        <!-- <nav>
            <a href="/">Sobre</a>
            <a href="/">Contato</a>
            <a href="/">Blog</a>
        </nav> -->
        <!-- <IconSearch/> -->
</header>
<MenuHamburguer bind:open />

<style>
    header {
        align-items: center;
        justify-content: center;
    }

    .hamburguer-icon {
        display: none;
        z-index: 1000;
        cursor: pointer;
        color: wheat;
    }

    img {
        margin-top: 1.5rem;
        width: 180px;
    }

    /* Esconde o menu normal em telas menores */
    @media (max-width: 1000px) {
        .hamburguer-icon {
            display: block;
        }
    }
</style>