<script>
    import logo from "$img/img/seuestilo.svg";
    import gucciLogo from "$img/Gucci.png";
    import miroodles from "$img/miroodles.png";
    import plants from "$img/plantsMiroodles.png";
    import sticker from "$img/stickerMiro.png";
    import heart from "$img/heartMiro.png";
    import separator from "$img/separator.png";
</script>
<div id="espaco" class="w-full bg-slate-55 py-1 flex flex-col gap-8 items-center pl-1">
    <img src={logo} alt="Logo" class="max-w-[10rem]">
    <span id="slogan" class="text-center">A sua aparência fala muito sobre você.</span>
    <div class="w-full flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500">
        <span class="flex flex-col items-center text-center justify-center gap-4 max-w-44">
            <img src={miroodles} alt="Image">    
            <p>Ambiente aconchegante e acolhedor</p>
        </span>
        <span class="flex flex-col items-center text-center justify-center gap-4 max-w-44">
            <img src={plants} alt="Image">    
            <p>Você merece o melhor todos os dias</p>
        </span>
        <span class="flex flex-col items-center text-center justify-center gap-4 max-w-44">
            <img src={sticker} alt="Image">    
            <p>Espaços elegantes e sofisticados</p>
        </span>
        <span class="flex flex-col items-center text-center justify-center gap-4 max-w-44">
            <img src={heart} alt="Image">    
            <p>Seu momento, nosso compromisso</p>
        </span>
    </div>
    <img src={separator} alt="separator image">
</div>

<style>
    #slogan{
        margin-top: -3.5rem;
    }
</style>
