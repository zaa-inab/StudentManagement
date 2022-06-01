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
    return this.http.delete(`${this.url}/${id}`);
  }

  updateStudent(student: any){
   return this.http.put(`${this.url}/${student.id}`,student);
  }
}
