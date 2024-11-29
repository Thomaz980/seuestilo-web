<script>
    import { Hamburger } from "svelte-hamburgers";
    import MenuHamburguer from "./MenuHamburguer.svelte";
    import logo from "../images/logo.png"
    import { IconSearch } from "@tabler/icons-svelte";

    let open = $state(false);
</script>

<header class="w-full px-4 lg:px-6 h-24 text-lg flex items-center justify-between bg-slate-50 border border-gray-50 rounded-2xl">       
        <div class="hamburguer-icon">
            <Hamburger
                    class="hamburguer-icon"
                    title="Toggle nav links"
                    ariaControls="nav"
                    type="spring"
                    --layer-spacing="8px"
                    --layer-height="2px"
                    --border-radius="10px"
                    --color="black"
                    bind:open
            />
        </div>    
        <img src={logo} alt="Logo">
        <nav>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
            <a href="#">Blog</a>
        </nav>
        <IconSearch/>
</header>
<MenuHamburguer class="hamburguer-menu" bind:open />

<style>
    .hamburguer-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: 0.3s ease;
    } 


    .hamburguer-icon {
        display: none;
        z-index: 1000;
        cursor: pointer;
        color: wheat;
    }

    .hamburguer-menu a {
        color: white;
        font-size: 24px;
        margin: 1rem 0;
    }

    /* Esconde o menu normal em telas menores */
    @media (max-width: 1000px) {
        nav {
            display: none;
        }

        .hamburguer-icon {
            display: block;
        }
    }
</style>