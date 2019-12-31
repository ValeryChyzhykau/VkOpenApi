import { Component, OnInit } from '@angular/core';
import { Friends } from 'src/app/core/models/friends.model';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-info-friends',
  templateUrl: './info-friends.component.html',
  styleUrls: ['./info-friends.component.css']
})
export class InfoFriendsComponent implements OnInit {
  friends: any;
  count: number;

  constructor(private service: UserService) { }


 getFriends() {
  this.service.transferFriends().subscribe((res: Friends) => {
     this.friends = res;
     console.log(this.friends);
     this.count = this.friends.length;
     console.log(this.count);
   });
  }
 ngOnInit() {
    this.getFriends();
  }

}
