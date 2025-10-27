import React from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);


const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900 tracking-tight">
              Gemini<span className="text-indigo-600">Tees</span>
            </a>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Shop</a>
            <button onClick={onCartClick} className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Cart</button>
          </div>
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Open shopping cart"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center transform translate-x-1/3 -translate-y-1/3">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;