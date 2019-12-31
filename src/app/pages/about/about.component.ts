import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: User;

  constructor(private service: UserService, private router: Router) {}

  logout() {
    this.service.logout().subscribe(response => {
      if (response) {
        this.router.navigate(['/login']);
      }
    });
  }

  getTest() {
    this.service.transferUser().subscribe((res: User) => {
      this.user = res;
    });
  }

  ngOnInit() {
    this.getTest();
  }
}
