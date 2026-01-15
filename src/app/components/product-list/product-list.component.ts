import { Product }                                                                from '../../interfaces/product';
import { SortPipe }                                                               from '../../shared/pipes/sort.pipe';
import { ProductsService }                                                        from '../../shared/services/products.service';
import { FavoritesComponent }                                                     from '../favorites/favorites.component';
import { ProductViewComponent }                                                   from '../product-view/product-view.component';
import { ProductDetailComponent }                                                 from '../product-detail/product-detail.component';
import { AfterViewInit, Component, inject, OnInit, signal, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe, FavoritesComponent, ProductViewComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService],
})
export class ProductListComponent implements AfterViewInit {
  private readonly productsService = inject(ProductsService);
  products = signal<Product[]>(this.productsService.getProducts());
  sortBy: keyof Product = 'title';
  productDetail = viewChild(ProductDetailComponent);
  selectedProduct: Product | undefined;

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
