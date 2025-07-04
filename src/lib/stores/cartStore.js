import { writable } from 'svelte/store';

const stored = typeof localStorage !== 'undefined' && localStorage.getItem('cart');
const initial = stored ? JSON.parse(stored) : [];

export const cart = writable(initial);

cart.subscribe(items => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(items));
    }
});

export function addToCart(item) {
    cart.update(items => {
        const idx = items.findIndex(i => i.id === item.id && i.tamanho === item.tamanho && i.cor === item.cor);
        if (idx > -1) {
            items[idx].quantidade += 1;
            return [...items];
        }
        return [...items, { ...item, quantidade: 1 }];
    });
}

export function removeFromCart(id, tamanho, cor) {
    cart.update(items => items.filter(i => !(i.id === id && i.tamanho === tamanho && i.cor === cor)));
}

export function changeQuantity(id, tamanho, cor, delta) {
    cart.update(items => {
        return items.map(i => {
            if (i.id === id && i.tamanho === tamanho && i.cor === cor) {
                return { ...i, quantidade: Math.max(1, (i.quantidade || 1) + delta) };
            }
            return i;
        });
    });
}
