import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

  url = 'http://localhost:3000/students';
  constructor(private http: HttpClient) { }


  public getStudent() {
    let myData = this.http.get<Student>(this.url)
    return myData;
  }

  addStudent(student: any) {
    return this.http.post<Student>(this.url, student);
  }

  deleteStudent(id: any) {
    return this.http.delete<Student>('http://localhost:3000/students/'+id);
  }

  updateStudent(student: any){
   return this.http.put<Student>('http://localhost:3000/students/'+student.id,student);
  }
}
