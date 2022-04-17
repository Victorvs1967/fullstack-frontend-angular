import { Component, OnInit } from '@angular/core';
import { EmployeeRegistrationService } from 'src/app/services/employee-registration.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  message: any;
  employee: any;

  constructor(private service: EmployeeRegistrationService) { }

  ngOnInit(): void {
    this.employee = this.service.employee;
  }

  public update() {
    this.service.editDetails(this.employee).subscribe(data => this.message = data);
  }

}
