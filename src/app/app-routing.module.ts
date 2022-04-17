import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './component/delete/delete.component';
import { EmployeeProfileComponent } from './component/employee-profile/employee-profile.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { SearchComponent } from './component/search/search.component';
import { UpdateComponent } from './component/update/update.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: EmployeeProfileComponent, canActivate: [ AuthGuard ] },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
