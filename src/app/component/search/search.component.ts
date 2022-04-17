import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { EmployeeRegistrationService } from 'src/app/services/employee-registration.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  employees: any;
  search?: string;
  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  formControl = new FormControl();
  formGroup?: FormGroup;

  constructor(private service: EmployeeRegistrationService, private formBuilder: FormBuilder) { 
    this.getAllEmails();
  }

  ngOnInit(): void {
    this.filteredOptions = this.formControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public getAllEmails() {
    this.service.getEmails().subscribe(response => this.options = response);
  }

  public findUser() {
    this.search = this.formControl.value;
    if (this.search) this.service.getEmployeesByEmail(this.search).subscribe(data => this.employees = data);
  }

  public findUserByFirstName() {
    this.search = this.formControl.value;
    if (this.search) this.service.getEmployeesByFirstName(this.search).subscribe(data => this.employees = data);
  }

}
