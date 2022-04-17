// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  register: 'http://localhost:8080/register',
  login: 'http://localhost:8080/login',
  update: 'http://localhost:8080/update',
  deleteEmployee: 'http://localhost:8080/delete',
  employees: 'http://localhost:8080/employees',
  employeesByEmail: 'http://localhost:8080/employeesByEmail',
  employeesByFirstname: 'http://localhost:8080/employeesByFirstname',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
