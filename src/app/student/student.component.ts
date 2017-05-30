import {Component, OnInit}from '@angular/core';
import {StudentService} from './student.service';
import {Student} from './student.model';


// import {Router} from '@angular/router'; (if we have time will implement routing)
@Component({
   // moduleId: module.id,
    selector: 'student-form',
    templateUrl: 'student.template.html'
})
export class StudentComponent implements OnInit{

    student:Student;

    constructor(private studentService:StudentService,
    // private router:Router (if we have time will implement routing)
    ){}
ngOnInit(){
    this.student = new Student();
    }
onSubmit() {
    this.studentService.submitStudentDetails(this.student).subscribe(
        data => data);
        //this.router.navigate(['home']); (if we have time will implement routing)
    }
byEmail() {
    this.studentService.findByEmail(this.student.email).subscribe(
        data => data);
        //this.router.navigate(['home']); (if we have time will implement routing)
    }
login() {
    this.studentService.loginStudent(this.student).subscribe(
        data => data);
        //this.router.navigate(['home']); (if we have time will implement routing)
    }
studentList() {
    this.studentService.listStudents().subscribe(
        data => data);
        //this.router.navigate(['home']); (if we have time will implement routing)
    }
}