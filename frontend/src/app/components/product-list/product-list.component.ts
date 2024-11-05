import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductPage } from '../../models/product-page.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productPage: ProductPage = { products: [], pages: 0 };
  page: number = 0;
  size: number = 10;
  totalPages: number = 0;
  
  filterName: string = '';
  filterAvailable: boolean | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts(this.page);
  }

  loadProducts(page: number) {
    this.productService.getProducts(page, this.size, this.filterName, this.filterAvailable).subscribe((data) => {
      this.productPage = data;
      this.totalPages = data.pages;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts(this.page);
    });
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.loadProducts(this.page);
    }
  }

  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadProducts(this.page);
    }
  }

  createProduct() {
    this.router.navigate(['/add']);
  }

  applyFilters() {
    this.page = 0; // Reseta para a primeira página ao aplicar filtros
    this.loadProducts(this.page);
  }
}
