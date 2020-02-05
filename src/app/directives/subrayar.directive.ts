import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar: string; // color

  constructor(private element: ElementRef) {
    console.log('SubrayarDirective constructor');
  }

  @HostListener('mouseenter')
  publiconMouseEnter() {

    this.element.nativeElement.style.color = this.appSubrayar;
    this.element.nativeElement.style.textDecoration = 'underline';

  }

  @HostListener('mouseleave')
  publiconMouseLeave() {

    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.textDecoration = 'none';

  }

}
