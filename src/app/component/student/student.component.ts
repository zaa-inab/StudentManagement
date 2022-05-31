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
  addForm !: FormGroup;
  Student: Student = new Student();

  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getStudent();
    this.addForm = this.formBuilder.group({
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
    this.Student.name = this.addForm.value.fullName;
    this.Student.email = this.addForm.value.email;
    this.Student.address = this.addForm.value.address;

    this.studentService.addStudent(this.Student).subscribe(res => {
      alert("Employee added");
      let value = document.getElementById('close')
      value?.click();
      this.addForm.reset();
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
}
