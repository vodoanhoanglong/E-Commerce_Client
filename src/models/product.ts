export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  qtyStock: number;
  status: string;
}

export interface CartProduct {
  product: Product;
  quantity: number;
  subTotal: number;
}
