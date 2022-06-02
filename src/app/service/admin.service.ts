import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:3000/admin';
  constructor( private http:HttpClient ) { }

  public getAdmins(){
    return this.http.get<any>(this.url);
  }

  
  addAdmin(admin:any){
    return this.http.post<Admin>(this.url,admin);
  }
}
