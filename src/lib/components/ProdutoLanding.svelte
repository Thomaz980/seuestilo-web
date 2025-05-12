<script>
    export let image = '';
    export let title = ''    
    export let price = '';
    export let link = '';
</script>

<a href={link || '/'} class="max-w-72 flex flex-col items-center gap-1 text-center">
    <img src={image} alt="Product" class="max-w-72">
    <span class="text-slate-700 text-lg">{title}</span>
    <span class="text-black-400 text-xl">R$ {price}</span>
</a>