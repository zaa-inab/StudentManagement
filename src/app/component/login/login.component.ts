
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder ,private adminService: AdminService, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['' , Validators.required],
      password:['', Validators.required]
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

  // get username(){
  //   return this.loginForm.get('loginForm');
  // }
}
