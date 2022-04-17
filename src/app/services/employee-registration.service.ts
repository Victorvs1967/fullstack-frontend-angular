import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

const { register, update, login, employees, deleteEmployee, employeesByEmail, employeesByFirstname } = environment;

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  public employee: Employee | undefined;

  constructor(private http: HttpClient) { }

  public doRegistration(employee: Employee): Observable<any> {
    return this.http.post(register, employee, { responseType: 'text' as 'json' });
  }
  
  public editDetails(employee: Employee): Observable<any> {
    return this.http.put(update, employee, { responseType: 'text' as 'json' });
  }
  
  public doLogin(user: User): Observable<any> {
    return this.http.post(login, user);
  }

  public getEmployees(): Observable<any> {
    return this.http.get(employees);
  }
  
  public getEmails(): Observable<any> {
    return this.http.get(employees)
      .pipe(map((response: any) => response.map((item: any) => item['email'])));
  }

  public getEmployeesByEmail(email: string): Observable<any> {
    return this.http.get(`${employeesByEmail}/${email}`);
  }

  public getEmployeesByFirstName(firstname: string): Observable<any> {
    return this.http.get(`${employeesByFirstname}/${firstname}`);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${deleteEmployee}/${id}`);
  }

}
