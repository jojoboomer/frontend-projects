// cart.store.ts
import datajson from "@/data/shop-data.json";
import { persistentAtom } from "@nanostores/persistent";
import { computed } from "nanostores";

// Definiciones de tipos (iguales que antes)
export interface Item {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

export interface ItemOnCart {
    name: string;
    img: string;
    price: number;
    quantity: number;
    total: number;
}

type ItemEntry = {
    name: string;
    price: number;
    img: string;
}

type Cart = ItemOnCart[];
type ProductsList = Item[];

// --- Estado Agrupado ---
export interface State {
    products: ProductsList;
    cart: Cart;
    count: number;
    total: number;
}

// --- Átomo Persistente Agrupado (única llave en localStorage) ---
// Este átomo contiene todo el estado que queremos persistir juntos.
const $internalCartStore = persistentAtom<State>('cart-app-state:', {
    // Valor inicial
    products: datajson,
    cart: [],
    count: 0,
    total: 0,
}, {
    // Opciones de codificación/decodificación
    encode: (val: State) => JSON.stringify(val),
    decode: (str: string): State => {
        try {
            const parsed = JSON.parse(str);
            // Validación básica de la estructura
            return {
                products: Array.isArray(parsed.products) ? parsed.products : datajson,
                cart: Array.isArray(parsed.cart) ? parsed.cart.map(item => ({
                    name: typeof item.name === 'string' ? item.name : '',
                    img: typeof item.img === 'string' ? item.img : '',
                    price: typeof item.price === 'number' ? item.price : 0,
                    quantity: typeof item.quantity === 'number' ? item.quantity : 0,
                    total: typeof item.total === 'number' ? item.total : 0,
                })) : [],
                count: typeof parsed.count === 'number' ? parsed.count : 0,
                total: typeof parsed.total === 'number' ? parsed.total : 0,
            };
        } catch (e) {
            console.error("Error parsing state from localStorage in internal persistentAtom:", e);
            // Retornar estado inicial limpio en caso de error
            return {
                products: datajson,
                cart: [],
                count: 0,
                total: 0,
            };
        }
    }
});

// --- Átomos Computados (Selectores) ---
// Estos átomos se derivan del átomo persistente agrupado.
// Permiten usar `useStore($cart)`, `useStore($count)`, etc., en los componentes.
export const $products = computed($internalCartStore, state => state.products);
export const $cart = computed($internalCartStore, state => state.cart);
export const $count = computed($internalCartStore, state => state.count);
export const $total = computed($internalCartStore, state => state.total);

// --- Funciones de Acción ---
// Estas funciones siguen trabajando con el átomo interno agrupado.
// Cada acción lee el estado completo, lo modifica y lo guarda completo.

/**
 * Agrega un artículo al carrito o incrementa su cantidad si ya existe.
 * Actualiza count y total en el estado agrupado.
 */
export function addCount(newItem: ItemEntry): void {
    const state = $internalCartStore.get(); // Obtenemos el estado completo
    const { name, price, img } = newItem;

    const existingItemIndex = state.cart.findIndex(item => item.name === name);

    let newCart: Cart;
    let newCount = state.count;
    let newTotal = state.total;

    if (existingItemIndex >= 0) {
        // Artículo ya existe, actualizamos cantidad y total en el carrito
        newCart = [...state.cart]; // Creamos una copia
        const item = newCart[existingItemIndex];
        item.quantity++;
        item.total = item.quantity * item.price;
    } else {
        // Artículo nuevo, lo agregamos
        const newItemOnCart: ItemOnCart = {
            name,
            price,
            quantity: 1,
            total: price,
            img,
        };
        newCart = [...state.cart, newItemOnCart];
    }

    // Actualizamos count y total
    newCount += 1;
    newTotal += price;

    // Establecemos el nuevo estado completo en el átomo interno
    $internalCartStore.set({
        ...state,
        cart: newCart,
        count: newCount,
        total: newTotal,
    });
}

/**
 * Elimina un artículo del carrito o decrementa su cantidad.
 * Actualiza count y total en el estado agrupado.
 */
export function deleteCount(itemToRemove: { name: string; price: number }): void {
    const state = $internalCartStore.get(); // Obtenemos el estado completo
    const { name, price } = itemToRemove;

    const existingItemIndex = state.cart.findIndex(item => item.name === name);

    if (existingItemIndex >= 0) {
        let newCart: Cart;
        let newCount = state.count;
        let newTotal = state.total;

        const item = state.cart[existingItemIndex];

        if (item.quantity === 1) {
            // Si la cantidad es 1, eliminamos el artículo
            newCart = state.cart.filter((_, index) => index !== existingItemIndex);
        } else {
            // Si hay más de 1, decrementamos la cantidad
            newCart = [...state.cart]; // Creamos una copia
            const updatedItem = { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price };
            newCart[existingItemIndex] = updatedItem;
        }

        // Actualizamos count y total
        newCount -= 1;
        newTotal -= price;

        // Establecemos el nuevo estado completo en el átomo interno
        $internalCartStore.set({
            ...state,
            cart: newCart,
            count: newCount,
            total: newTotal,
        });
    }
}

/**
 * Limpia completamente el carrito y reinicia count y total.
 */
export function clearCart(): void {
    const currentState = $internalCartStore.get();
    $internalCartStore.set({
        ...currentState, // Mantenemos otros campos como 'products' si es necesario
        cart: [],
        count: 0,
        total: 0,
    });
}

/**
 * Remueve un artículo específico del carrito por su nombre.
 * Actualiza count y total basado en la cantidad removida en el estado agrupado.
 */
export function removeItem(name: string): void {
    const state = $internalCartStore.get(); // Obtenemos el estado completo

    const itemIndex = state.cart.findIndex(item => item.name === name);

    if (itemIndex >= 0) {
        const item = state.cart[itemIndex];
        const newCart = state.cart.filter((_, index) => index !== itemIndex); // Creamos copia sin el item

        // Calculamos cuánto restar del total y del contador
        const quantityToRemove = item.quantity;
        const priceToRemove = item.price * quantityToRemove;

        const newCount = state.count - quantityToRemove;
        const newTotal = state.total - priceToRemove;

        // Establecemos el nuevo estado completo en el átomo interno
        $internalCartStore.set({
            ...state,
            cart: newCart,
            count: newCount,
            total: newTotal,
        });
    }
}

// --- Cómo usarlo en un componente React ---
// Ahora puedes usar los átomos computados como si fueran independientes,
// pero la persistencia ocurre en una sola llave ('cart-store-single-key:') gracias al átomo interno.
//
// Ejemplo:
// import { useStore } from '@nanostores/react';
// import { $cart, $count, $total, addCount, removeItem } from '@/stores/cart.store';
//
// const SomeComponent = () => {
//   const cartItems = useStore($cart); // Escucha cambios solo en .cart del estado agrupado
//   const count = useStore($count);   // Escucha cambios solo en .count
//   const total = useStore($total);   // Escucha cambios solo en .total
//
//   // ... renderizado y manejo de eventos ...
//   const handleAdd = (item: ItemEntry) => addCount(item);
//   // ...
// };