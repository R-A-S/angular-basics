import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfnotDirective {
  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      // Show elements
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Hide elements
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
