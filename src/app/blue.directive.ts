import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'blue';
  }
}