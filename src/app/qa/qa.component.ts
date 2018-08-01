import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  constructor(public community: CommunityService) {
    this.community = community;
    
   }

  ngOnInit() {
  }

}
