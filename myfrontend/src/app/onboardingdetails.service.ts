import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Onboardingdetails} from './onboardingdetails';

@Injectable({
  providedIn: 'root'
})
export class OnboardingdetailsService {

  private baseurl="http://localhost:8080/onboardingdetails";
  constructor(private httpClient :HttpClient) { }

  createOnboarddetails(onboardingdetails : Onboardingdetails): Observable<any>{
    return this.httpClient.post(`${this.baseurl}`,onboardingdetails) ;
  }
  getAllOnboarddetailsById(id : any): Observable<Onboardingdetails >
  {
    return this.httpClient.get<Onboardingdetails >(`${this.baseurl}/${id}`);
  }
  updateOnboarddetails(onboardingdetails  : Onboardingdetails ):Observable<any>{
    return this.httpClient.put(`${this.baseurl}`,onboardingdetails );
  }
}
