import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';
import { Joiningdetails } from '../joiningdetails';
import { JoiningdetailsService } from '../joiningdetails.service';
import { Onboardingdetails } from '../onboardingdetails';
import {OnboardingdetailsService} from '../onboardingdetails.service';
import { Router } from '@angular/router';
import { Demands } from '../demands';
import { DemandsService } from '../demands.service';
@Component({
  selector: 'app-viewcandidate',
  templateUrl: './viewcandidate.component.html',
  styleUrls: ['./viewcandidate.component.css']
})
export class ViewcandidateComponent implements OnInit {

  id ?: number;
  id1 ?: number;

  candidate: Candidate = new Candidate();
  edudetails : Edudetails = new Edudetails();
  joiningdetails : Joiningdetails = new Joiningdetails();
  onboardingdetails : Onboardingdetails= new Onboardingdetails();
  demandsdetails : Demands= new Demands();
  constructor(private candidateService: CandidateService,private demandsService: DemandsService,private edudetailsservice : EdudetailsService,private router : Router,private joiningdetailsservice : JoiningdetailsService,private route: ActivatedRoute, private onboardingdetailsService:OnboardingdetailsService) { }

  ngOnInit(): void {
    this.getAllFieldsValue();
  }
  getAllFieldsValue()
  {
    this.id = this.route.snapshot.params['id'];
    this.candidateService.getCandidateById(this.id).subscribe(data => { 
      this.candidate = data 
    this.edudetailsservice.getEdudetailsById(this.id).subscribe(data =>{
      this.edudetails=data;
    this.joiningdetailsservice.getJoiningdetailsById(this.id).subscribe(data=>{
      this.joiningdetails=data;
      this.onboardingdetailsService.getAllOnboarddetailsById(this.id).subscribe(data=>{
        this.onboardingdetails=data;
        this.id1=this.candidate.did;
        this.demandsService.getCandidateById(this.id1).subscribe(data=>{
          this.demandsdetails=data;
    },
    error => console.log(error)
    );
    },
    error => console.log(error)
    );
    },
      error => console.log(error)
    );
  },
  
      error => console.log(error)
    );
  },
  error => console.log(error)
    );
  }
  back() {
    this.gotoHomePage();
    //this.router.navigate(['/home']);
  }
  public gotoHomePage() {
    this.router.navigate(['home']);
  }
 
}
