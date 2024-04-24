import { createContext, ReactNode, useContext, useState } from "react";

type CardProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id: number;
  qty: number;
};
type CartContext = {
  getItemQty: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext({} as CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CardProvider = ({ children }: CardProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };
  const addItem = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, qty: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItem = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.qty == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItem = (id: number) => {};

  return (
    <CartContext.Provider
      value={{ getItemQty, addItem, decreaseItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
