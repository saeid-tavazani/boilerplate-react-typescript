import { createContext, ReactNode, useContext } from "react";

type CardProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CardProvider = ({ children }: CardProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
