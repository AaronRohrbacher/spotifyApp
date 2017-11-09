import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  @Input() selectedParty;
  parties: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;


  constructor(private router: Router, private startPartyService: StartPartyService) { }

  ngOnInit() {
    this.parties = this.startPartyService.getParties();
  }

  beingDeletingParty(partyToDelete){
    this.startPartyService.deleteParty(partyToDelete);
  }

  goToDetailPage(clickedParty) {
    this.router.navigate(['parties', clickedParty.$key]);
  }

}
