
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Admin } from 'src/app/model/admin';

import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;
   public admin = new Admin();
   public isChecked ;

  constructor( private formBuilder: FormBuilder ,private adminService: AdminService, private router : Router , private cookie : CookieService ) 
  { 
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['' , Validators.required],
      password:['', Validators.required],
      remember:['']
    })
  }

  login(){
     this.adminService.getAdmins().subscribe(
       result=>{
         const user = result.find((admin:any) =>{
           return admin.username === this.loginForm.value.username && admin.password === this.loginForm.value.password
         });
         if (user){
             if (confirm('do you want to save your password?')){
              
              this.cookie.set("username",this.loginForm.value.username);
              this.cookie.set("password",this.loginForm.value.password);
              alert('Login success');
              localStorage.setItem('token','jkj');
              this.router.navigate(['students']);
             }else{
              alert('Login success');
              localStorage.setItem('token','jkj');
              this.router.navigate(['students']);
             }
            
           }
       
         
         else{
          alert('username or password incorrect!');
         
         }
       },
       err=>{
        alert('something went wrong');
       }

     )
  }

 

 
}
