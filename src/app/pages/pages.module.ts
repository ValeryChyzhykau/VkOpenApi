import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core';
import { MaterialAppModule } from './ngmaterial.module';
import { InfoFriendsComponent } from './info-friends/info-friends.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [AboutComponent, LoginComponent, InfoFriendsComponent ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialAppModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
