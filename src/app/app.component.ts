import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective, { static: false }) refDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta,
  ) {
    console.log(title.getTitle());
    title.setTitle('App Component Page....');

    meta.addTags([
      {
        name: 'keywords',
        content: 'angular, google, component',
      },
      {
        name: 'description',
        content: 'This is Angular!!!',
      },
    ]);
  }

  showModal(): void {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.title = 'Dynamic Title';
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}
