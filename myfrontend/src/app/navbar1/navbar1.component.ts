import { Component, OnInit } from '@angular/core';
import { AuthorizationserviceService } from '../Authorization/authorizationservice.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  constructor(private authservice :AuthorizationserviceService) { }

  ngOnInit(): void {
  }
  signOut(): void{
    this.authservice.logout();
  }

}
