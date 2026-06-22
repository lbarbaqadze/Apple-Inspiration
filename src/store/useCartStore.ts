import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string,
  name: string,
  price: string,
  number: string,
  img: string,
  color: string,
  quantity: number
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartItem = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            cart: currentCart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ cart: [...currentCart, { ...item, quantity: 1 }] });
        }
      },

      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) return;
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
      },
    }),
    {
      name: 'apple-store-cart', 
    }
  )
);