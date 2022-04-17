import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullstack-frontend-angular';

  isLogin: Observable<boolean> | undefined;
  key: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLogin = this.authService.isLoggedIn;
  }
}
