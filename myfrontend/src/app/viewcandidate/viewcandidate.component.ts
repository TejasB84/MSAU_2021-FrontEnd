import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';
import { Joiningdetails } from '../joiningdetails';
import { JoiningdetailsService } from '../joiningdetails.service';

@Component({
  selector: 'app-viewcandidate',
  templateUrl: './viewcandidate.component.html',
  styleUrls: ['./viewcandidate.component.css']
})
export class ViewcandidateComponent implements OnInit {

  id ?: number;
  candidate: Candidate = new Candidate();
  edudetails : Edudetails = new Edudetails();
  joiningdetails : Joiningdetails = new Joiningdetails();
  constructor(private candidateService: CandidateService,private edudetailsservice : EdudetailsService,private joiningdetailsservice : JoiningdetailsService,private route: ActivatedRoute) { }

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

}
