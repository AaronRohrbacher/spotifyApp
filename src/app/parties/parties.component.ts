import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { Router } from '@angular/router';
import { StartPartyService } from '../start-party.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css'],
  providers: [StartPartyService]
})

export class PartiesComponent implements OnInit {
  parties: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;


  constructor(private router: Router, private startPartyService: StartPartyService) { }

  ngOnInit() {
    this.parties = this.startPartyService.getParties();
  }

  // goToDetailPage(clickedParty: Party) {
  //   this.router.navigate(['parties', clickedParty.$key]);
  // };

}
