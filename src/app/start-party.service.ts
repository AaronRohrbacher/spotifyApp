import { Injectable } from '@angular/core';
import { Party } from './party.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StartPartyService {
  parties: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.parties = database.list('start-party');
  }

  getParties(){
    return this.parties;
  }

  addParty(newParty: Party) {
    this.parties.push(newParty)
  }

  getPartyById(partyId: string) {
    return this.database.object('/parties/' + partyId);
  }

  deleteParty(localPartyToDelete) {
    let partyEntryInFirebase = this.getPartyById(localPartyToDelete.$key);
    partyEntryInFirebase.remove();
  }
}
