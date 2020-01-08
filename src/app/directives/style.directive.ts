import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appStyle') color = 'blue';

  @Input('dStyles') dStyles: { border?: string; fontWeight?: string; borderRadius?: string };

  @HostBinding('style.color') elColor = null;

  @HostListener('mouseenter') onEnter(): void {
    this.elColor = this.color;
    // this.renderer.setStyle(this.element.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.renderer.setStyle(this.element.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.element.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.elColor = null;
    // this.renderer.setStyle(this.element.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.element.nativeElement, 'border', null);
    // this.renderer.setStyle(this.element.nativeElement, 'borderRadius', null);
  }
}
