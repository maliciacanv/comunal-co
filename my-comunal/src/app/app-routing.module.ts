import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: 'register-form', component: RegisterFormComponent },
  { path: '**', pathMatch:'full', redirectTo:'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
