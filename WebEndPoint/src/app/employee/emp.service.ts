import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

saveEmployee(EmployeeData: any) {
  debugger
   return this.http.post('http://localhost:8080/api/employee/create', EmployeeData);
}

updateEmployee(EmployeeData: any,empId) {
  debugger;
  return this.http.put('http://localhost:8080/api/employee/update/'+empId, EmployeeData);
}

getEmployee() {
  return this.http.get('http://localhost:8080/api/employee/');
}

deleteEmployee(empid: any) {
  return this.http.delete('http://localhost:8080/api/employee/delete/' + empid);
}

getEmployeeId(empid: any) {
  return this.http.get('http://localhost:8080/api/employee/find/'+ empid);
}
}
