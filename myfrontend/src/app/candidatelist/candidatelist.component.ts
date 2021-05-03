import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.css']
})
export class CandidatelistComponent implements OnInit {
  p : number=1;
  candidates: Candidate[]=[];
  nameSearch:String='';
  constructor(private candidateService :CandidateService,private router : Router) { }

  ngOnInit(): void {
    this.getCandidate();
  }
   private getCandidate()
  {
    this.candidateService.getCandidateList().subscribe(data=>{this.candidates=data});
  }
  updateCandidate(id : any)
  {
    this.router.navigate(['update',id]);
  }
  deleteCandidate(id : any)
  {
    this.candidateService.deleteCandidateById(id).subscribe(data=>{});
    // this.getCandidate();
    this.ngOnInit();
  }
  viewCandidate(id : any)
  {
    this.router.navigate(['view',id]);
  }

}

// Todo-on delete auto refresh
