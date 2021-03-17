import { TestBed } from '@angular/core/testing';

import { FetchCountryDataResolver } from './fetch-country-data.resolver';

describe('FetchCountryDataResolver', () => {
  let resolver: FetchCountryDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchCountryDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
