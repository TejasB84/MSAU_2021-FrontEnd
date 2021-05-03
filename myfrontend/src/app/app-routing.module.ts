import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { DemandsComponent } from './demands/demands.component';
import { LoginComponent } from './login/login.component';
import { TrendsComponent } from './trends/trends.component';
import { UpdatecandidateComponent } from './updatecandidate/updatecandidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';

const routes: Routes = [
  {path:'home',component:CandidatelistComponent},
  {path:'add',component:CreatecandidateComponent},
  {path :'update/:id',component :UpdatecandidateComponent},
  {path :'view/:id',component:ViewcandidateComponent},
  {path:'trends',component:TrendsComponent},
  {path:'demands',component:DemandsComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
