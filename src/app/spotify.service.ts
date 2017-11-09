import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../environments/environment';

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyService {
  static BASE_URL = '';

  constructor(private http: Http) {}

  query(
    URL: string,
    params?: Array<string>
  ): Observable<any[]> {
    let queryURL = `${URL}`;
    if (params) {
      queryURL = `${queryURL}`;
    }
    const apiKey = environment.spotifyApiKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http
      .request(queryURL, options)
      .map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`https://api.spotify.com/v1/users/${query}/playlists`, [
      `q=${query}`,
      `type=${type}`
    ]);

  }

  search2(query: string, type: string): Observable<any[]> {
    return this.query(`${query}?limit=5`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  playlistSearch(query: object): Observable<any[]> {
    return this.search2(query, 'track');
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }
}

export const SPOTIFY_PROVIDERS: Array<any> = [
  { provide: SpotifyService, useClass: SpotifyService }
];
