import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeRegistrationService } from 'src/app/services/employee-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;
  user: User | undefined;
  message: string | undefined;
  showPassword: boolean | undefined;

  constructor(
    private service: EmployeeRegistrationService, 
    private auth: AuthService, 
    private formBuilder: FormBuilder, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(30) ]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public login() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.message = this.auth.login(this.form.value);
    };
  }

}
