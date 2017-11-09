import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { StartPartyService } from '../start-party.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css'],
  providers: [StartPartyService]

})
export class PartyDetailComponent implements OnInit {
  parties: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router
    private startPartyService: StartPartyService
  ) { }

  ngOnInit() {
    this.parties = this.startPartyService.getParties();
    }




}
