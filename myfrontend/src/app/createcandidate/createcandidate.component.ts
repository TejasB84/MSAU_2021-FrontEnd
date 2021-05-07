import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';
import { Joiningdetails } from '../joiningdetails';
import { JoiningdetailsService } from '../joiningdetails.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Onboardingdetails } from '../onboardingdetails';
import { OnboardingdetailsService } from '../onboardingdetails.service';
import { Observable } from 'rxjs';
import { Demands } from '../demands';

@Component({
  selector: 'app-createcandidate',
  templateUrl: './createcandidate.component.html',
  styleUrls: ['./createcandidate.component.css']
})
export class CreatecandidateComponent implements OnInit {
  candidate : Candidate =new Candidate();
  edudetails :Edudetails=new Edudetails();
  registerForm!: FormGroup;
  joiningdetails :Joiningdetails=new Joiningdetails();
  onboardingdetails: Onboardingdetails=new Onboardingdetails();
  step:any=1;
  demandsdetails: Demands= new Demands();
  submitted: any = false;
  multistep:any = new FormGroup({
    candidateDetails1: new FormGroup({
            id:new FormControl('',Validators.required),
           fname: new FormControl('',Validators.required),
           lname: new FormControl('',Validators.required),
           birthdate: new FormControl('',Validators.required),
           city: new FormControl('',Validators.required),
           country: new FormControl('',Validators.required),
           phoneno: new FormControl('',Validators.required),
           email: new FormControl('',Validators.required),
       }),
       eduDetails1: new FormGroup({
        clname:new FormControl('',Validators.required),
        universityname: new FormControl('',Validators.required),
        course: new FormControl('',Validators.required),
        address: new FormControl('',Validators.required),
    }),
    joiningDetails1: new FormGroup({
      date:new FormControl('',Validators.required),
        location: new FormControl('',Validators.required),
        feedback: new FormControl('',Validators.required),
        technology: new FormControl(''),
  }),
  onboardingDetails1: new FormGroup({
    onboardingDate:new FormControl(''),
    bcgStatus: new FormControl(''),
    graduationStatus: new FormControl(''),
    etaStatus: new FormControl(''),
        technology: new FormControl(''),
        role:new FormControl(''),
        did:new FormControl(''),
}),

  })
 
  constructor(private formBuilder: FormBuilder,private onboardingservice: OnboardingdetailsService,private candidateservice : CandidateService,private edudetailsservice :EdudetailsService,private joiningdetailsservice :JoiningdetailsService,private router :Router) { }

  
get candidateDetails1() {
 
    return this.multistep.controls['candidateDetails1']['controls'];
}

get eduDetails1() {
  return this.multistep.controls['eduDetails1']['controls'];
}

get joiningDetails1()
{
  return this.multistep.controls['joiningDetails1']['controls'];
}

get onboardingDetails1()
{
  return this.multistep.controls['onboardingDetails1']['controls'];
}


  
  ngOnInit(): void {
  }



  previous()
  {
    this.step=this.step-1;
    
  }
  
  onSubmit()
  {

    this.submitted = true;
      if(this.multistep.controls.candidateDetails1.invalid && this.step == 1) {
        return;
      }
      if(this.multistep.controls.eduDetails1.invalid && this.step == 2) {
        return;
      }
      if(this.multistep.controls.joiningDetails1.invalid && this.step == 3) {
        return;
      }
      if(this.multistep.controls.onboardingDetails1.invalid && this.step == 4) {
        return;
      }
    this.step=this.step+1;
    if(this.step==5)
    {
      this.saveAllDetails();
    }
    
  }
 
  private saveAllDetails()
  {
    this.candidateservice.createCandidate(this.candidate).subscribe(data=>{
      console.log(data);
      this.edudetails.id=this.candidate.id;
      this.edudetailsservice.createEdudetails(this.edudetails).subscribe(data=>{
        console.log(data);
        this.joiningdetails.id=this.candidate.id;
        this.joiningdetailsservice.createJoiningdetails(this.joiningdetails).subscribe(data =>{
          console.log(data);

          this.onboardingdetails.id=this.candidate.id;
          this.onboardingservice.createOnboarddetails(this.onboardingdetails).subscribe(data=>{
            console.log(data);
            this.gotoHomePage();
          })

        },
         
        
        error =>console.log(error)
        );
        
      },
      error =>console.log(error)
      );
      
    },
   
    error =>console.log(error)
    );
  }
  private gotoHomePage()
  {
    this.router.navigate(['/home']);
  }
  


}



