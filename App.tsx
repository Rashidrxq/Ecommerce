
import React, { useState, useCallback } from 'react';
import type { Product, CartItem } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import CartPanel from './components/CartPanel';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleToggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const handleAddToCart = useCallback((product: Product, selectedSize: string, selectedColor: string, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.cartItemId === existingItem.cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newCartItem: CartItem = {
          ...product,
          quantity,
          selectedSize,
          selectedColor,
          cartItemId: `${product.id}-${selectedSize}-${selectedColor}-${Date.now()}`
        };
        return [...prevCart, newCartItem];
      }
    });
    setSelectedProduct(null); // Close modal after adding to cart
    setIsCartOpen(true); // Open cart panel to show the new item
  }, []);
  
  const handleRemoveFromCart = useCallback((cartItemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  }, []);

  const handleUpdateQuantity = useCallback((cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(cartItemId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }, [handleRemoveFromCart]);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header cartItemCount={cartItemCount} onCartClick={handleToggleCart} />
      <main>
        <Hero />
        <ProductGrid products={PRODUCTS} onProductClick={handleProductClick} />
      </main>
      <Footer />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartPanel
        isOpen={isCartOpen}
        onClose={handleToggleCart}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default App;
