import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  text: string;

  log(p): void {
    this.text = p;
    console.log('Log → ', this.text);
  }
}
