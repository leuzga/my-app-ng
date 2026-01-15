import { Product }            from '../../interfaces/product';
import { ProductsService }    from './products.service';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class ProductViewService {
  private product: Product | undefined;

  private readonly productService = inject(ProductsService);

  getProductById(id: number): Product | undefined {
    return this.product ??= this.productService.getProducts().find(p => p.id === id);
  }
}
