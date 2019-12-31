import { Injectable, ApplicationRef } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../core/models/user.model';
import {Friends } from '../../core/models/friends.model';

declare const VK: any;

@Injectable()
export class VkApiService {
  constructor(private app: ApplicationRef) {}

  getUser(): Observable<User> {
    return new Observable<User>(o => {
      VK.Api.call(
        'users.get',
        {
          fields: 'photo_200_orig, online ,first_name,last_name',
          v: environment.vk.version
        },
        (res: any) => {
          o.next(res.response[0]);
          o.complete();
          this.app.tick();
          console.log(res.response);
        }
      );
    });
  }

  getFriends(): Observable<Friends> {
    return new Observable<Friends>(o => {
      VK.Api.call(
        'friends.get',
        {
          fields: 'photo_50',
          v: environment.vk.version
        },
        (res: Friends) => {
          o.next(res.response.items);
          o.complete();
          this.app.tick();
          console.log(res.response);
        }
      );
    });
  }

}
