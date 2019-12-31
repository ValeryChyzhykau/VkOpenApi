import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './core';
import { InfoFriendsComponent } from './pages/info-friends/info-friends.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: ('full') },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: InfoFriendsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
