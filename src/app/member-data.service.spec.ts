import { TestBed } from '@angular/core/testing';

import { MemberDataService } from './member-data.service';

describe('MemberDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberDataService = TestBed.get(MemberDataService);
    expect(service).toBeTruthy();
  });
});
