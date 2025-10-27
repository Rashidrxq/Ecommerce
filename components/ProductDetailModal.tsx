
import React, { useState } from 'react';
import type { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
}

const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    if (quantity > 0) {
      onAddToCart(product, selectedSize, selectedColor, quantity);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 p-6 lg:p-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <div className="aspect-square rounded-lg bg-gray-100 overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="object-cover object-center w-full h-full" />
            </div>
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 id="modal-title" className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
            <section aria-labelledby="information-heading" className="mt-3">
              <p className="text-2xl text-gray-900">${product.price.toFixed(2)}</p>
              <div className="mt-6">
                <p className="text-base text-gray-700">{product.description}</p>
              </div>
            </section>
            
            <section aria-labelledby="options-heading" className="mt-6">
              <form>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Color</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    {product.colors.map(color => (
                      <label key={color} className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                        <input type="radio" name="color-choice" value={color} className="sr-only" checked={selectedColor === color} onChange={() => setSelectedColor(color)} />
                        <span className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${selectedColor === color ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`} style={{ backgroundColor: color.split(' ')[1] || color }}></span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">Size</h4>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    {product.sizes.map(size => (
                      <label key={size} className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer ${selectedSize === size ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'}`}>
                        <input type="radio" name="size-choice" value={size} className="sr-only" checked={selectedSize === size} onChange={() => setSelectedSize(size)} />
                        <span>{size}</span>
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleAddToCartClick}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
