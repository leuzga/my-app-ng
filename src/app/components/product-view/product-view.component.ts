import { Product }                            from '../../interfaces/product';
import { ProductViewService }                 from '../../shared/services/product-view.service';
import { Component, computed, inject, input } from '@angular/core';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService],
})
export class ProductViewComponent {
  id = input<number>();
  index = input<number>();
  private readonly productsService = inject(ProductViewService);
  product = computed(() => this.productsService.getProductById(this.id()!));
}
