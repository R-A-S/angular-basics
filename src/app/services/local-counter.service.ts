import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  counter = 0;

  increase(): void {
    this.counter += 1;
  }

  decrease(): void {
    this.counter -= 1;
  }
}
