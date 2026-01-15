import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {
  @HostBinding('class') currentClass = '';

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const isNumeric = /^\d$/.test(event.key);
    this.currentClass = isNumeric ? 'valid' : 'invalid';
    !isNumeric && event.preventDefault();
  }
}