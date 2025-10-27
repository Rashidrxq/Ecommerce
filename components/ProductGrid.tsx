
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <div id="products" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Our Collection</h2>
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
