import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const initialCart = [
  {
    id: "1",
    name: "Graphic Graphic T-Shirt",
    image: "/images/product-1.png",
    price: 49,
    size: "M",
    color: "Blue",
    quantity: 1,
  },
  {
    id: "2",
    name: "Checkered Shirt",
    image: "/images/product-5.png",
    price: 50,
    size: "L",
    color: "Navy",
    quantity: 1,
  },
  {
    id: "3",
    name: "Skinny Fit Jeans",
    image: "/images/product-4.png",
    price: 50,
    size: "32",
    color: "Blue",
    quantity: 1,
  },
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };
  

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const addToCart = (product, selectedSize, selectedColor) => {
    setCartItems((items) => {

      const existingItem = items.find(
        (item) =>
          item.id === product.id &&
          item.size === selectedSize &&
          item.color === selectedColor
      );

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id &&
          item.size === selectedSize &&
          item.color === selectedColor
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...items,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          size: selectedSize,
          color: selectedColor,
          quantity: 1,
        },
      ];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context= useContext(CartContext); 
  return context;
};