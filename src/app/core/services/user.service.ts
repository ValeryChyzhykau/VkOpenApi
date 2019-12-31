import { Injectable } from '@angular/core';
import { User } from '../../core/models/user.model';
import { Friends } from '../../core/models/friends.model';
import { VkApiService } from './vk-api.service';
import { VkLoginService } from './vk-login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private service: VkApiService, private serviceLogin: VkLoginService) { }

  logout(): Observable<boolean> {
    return  this.serviceLogin.logout();
  }

  transferUser(): Observable<User> {
   return this.service.getUser();
  }

  transferFriends(): Observable<Friends> {
   return this.service.getFriends();
  }
}



