import { ChangeDetectionStrategy, Component, input, OnChanges, OnDestroy, OnInit, output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CurrencyPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, KeyValuePipe, TitleCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  // encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnInit, OnDestroy, OnChanges {
  product = input<Product>();
  added = output<Product>();

  constructor() {
    console.log('ProductDetailComponent Constructor initialized', this.product());
  }

  ngOnInit(): void {
    console.log('ProductDetailComponent ngOnInit initialized', this.product());
  }
  ngOnDestroy(): void {
    console.log('ProductDetailComponent ngOnDestroy destroyed', this.product());
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ProductDetailComponent ngOnChanges changes', changes);
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log('Old value', oldValue);
      console.log('New value', newValue);
    }
  }

  onAddToCart() {
    this.added.emit(this.product()!);
  }

  get productTitle() {
    return this.product() ? this.product()!.title : 'No product selected';
  }
}
