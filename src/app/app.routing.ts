import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchComponent2 } from './search2/search2.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartPartyComponent } from './start-party/start-party.component';
import { PartiesComponent } from './parties/parties.component';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';

const appRoutes: Routes = [
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'search2', redirectTo: 'search2', pathMatch: 'full' },
  { path: 'search2', component: SearchComponent2 },
  { path: '', component: WelcomeComponent },
  { path: 'start-party', component: StartPartyComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'parties/:id', component: PartyDetailComponent },
  { path: 'parties/:id/search', component: SearchComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
