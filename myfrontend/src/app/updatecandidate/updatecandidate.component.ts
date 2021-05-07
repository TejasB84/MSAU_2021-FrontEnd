import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Demands } from '../demands';
import { DemandsService } from '../demands.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';
import { Joiningdetails } from '../joiningdetails';
import { JoiningdetailsService } from '../joiningdetails.service';
import { Onboardingdetails } from '../onboardingdetails';
import { OnboardingdetailsService } from '../onboardingdetails.service';
//import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-updatecandidate',
  templateUrl: './updatecandidate.component.html',
  styleUrls: ['./updatecandidate.component.css']
})
export class UpdatecandidateComponent implements OnInit {
  submitted: any = false;
  multistep:any = new FormGroup({
    updateDetails1: new FormGroup({
            firstname:new FormControl('',Validators.required),
           lastname: new FormControl('',Validators.required),
           birthdate: new FormControl('',Validators.required),
           phoneno: new FormControl('',Validators.required),
           email: new FormControl('',Validators.required),
           city: new FormControl('',Validators.required),
          // jdate: new FormControl('',Validators.required),
           location: new FormControl('',Validators.required),
           date: new FormControl('',Validators.required),
           technology: new FormControl('',Validators.required),
           mname:new FormControl(''),
           bcgStatus:new FormControl(''),
           graduationStatus:new FormControl(''),
           etaStatus:new FormControl(''),
       }),
      })
  id?: Number;
  id1 ?: number;
  bcg?:string;
  grad?:string;
  eta?:string;
  
  candidate: Candidate = new Candidate();
  edudetails : Edudetails=new Edudetails();
  joiningdetails : Joiningdetails=new Joiningdetails();
  demandsdetails: Demands= new Demands();
  onboardingDetails :Onboardingdetails =new Onboardingdetails();
  constructor(private candidateService: CandidateService,private onboardingDetailsService: OnboardingdetailsService,private edudetailsservice : EdudetailsService,private demandsService:DemandsService,private joiningdetailsservice : JoiningdetailsService, private route: ActivatedRoute, private router: Router) { }



  get updateDetails1() {
 
    return this.multistep.controls['updateDetails1']['controls'];
}
  ngOnInit(): void {

    this.defaultValue();
  }
  defaultValue() {
    this.id = this.route.snapshot.params['id'];
 
    this.candidateService.getCandidateById(this.id).subscribe(data => { 
      this.candidate = data ;
      this.edudetailsservice.getEdudetailsById(this.id).subscribe(data =>{
       this.edudetails=data;
       this.joiningdetailsservice.getJoiningdetailsById(this.id).subscribe(data=>{
         this.joiningdetails=data;
         this.onboardingDetailsService.getAllOnboarddetailsById(this.id).subscribe(data=>{
          this.onboardingDetails=data;
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

  onSubmit() {
   this.submitted=true;
    if(this.multistep.controls.updateDetails1.invalid) {
      return;
    }

    // if(this.bcg==null)
    // this.onboardingDetails.bcgStatus='true';
    // else
    // this.onboardingDetails.bcgStatus=this.bcg;
    // if(this.onboardingDetails.graduationStatus==null)
    // this.grad='true';
    // else
    // this.onboardingDetails.graduationStatus=this.grad;
    // if (this.eta == null)
    //   this.onboardingDetails.etaStatus = 'true';
    // else
    // this.onboardingDetails.etaStatus = this.eta;

    


    this.saveAllDetails();
  }
  private saveAllDetails() {
    this.candidateService.updateCandidate(this.candidate).subscribe(data => {
      console.log(data);
      this.edudetailsservice.updateEdudetails(this.edudetails).subscribe(data=>{
        console.log(data);
        this.onboardingDetailsService.updateOnboarddetails(this.onboardingDetails).subscribe(data =>{
          console.log(data);
      this.joiningdetailsservice.updateJoiningdetails(this.joiningdetails).subscribe(data =>{
        console.log(data);
        this.id1=this.candidate.did;
        this.demandsService.getCandidateById(this.id1).subscribe(data=>{
          this.demandsdetails=data;
          
        this.gotoHomePage();
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
  private gotoHomePage() {
    this.router.navigate(['/home']);
  }

}
