import { Component, OnInit } from '@angular/core';
import { VkLoginService } from '../../core/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: VkLoginService, private router: Router) {}

  image = `../../../assets/kak-postavit-knopku-vkontakte5.png`;

  login() {
    this.service.login().subscribe(response => {
      if (response === true) {
        this.router.navigate(['/about']);
      } else {
        alert('error');
      }
    });
  }

  ngOnInit() {
    this.service.init();
  }
}
