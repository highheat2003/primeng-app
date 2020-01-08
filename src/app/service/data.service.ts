import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError, forkJoin} from 'rxjs';
import {User} from '../model/user-data';
import {catchError, map, tap} from 'rxjs/operators';
import {Code} from '../model/code-data';
import {Employee, IEmployee} from '../model/employee-data';
import {DataRow} from './dataset.service';
import {Center, MngArea} from '../model/center-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addUser(user: User): Observable<User> {
    user.id = null;
    return this.http.post<User>(this.apiurl, user, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<User>(this.apiurl, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  getModels(): Observable<Code[]> {
    return this.http.get<Code[]>('api/models').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getGrades(): Observable<Code[]> {
    return this.http.get<Code[]>('api/grades').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('api/employees').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getEmployees2(): Observable<DataRow<IEmployee>[]> {
    return this.http.get<DataRow<IEmployee>[]>('api/employees2').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getEmployee(empNo: string): Observable<Employee[]> {
    const url = `api/employees?empNo=${empNo}`;
    return this.http.get<Employee[]>(url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addEmployee(emp: Employee): Observable<Employee> {
    emp.id = null;
    return this.http.post<Employee>('api/employees', emp, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addEmployees(emps: Employee[]): Observable<Employee[]> {
    emps.map(el => el.id = null);

    const parallel$ = forkJoin([
      this.http.post<Employee>('api/employees', emps, this.httpOptions),
      this.http.post<Employee>('api/employees', emps, this.httpOptions)
    ]);

    /*parallel$.subscribe(
      values => {
        console.log('all values', values);
      }
    );*/

    return parallel$;
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `api/employees/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>('api/employees', emp, this.httpOptions).pipe(
      map(() => emp),
      catchError(this.handleError)
    );
  }

  getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>('api/centers').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addCenter(obj: Center): Observable<Center> {
    obj.id = null;
    return this.http.post<Center>('api/centers', obj, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteCenter(id: number): Observable<Center> {
    const url = `api/centers/${id}`;
    return this.http.delete<Center>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateCenter(obj: Center): Observable<Center> {
    return this.http.put<Center>('api/centers', obj, this.httpOptions).pipe(
      map(() => obj),
      catchError(this.handleError)
    );
  }

  getMngAreas(centerCd: string): Observable<MngArea[]> {
    return this.http.get<MngArea[]>(`api/mngAreas?centerCd=${centerCd}`).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addMngArea(obj: MngArea): Observable<MngArea> {
    obj.id = null;
    return this.http.post<MngArea>('api/mngAreas', obj, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteMngArea(id: number): Observable<MngArea> {
    const url = `api/mngAreas/${id}`;
    return this.http.delete<MngArea>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateMngArea(obj: MngArea): Observable<MngArea> {
    return this.http.put<MngArea>('api/mngAreas', obj, this.httpOptions).pipe(
      map(() => obj),
      catchError(this.handleError)
    );
  }
}
