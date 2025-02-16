import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { Card } from './type/interface';

// Define o tipo de contexto do carrinho
export interface CartContextType {
  cart: Card[];
  addToCart: (item: Card) => void;
  removeQuantity: (item: Card) => void;
  removeCard: (id: number) => void;
}

// Cria um contexto para o carrinho
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Cria um provider para o carrinho
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Card[]>([]);
  

  // Adiciona um item ao carrinho e atualiza a quantidade se o item já estiver no carrinho ou adiciona um novo item
  const addToCart = useCallback((item: Card) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }, []
);

  // Remove uma unidade de um item do carrinho e remove o item se a quantidade for 0
  const removeQuantity = useCallback((item: Card) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity - 1,
        };
        if (updatedCart[existingItemIndex].quantity === 0) {
          updatedCart.splice(existingItemIndex, 1);
        }
        return updatedCart;
      } else {
        return prevCart;
      }
    });
  }, []);

  // Remove um item do carrinho
  const removeCard = useCallback((id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }, []);
  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeQuantity, removeCard }}>
      {children}
    </CartContext.Provider>
  );
};