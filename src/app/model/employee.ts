export class Employee {

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public dob: Date;
  public phone: string;
  public experience: number;
  public domain: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    dob: Date,
    phone: string,
    experience: number,
    domain: string
  ) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
    this.password = password;
    this.dob = dob;
    this.phone = phone;
    this.experience = experience;
    this.domain = domain;
  }
}