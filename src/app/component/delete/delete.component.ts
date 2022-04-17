import { Component, OnInit } from '@angular/core';
import { EmployeeRegistrationService } from 'src/app/services/employee-registration.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  employees: any;
  email: string | undefined;

  constructor(private service: EmployeeRegistrationService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => this.employees = data);
  }

  public delete(id: string) {
    this.service.delete(id).subscribe(data => this.employees = data);
  }

}
