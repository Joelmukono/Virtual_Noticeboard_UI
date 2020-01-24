import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoticeFormComponent } from './notice-form/notice-form.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'notice-form', component: NoticeFormComponent},
  {path: 'notice', component: NoticeComponent},
  {path: '', redirectTo: "/notice", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
