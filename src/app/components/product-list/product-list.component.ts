import { AfterViewInit, Component, viewChild, ViewChild } from '@angular/core';

import { Product } from '../../interfaces/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {
  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web Camera' },
    { id: 4, title: 'Headphones' },
    { id: 5, title: 'Mouse' },
    { id: 6, title: 'Laptop' },
    { id: 7, title: 'Tablet' },
    { id: 8, title: 'Smartphone' },
    { id: 9, title: 'Speaker' },
    { id: 10, title: 'Router' }
  ];
  productDetail = viewChild(ProductDetailComponent);
  selectedProduct: Product | undefined = this.products[0];

  ngAfterViewInit(): void {
    console.log('ProductListComponent ngAfterViewInit', this.productDetail()!.product());
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }
  onAdded(product: Product) {
    alert(`${product.title} added to cart!`);
  }
}
