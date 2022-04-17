import { Component, OnInit } from '@angular/core';
import { EmployeeRegistrationService } from 'src/app/services/employee-registration.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  message: any;
  employee: any;
  name: string | undefined;

  constructor(private service: EmployeeRegistrationService) { }

  ngOnInit(): void {
    this.employee = this.service.employee;
  }

}
