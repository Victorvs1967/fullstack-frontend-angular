import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeRegistrationService } from 'src/app/services/employee-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl(''),
    experience: new FormControl(''),
    domain: new FormControl(''),
  });

  message: any;
  submitted = false;
  date: Date = new Date();
  employee: Employee = new Employee('', '', '', '', new Date(), '', 0, '');

  constructor(private formBuilder: FormBuilder, private service: EmployeeRegistrationService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30) ]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30) ]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(30) ]],
      phone: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(12) ]],
      dob: ['', [ Validators.required ]],
      experience: ['', [ Validators.required ]],
      domain: ['', [ Validators.required ]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  registerNow() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      
      const { firstname, lastname, email, password, phone, dob, experience, domain } = this.form.value;

      this.employee.firstName = firstname;
      this.employee.lastName = lastname;
      this.employee.email = email;
      this.employee.password = password;
      this.employee.phone = phone;
      this.employee.dob = dob;
      this.employee.experience = experience;
      this.employee.domain = domain;

      this.service.doRegistration(this.employee).subscribe(data => this.message = data);
    }
  }

}
