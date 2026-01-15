import { Directive, ElementRef, input, effect } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {
  appCopyright = input<string>('My First Application');

  private targetEl: HTMLElement;
  private copyrightSpan: HTMLSpanElement | null = null;

  constructor(el: ElementRef) {
    this.targetEl = el.nativeElement;
    this.targetEl.classList.add('copyright');

    effect(() => {
      this.updateCopyright(this.appCopyright());
    });
  }

  private updateCopyright(appName: string): void {
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright © ${currentYear} ${appName}. All rights reserved.`;

    if (!this.copyrightSpan) {
      this.copyrightSpan = document.createElement('span');
      this.targetEl.insertBefore(this.copyrightSpan, this.targetEl.firstChild);
    }
    this.copyrightSpan.textContent = copyrightText;
  }
}