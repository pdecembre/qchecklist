/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DevteamService } from './devteam.service';

describe('DevteamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevteamService]
    });
  });

  it('should ...', inject([DevteamService], (service: DevteamService) => {
    expect(service).toBeTruthy();
  }));
});
