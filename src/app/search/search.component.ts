/*
 * Angular
 */

import {Component, OnInit} from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';

/*
 * Services
 */
import {SpotifyService} from '../spotify.service';
;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;
  results2: Object;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }

  ngOnInit(): void {
    this.search();
  }

  addPlaylist(playlistId: string): void{
    this.router.navigate(['search'], { queryParams: { query: playlistId } })
      .then(_ => this.searchPlaylist() );
  }

  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query } })
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
    debugger;
    if (res && res.items[0].name) {
      this.results = res.items;
    } else if (res && res.items[0].track){
      this.results2 = res.items;
    }
  }
}
