
import React from 'react';
import type { CartItem } from '../types';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (cartItemId: string) => void;
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
}

const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const CartPanel: React.FC<CartPanelProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity ${isOpen ? 'ease-in-out duration-500' : 'ease-in-out duration-500'}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className={`absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose}></div>
      
      <div className={`fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-500`}>
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={onClose}>
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                  ) : (
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.cartItemId} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3><a href="#">{item.name}</a></h3>
                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{item.selectedColor}</p>
                              <p className="mt-1 text-sm text-gray-500">Size: {item.selectedSize}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex items-center border border-gray-200 rounded">
                                    <button onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)} className="px-2 py-1 text-gray-500 hover:text-gray-700">-</button>
                                    <span className="px-3 text-gray-700">{item.quantity}</span>
                                    <button onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)} className="px-2 py-1 text-gray-500 hover:text-gray-700">+</button>
                                </div>
                              <div className="flex">
                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => onRemoveItem(item.cartItemId)}>Remove</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {cartItems.length > 0 && (
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                        or{' '}
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={onClose}>
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                        </p>
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
