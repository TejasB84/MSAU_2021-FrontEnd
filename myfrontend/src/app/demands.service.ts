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
str1:String="trends2"
str4:string='trends4';
  getCandidateList():Observable<Demands[]>{
    return this.httpClient.get<Demands[]>(`${this.baseurl}`);
  }


  getcountPerYear():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/${this.str1}`);
  }
  createCandidate(demands : Demands) :Observable<any>
  {
    return this.httpClient.post(`${this.baseurl}`,demands);
  }
  getCandidateById(id : any) : Observable<Demands>
  {
    return this.httpClient.get<Demands>(`${this.baseurl}/${id}`);
  }
  getCountPerManager() : Observable<any>
  {
    return this.httpClient.get(`${this.baseurl}/${this.str4}`);
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
