import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient ) { }

  public getAdmins(){
    return this.http.get<any>('http://localhost:3000/admin');
  }
}
