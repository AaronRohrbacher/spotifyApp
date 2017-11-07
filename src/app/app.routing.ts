import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StartPartyComponent } from './start-party/start-party.component';
import { PartiesComponent } from './parties/parties.component';

const appRoutes: Routes = [
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
