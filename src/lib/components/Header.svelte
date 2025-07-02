<script>
    import { Hamburger } from "svelte-hamburgers";
    import MenuHamburguer from "./MenuHamburguer.svelte";
    import logo from "$img/img/seuestilo.svg"
    import cartIcon from "$img/cart.svg"
    import { IconSearch } from "@tabler/icons-svelte";
    import { cart as cartStore } from '../stores/cartStore.js';
    import { onDestroy } from 'svelte';
    export let onOpenCart = () => {};
    let open = false;

    let cartFloatPos = { top: '50%', left: '', right: '2rem', bottom: '' };
    let dragging = false;
    let offset = { x: 0, y: 0 };
    let cartFloatEl;

    function addWindowListeners() {
        if (typeof window !== 'undefined') {
            window.addEventListener('mousemove', onDragMove);
            window.addEventListener('mouseup', onDragEnd);
            window.addEventListener('touchmove', onDragMove);
            window.addEventListener('touchend', onDragEnd);
        }
    }
    function removeWindowListeners() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('mousemove', onDragMove);
            window.removeEventListener('mouseup', onDragEnd);
            window.removeEventListener('touchmove', onDragMove);
            window.removeEventListener('touchend', onDragEnd);
        }
    }
    onDestroy(removeWindowListeners);

    function onDragStart(e) {
        dragging = true;
        const rect = cartFloatEl.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        offset = {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
        document.body.style.userSelect = 'none';
        cartFloatEl.style.transition = 'none'; // Remove transição para precisão
        addWindowListeners();
    }
    function onDragMove(e) {
        if (!dragging) return;
        let clientX, clientY;
        if (e.touches && e.touches.length) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const left = clientX - offset.x;
        const top = clientY - offset.y;
        cartFloatPos = {
            top: top + 'px',
            left: left + 'px',
            right: '',
            bottom: ''
        };
    }
    function onDragEnd() {
        dragging = false;
        document.body.style.userSelect = '';
        if (cartFloatEl) cartFloatEl.style.transition = '';
        removeWindowListeners();
    }

    $: cart = $cartStore;
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

<!-- Carrinho flutuante arrastável -->
<!-- <div
    class="cart-float{open ? ' cart-float--hidden' : ''}"
    bind:this={cartFloatEl}
    on:mousedown={onDragStart}
    on:touchstart={onDragStart}
    on:click={onOpenCart}
    tabindex="0"
    role="button"
    aria-label="Abrir carrinho"
    style="top: {cartFloatPos.top}; left: {cartFloatPos.left}; right: {cartFloatPos.right}; bottom: {cartFloatPos.bottom}; transform: translateY(-50%);"
>
    <img id="cart" src={cartIcon} alt="Carrinho" class="cart-float-img" />
</div> -->

<!-- Carrinho fixo no topo direito -->
<div
    class="cart-fixed-top-right{open ? ' cart-float--hidden' : ''}"
    on:click={onOpenCart}
    tabindex="0"
    role="button"
    aria-label="Abrir carrinho (fixo)"
>
    <img src={cartIcon} alt="Carrinho" class="cart-float-img" />
</div>

<MenuHamburguer bind:open />

<style>
    header {
        align-items: center;
        justify-content: center;
    }

    .hamburguer-icon {
        display: none;
        z-index: 1001;
        cursor: pointer;
        color: wheat;
    }

    img {
        margin-top: 1.5rem;
        width: 180px;
    }

    #cart {
        position: relative;
        top: -0.65rem;
    }

    .cart-float {
        position: fixed;
        width: 6.5rem;
        height: 6.5rem;
        background: #e5e7eb;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
        cursor: grab;
        z-index: 9999;
        /* Removido transition para precisão no arraste */
        user-select: none;
        will-change: top, left;
    }

    .cart-float--hidden {
        display: none !important;
    }

    .cart-float-img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .cart-float:active {
        cursor: grabbing;
    }

    .cart-float:focus, .cart-float:hover {
        box-shadow: 0 4px 16px 0 rgba(104,178,97,0.18);
        outline: none;
    }

    .cart-fixed-top-right {
        position: fixed;
        top: 1.5rem;
        right: 1.5rem;
        width: 3.2rem;
        height: 3.2rem;
        background: #e5e7eb;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
        cursor: pointer;
        z-index: 9998;
        user-select: none;
        transition: box-shadow 0.2s;
        /* Centraliza absolutamente a imagem */
        padding: 0;
    }
    .cart-fixed-top-right img {
        display: block;
        margin: auto;
        width: 1.5rem;
        height: 1.5rem;
    }
    .cart-fixed-top-right:focus, .cart-fixed-top-right:hover {
        box-shadow: 0 4px 16px 0 rgba(104,178,97,0.18);
        outline: none;
    }

    @media (max-width: 600px) {
        .cart-float {
            width: 3rem;
            height: 3rem;
        }
    }

    /* Esconde o menu normal em telas menores */
    @media (max-width: 1000px) {
        .hamburguer-icon {
            display: block;
        }
    }
</style>