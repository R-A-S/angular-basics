import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter = 0;

  increase(): void {
    this.counter += 1;
  }

  decrease(): void {
    this.counter -= 1;
  }
}
