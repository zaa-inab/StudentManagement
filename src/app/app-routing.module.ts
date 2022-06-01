import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { StudentComponent } from './component/student/student.component';

const routes: Routes = [
  {path:'', redirectTo:'login' , pathMatch:'full' },
  {path:'students' , component:StudentComponent},
  {path:'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
