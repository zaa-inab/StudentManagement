import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor( private formBuilder: FormBuilder ,private adminService: AdminService, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
     this.adminService.getAdmins().subscribe(
       result=>{
         const user = result.find((admin:any) =>{
           return admin.username === this.loginForm.value.username && admin.password === this.loginForm.value.password
         });
         if (user){
           alert('Login success');
           this.router.navigate(['students']);
         }else{
          alert('username or password incorrect!');
         }
       },
       err=>{
        alert('something went wrong');
       }

     )
  }
}
