import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model'
import { StartPartyService } from '../start-party.service'

@Component({
  selector: 'app-start-party',
  templateUrl: './start-party.component.html',
  styleUrls: ['./start-party.component.css'],
  providers: [StartPartyService]
})
export class StartPartyComponent implements OnInit {

  // might need to downcase StartPartyService after private
  constructor(private startPartyService: StartPartyService) { }

  ngOnInit() {
  }

  submitForm(name: string, date: string, location: string, danceability: string) {
    let newParty: Party = new Party(name, date, location, danceability);
    this.startPartyService.addParty(newParty);
  }

}
