import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appStyle') color = 'blue';

  @Input('dStyles') dStyles: { border?: string; fontWeight?: string; borderRadius?: string };

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.element.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.renderer.setStyle(this.element.nativeElement, 'border', this.dStyles.border);
    this.renderer.setStyle(this.element.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', null);
    this.renderer.setStyle(this.element.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.element.nativeElement, 'border', null);
    this.renderer.setStyle(this.element.nativeElement, 'borderRadius', null);
  }
}
