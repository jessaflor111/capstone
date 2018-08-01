import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(public router: Router) {
    this.router = router;
   }
  //  logic goes here
}
