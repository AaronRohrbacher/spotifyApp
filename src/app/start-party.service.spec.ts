import { TestBed, inject } from '@angular/core/testing';

import { StartPartyService } from './start-party.service';

describe('StartPartyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartPartyService]
    });
  });

  it('should ...', inject([StartPartyService], (service: StartPartyService) => {
    expect(service).toBeTruthy();
  }));
});
