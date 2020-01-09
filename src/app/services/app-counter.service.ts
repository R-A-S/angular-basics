import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class AppCounterService {
  counter = 0;

  constructor(private logService: LogService) {}

  increase(): void {
    this.logService.log('increase counter');
    this.counter += 1;
  }

  decrease(): void {
    this.logService.log('decrease counter');
    this.counter -= 1;
  }
}
