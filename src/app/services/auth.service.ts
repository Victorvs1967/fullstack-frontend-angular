import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { EmployeeRegistrationService } from './employee-registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  
  constructor(private router: Router, private service: EmployeeRegistrationService) { }

  login(user: User) {
    this.service.doLogin(user).subscribe(data => {
      if (data != null) {
        this.service.employee = data;
        this.loggedIn.next(true);
        sessionStorage.setItem('isLogin', 'true');
        setTimeout(() => { }, 1000);
        this.router.navigate(['/profile']);
      }
    });
    return (this.loggedIn.value === true) ? 'login successfull' : 'invalid username/password';
  }

  logout() {
    this.loggedIn.next(false);
    sessionStorage.removeItem('isLogin');
    setTimeout(() => { }, 1000);
    this.router.navigate(['/logout']);
  }
}
