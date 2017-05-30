import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Student} from './student.model';
import{Http, URLSearchParams}from '@angular/http';

@Injectable()
export class StudentService{
    constructor(private http :Http) {}
        submitStudentDetails(student:Student) : 
        Observable<any>{
            return this.http.post('http://localhost:8080/submitStudentDetails',
            student).map(res => res)
        }

        findByEmail(email:string): Observable<any>{
            return this.http.get('http://localhost:8080/findByEmail',
            email).map(res => res.json() as Student)
        } 

        loginStudent(student:Student): Observable<any>{
            return this.http.get('http://localhost:8080/loginStudent',
            student).map(res => res.json() as Student)
        } 

        listStudents(): Observable<any>{
            return this.http.get('http://localhost:8080/listStudents')
           .map(res => res.json() as Student)
        } 
/*findByEmail(email:string): Observable<Student>{
    let params:URLSearchParams = new URLSearchParams();
    params.set('email',email);
    return this.http.get('${this.baseUrl}${this.findByEmail}',
        {'search:params'}).map(res => res.json() as Student)
    }
loginStudent(student:Student): Observable<Student>{
    let params:URLSearchParams = new URLSearchParams();
    params.set('student',student);
    return this.http.get('${this.baseUrl}${this.loginStudent}',
        {'search:params'}).map(res => res.json() as Student)
    }     
listStudents(): Observable<Student>{
    return this.http.get('${this.baseUrl}${this.listStudents}',
        ).map(res => res.json() as Student:ArrayList)
    }     
    */ 

    }