import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(public community: CommunityService) {
    this.community = community;
   }

  ngOnInit() {
  }

}
