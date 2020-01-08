import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { MultByPipe } from './pipes/mult-by.pipe';

@NgModule({
  declarations: [AppComponent, ExMarksPipe, MultByPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
