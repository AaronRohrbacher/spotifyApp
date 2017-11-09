/*
 * Angular
 */

import {Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common'
/*
 * Services
 */
import {SpotifyService} from '../spotify.service';
;
import {StartPartyService} from '../start-party.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [StartPartyService]
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;
  results2: Object;
  partyId;
  @Input() selectedParty;

  constructor(private spotify: SpotifyService,
              private database: StartPartyService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location)
               {
    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }

  ngOnInit(): void {
    this.search();
    this.route.params.forEach((urlParametersArray) => {
     this.partyId = urlParametersArray['id'];
   });
  }



  addPlaylist(playlistId: string): void{
    this.router.navigate(['parties/' + this.partyId + '/search'], { queryParams: { query: playlistId } })
      .then(_ => this.searchPlaylist() );
  }

  submit(query: string): void {
    this.router.navigate(['parties/' + this.partyId + '/search'], { queryParams: { query: query } })
      .then(_ => this.search() );
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotify
      .searchTrack(this.query)
      .subscribe((res: any) => this.renderResults(res));
  }

  searchPlaylist(): void {
    console.log('this.query', this.query);

    this.spotify
      .playlistSearch(this.query)
      .subscribe((res: any) => this.renderResults(res));
  }

  // searchPlaylist(): void {
  //   console.log('this.query', this.query);
  //   if (!this.query) {
  //     return;
  //   }
  //
  //   this.spotify
  //     .search2(this.query)
  //     .subscribe((res: any) => this.renderResults(res));
  // }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.items[0].name) {
      this.results = res.items;
    } else if (res && res.items[0].track){
      this.results2 = res.items;
    }
  }
}
