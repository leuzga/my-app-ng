import { Directive, ElementRef, input, effect } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {
  appCopyright = input<string>('My First Application');

  private targetEl: HTMLElement;

  constructor(el: ElementRef) {
    this.targetEl = el.nativeElement;
    this.targetEl.classList.add('copyright');

    effect(() => {
      this.updateCopyright(this.appCopyright());
    });
  }

  private updateCopyright(appName: string): void {
    const currentYear = new Date().getFullYear();
    this.targetEl.textContent = `Copyright © ${currentYear} ${appName}. All rights reserved.`;
  }
}