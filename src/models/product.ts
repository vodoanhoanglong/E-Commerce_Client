export interface ProductImage {
  id?: string;
  url: string;
}
export interface PaginationData {
  totalElements: number;
  currentPage: number;
  totalPages: number;
  perPage: number;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  images: ProductImage[];
  price: number;
  quantityStore: number;
}
export interface Category {
  id: string;
  alias: string;
  name: string;
  description: string;
}

export interface CartProduct {
  product: Product;
  quantity: number;
  subTotal: number;
}
