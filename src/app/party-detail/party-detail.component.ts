import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { StartPartyService } from '../start-party.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css'],
  providers: [StartPartyService]

})
export class PartyDetailComponent implements OnInit {
  parties: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  partyId: string;
  partyToDisplay;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private startPartyService: StartPartyService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.partyId = urlParameters['id'];
    })
    this.partyToDisplay = this.startPartyService.getPartyById(this.partyId);
    this.parties = this.startPartyService.getParties();
  }


}
