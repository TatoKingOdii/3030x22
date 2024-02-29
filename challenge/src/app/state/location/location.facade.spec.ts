import { TestBed } from '@angular/core/testing';

import { LocationFacade } from './location.facade';

describe('LocationService', () => {
  let service: LocationFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
