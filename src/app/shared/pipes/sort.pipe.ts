import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../interfaces/product';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], key: keyof Product): Product[] {
    return value?.slice().sort((a, b) =>
      String(a[key]).localeCompare(String(b[key]), undefined, { numeric: true })
    ) ?? [];
  }
}
