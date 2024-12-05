<script>
    export let image = '';
    export let link = '';
    export let text = '';
</script>

<a href={link || '/'} class="relative max-w-40 h-60 overflow-hidden rounded-lg">
    <img src={image} alt="Imagem de Serviço"/>
    <div class="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden bg-fixed" style="background-color: hsla(0, 0%, 0%, 0.4)">
        <div class="flex h-full items-center justify-center text-sm text-center">
            <p class="text-white opacity-100">{text}</p>
        </div>
    </div>
</a>