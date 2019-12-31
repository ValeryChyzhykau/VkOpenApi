import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Session } from 'protractor';

declare const VK: any;

@Injectable()
export class VkLoginService {
  constructor() {}

  init() {
    VK.init({ apiId: environment.vk.apiId });
  }

  checkStatus(): Observable<boolean> {
    return new Observable<boolean>(response => {
      VK.Auth.getLoginStatus((res: { status: string }) => {
        console.log(res);
        if (res && res.status === 'connected') {
          console.log(res);
          response.next(true);
        } else {
          console.log(res);
          response.next(false);
        }
      });
    });
  }

  login(): Observable<boolean> {
    return new Observable<boolean>(response => {
      VK.Auth.login((res: { session: Session; }) => {
        console.log(res);
        if (res.session) {
          response.next(true);
        } else {
          response.next(false);
        }
      });
    });
  }
  logout(): Observable<boolean> {
    return new Observable<boolean>(response => {
      VK.Auth.logout((res: { session: Session; }) => {
        if (res.session === null) {
          response.next(true);
        } else {
          alert('Logout Error');
        }
      });
    });
  }
}
