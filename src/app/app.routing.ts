import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartPartyComponent } from './start-party/start-party.component';
import { PartiesComponent } from './parties/parties.component';

const appRoutes: Routes = [
  { path: 'search', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  {
  path: '',
  component: WelcomeComponent
  },
  {
  path: 'start-party',
  component: StartPartyComponent
  },
  {
  path: 'parties',
  component: PartiesComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
