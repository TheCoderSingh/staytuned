import { TestBed } from '@angular/core/testing';

import { UseripService } from './userip.service';

describe('UseripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseripService = TestBed.get(UseripService);
    expect(service).toBeTruthy();
  });
});
