import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup;
  Admin: Admin= new Admin();

  constructor(private formBuilder:FormBuilder , private adminService:AdminService, private route:Router) { }

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      fullname:[''],
      username:[''],
      email:[''],
      password:[''],
      confirmPassword:['']
    })
  }

  addAdmin(){

    this.Admin.name=this.signUpForm.value.fullname;
    this.Admin.username=this.signUpForm.value.username;
    this.Admin.email=this.signUpForm.value.email;
    this.Admin.password=this.signUpForm.value.password;

       this.adminService.addAdmin(this.Admin).subscribe(
           res => {
             alert('Account Created');
             this.route.navigate(['login']);
           },
           err=>{
            alert('Something Went Wrong');
           }
       )
  }
}
