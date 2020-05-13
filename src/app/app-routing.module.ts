import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component:  LoginComponent},
 { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
