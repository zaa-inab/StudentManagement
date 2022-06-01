import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public studentList: any;
  Form !: FormGroup;
  Student: Student = new Student();

  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getStudent();
    this.Form = this.formBuilder.group({
      fullName: [''],
      email: [''],
      address: ['']
    })
  }
  getStudent() {
    this.studentService.getStudent().subscribe(
      result => {
        this.studentList = result;
        console.log(result);
      }
    )
  }
  addStudent() {
    this.Student.id=0;
    this.Student.name = this.Form.value.fullName;
    this.Student.email = this.Form.value.email;
    this.Student.address = this.Form.value.address;

    this.studentService.addStudent(this.Student).subscribe(res => {
      alert("Employee added");
      let value = document.getElementById('close')
      value?.click();
      this.Form.reset();
      this.getStudent();
    },
      err => {
        alert("Something went wrong");
      }
    )
  }

  deleteStudent(id: any) {
    if (confirm("Are you sure you want to delete?")) {
      this.studentService.deleteStudent(id).subscribe(res => {
        alert("Student deleted");
        this.getStudent();
      })
    }
  }

  onEdit(student: any){
    this.Student.id= student.id;
    this.Form.controls['fullName'].setValue(student.name);
    this.Form.controls['email'].setValue(student.email);
    this.Form.controls['address'].setValue(student.address);
  }

  updateStudent(){
    this.Student.name = this.Form.value.fullName;
    this.Student.email = this.Form.value.email;
    this.Student.address = this.Form.value.address;

    this.studentService.updateStudent(this.Student).subscribe(res => {
      alert("Employee updated");
      let value = document.getElementById('closeUpdate')
      value?.click();
      this.Form.reset();
      this.getStudent();
    },
      err => {
        alert("Something went wrong");
      }
    )
  }
}
