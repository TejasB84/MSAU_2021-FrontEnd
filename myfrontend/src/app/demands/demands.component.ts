import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demands } from '../demands';
import { DemandsService } from '../demands.service';


@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

  id ?: number;
  nameSearch:String='';
  demands: Demands[]=[];
  p : number=1;
 
  constructor(private demandsService: DemandsService,private router : Router) { }

  ngOnInit(): void {
    this.getCandidate();
  }
  private getCandidate()
  {
    this.demandsService.getCandidateList().subscribe(data=>{this.demands=data});
  }
  
  


}
