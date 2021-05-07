import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authorization/auth.guard';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { DemandsComponent } from './demands/demands.component';
import { LoginComponent } from './login/login.component';
import { TrendsComponent } from './trends/trends.component';
import { UpdatecandidateComponent } from './updatecandidate/updatecandidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';

const routes: Routes = [
  {path:'home',canActivate:[AuthGuard],component:CandidatelistComponent},
 
  {path:'add',canActivate:[AuthGuard],component:CreatecandidateComponent},
  {path :'update/:id',canActivate:[AuthGuard],component :UpdatecandidateComponent},
  {path :'view/:id',canActivate:[AuthGuard],component:ViewcandidateComponent},
  {path:'trends',canActivate:[AuthGuard],component:TrendsComponent},
  {path:'demands',canActivate:[AuthGuard],component:DemandsComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
