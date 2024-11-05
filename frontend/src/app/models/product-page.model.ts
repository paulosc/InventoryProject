import { Product } from './product.model'; 

export interface ProductPage {
    products: Product[]; // Lista de produtos
    pages: number;  // Total de páginas
}
