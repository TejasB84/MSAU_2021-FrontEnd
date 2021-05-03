import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { from } from 'rxjs';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdatecandidateComponent } from './updatecandidate/updatecandidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterbynamePipe } from './filterbyname.pipe';
import { TrendsComponent } from './trends/trends.component';
import{ChartsModule}from 'ng2-charts';
import { DemandsComponent } from './demands/demands.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    CandidatelistComponent,
    CreatecandidateComponent,
    UpdatecandidateComponent,
    ViewcandidateComponent,
    FilterbynamePipe,
    TrendsComponent,
    DemandsComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ChartsModule,
    SocialLoginModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    
  ],
  providers: [

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: 
        [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "1053470900255-ocn521i3cotkptmsf5d54m9044rp8fmd.apps.googleusercontent.com"
              // "1082434179022-91hjd0pmdlql2u9bbo4otiejkdvjqrpt.apps.googleusercontent.com" 
              )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
