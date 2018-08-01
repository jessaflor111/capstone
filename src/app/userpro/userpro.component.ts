import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-userpro',
  templateUrl: './userpro.component.html',
  styleUrls: ['./userpro.component.css']
})
export class UserproComponent implements OnInit {

  constructor(public community: CommunityService) {
    this.community = community;
    
   }

  ngOnInit() {
  }

}
