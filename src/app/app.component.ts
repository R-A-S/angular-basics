import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic title';

  number = 42;

  arr = [1, 2, 3];

  obj = {
    a: 2,
  };

  img = 'https://image.flaticon.com/icons/svg/148/148766.svg';

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://image.flaticon.com/icons/svg/148/148767.svg';
    }, 5000);
  }
}
