import { AfterViewInit, Component, viewChild, ViewChild } from '@angular/core';

import { Product } from '../../interfaces/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../../shared/pipes/sort.pipe';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {
  products: Product[] = [
    {
      id: 1,
      title: 'Keyboard',
      price: 100,
      categories: {
        1: 'Computing',
        2: 'Peripherals'
      }
    },
    {
      id: 2,
      title: 'Microphone',
      price: 35,
      categories: {
        3: 'Multimedia'
      }
    },
    {
      id: 3,
      title: 'Web Camera',
      price: 70,
      categories: {
        3: 'Multimedia',
        2: 'Peripherals'
      }
    },
    {
      id: 4,
      title: 'Headphones',
      price: 85,
      categories: {
        3: 'Multimedia',
        2: 'Peripherals'
      }
    },
    {
      id: 5,
      title: 'Mouse',
      price: 50,
      categories: {
        1: 'Computing',
        2: 'Peripherals'
      }
    },
    {
      id: 6,
      title: 'Laptop',
      price: 1200,
      categories: {
        1: 'Computing'
      }
    },
    {
      id: 7,
      title: 'Tablet',
      price: 600,
      categories: {
        1: 'Computing'
      }
    },
    {
      id: 8,
      title: 'Smartphone',
      price: 800,
      categories: {
        1: 'Computing'
      }
    },
    {
      id: 9,
      title: 'Speaker',
      price: 150,
      categories: {
        3: 'Multimedia'
      }
    },
    {
      id: 10,
      title: 'Router',
      price: 100,
      categories: {
        1: 'Computing'
      }
    }
  ];

  sortBy: keyof Product = 'title';
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
