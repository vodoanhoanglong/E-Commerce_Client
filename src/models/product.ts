export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  qtyStock: number;
}

export interface CartProduct {
  product: Product;
  quantity: number;
  subTotal: number;
}
