"use client";
import { useState } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import ShoppingCart from "../components/ShoppingCart";
import { menuItems } from "../libs/menuData";
import { CartItem } from "../libs/types";

export default function Home() {
  // Cart state - this is where we store all cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Function to add item to cart
  const addToCart = (item: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => {
    setCartItems((currentCart) => {
      // Check if item already exists in cart
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If exists, increase quantity
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If new item, add to cart with quantity 1
        return [...currentCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to update quantity of item in cart
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems((currentCart) =>
        currentCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Function to remove item from cart
  const removeFromCart = (id: number) => {
    setCartItems((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 mb-8">
            Flame-grilled perfection in every bite
          </p>
        </div>

        {/* Main content with menu and cart */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Menu section (3/4 width on large screens) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {menuItems
                .filter((item) => item.available)
                .map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    onAddToCart={addToCart}
                  />
                ))}
            </div>
          </div>

          {/* Cart section (1/4 width on large screens) */}
          <div className="lg:col-span-1">
            <ShoppingCart
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
