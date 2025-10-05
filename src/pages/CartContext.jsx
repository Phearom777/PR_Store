// CartContext.jsx
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite product
  const toggleFavorite = (product) => {
    console.log("Toggle favorite for:", product);

    const exists = favorites.find(
      (item) => Number(item.id) === Number(product.id)
    );

    if (exists) {
      console.log("Remove favorite", product.id);
      toast.success("Product Remove From Fav success");

      setFavorites(
        favorites.filter((item) => Number(item.id) !== Number(product.id))
      );
    } else {
      console.log("Add favorite", product.id);

      toast.success("Product Add to Fav success");
      setFavorites([...favorites, product]);
    }
  };

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existItem = prev.find((i) => i.id === item.id);
      if (existItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  // ➖ Decrease qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  // ➕ Increase qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ❌ Remove item
  // setCartItems((prev) => prev.filter((item) => item.id !== id));
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const deleted = prev.filter((item) => item.id !== id);
      if (deleted) {
        toast.success("🛒 Product remove success!");
      }
      return deleted;
    });
    //
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
