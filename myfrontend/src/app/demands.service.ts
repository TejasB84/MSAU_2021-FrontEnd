import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demands } from './demands';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  private baseurl="http://localhost:8080/demands";
  constructor(private httpClient :HttpClient) { }

  getCandidateList():Observable<Demands[]>{
    return this.httpClient.get<Demands[]>(`${this.baseurl}`);
  }
  createCandidate(demands : Demands) :Observable<any>
  {
    return this.httpClient.post(`${this.baseurl}`,demands);
  }
  getCandidateById(id : any) : Observable<Demands>
  {
    return this.httpClient.get<Demands>(`${this.baseurl}/${id}`);
  }
  updateCandidate(demands : Demands) :Observable<any>
  {
    return this.httpClient.put(`${this.baseurl}`,demands);
    
  }
  deleteCandidateById(id : any) :Observable<any>
  {
     return this.httpClient.delete(`${this.baseurl}/${id}`);
  }
}
