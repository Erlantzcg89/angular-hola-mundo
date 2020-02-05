import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() color: string;

  constructor(private element: ElementRef) {
    console.log('HelloDirective constructor');
  }

  @HostListener('mouseenter')
  publiconMouseEnter() {

    this.element.nativeElement.style.backgroundColor = this.color;

  }

  @HostListener('mouseleave')
  publiconMouseLeave() {

    this.element.nativeElement.style.backgroundColor = 'transparent';

  }

}
