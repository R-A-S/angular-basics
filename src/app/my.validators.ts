import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

interface RestrictedEmail {
  [key: string]: boolean;
}

export class MyValidators {
  static restrictedEmails(control: FormControl): RestrictedEmail {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return { restrictedEmail: true };
    }
    return null;
  }

  static uniqEmail(
    control: FormControl,
  ): Promise<RestrictedEmail> | Observable<RestrictedEmail> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({ uniqEmail: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
