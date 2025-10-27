
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  cartItemId: string; // Unique ID for the cart item instance
}
