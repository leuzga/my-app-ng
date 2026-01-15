import { Product }                                     from '../../interfaces/product';
import { toSignal }                                    from '@angular/core/rxjs-interop';
import { SlicePipe }                                   from '@angular/common';
import { ProductsService }                             from '../../shared/services/products.service';
import { Component, inject, OnInit, Optional, signal } from '@angular/core';

@Component({
  selector: 'app-favorites',
  imports: [SlicePipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  @Optional()
  private readonly productsService = inject(ProductsService);
  products = signal<Product[]>(this.productsService.getProducts());
}
