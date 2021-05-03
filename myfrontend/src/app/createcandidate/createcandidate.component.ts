import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';
import { Joiningdetails } from '../joiningdetails';
import { JoiningdetailsService } from '../joiningdetails.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Onboardingdetails } from '../onboardingdetails';
import { OnboardingdetailsService } from '../onboardingdetails.service';

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
  constructor(private formBuilder: FormBuilder,private onboardingservice: OnboardingdetailsService,private candidateservice : CandidateService,private edudetailsservice :EdudetailsService,private joiningdetailsservice :JoiningdetailsService,private router :Router) { }

  

  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lasttname: ['', Validators.required],
      phoneno: ['', [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required]],
      birthdate: ['', [Validators.required, ]],
      city: ['', Validators.required],
      country: ['', Validators.required],
  });
  }
  onSubmit()
  {
    this.saveAllDetails();
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
