import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, ModalComponent, RefDirective],
  imports: [BrowserModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

//TODO
// ng add @angular/pwa
// ng build --prod
// npm i http-server -g
// cd dist
// cd <your project folder name>
// http-server -p 8080
