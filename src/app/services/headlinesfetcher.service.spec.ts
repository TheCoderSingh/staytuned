import { TestBed } from '@angular/core/testing';

import { HeadlinesfetcherService } from './headlinesfetcher.service';

describe('HeadlinesfetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadlinesfetcherService = TestBed.get(HeadlinesfetcherService);
    expect(service).toBeTruthy();
  });
});
