import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }
}
