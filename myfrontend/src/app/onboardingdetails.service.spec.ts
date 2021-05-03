import { TestBed } from '@angular/core/testing';

import { OnboardingdetailsService } from './onboardingdetails.service';

describe('OnboardingdetailsService', () => {
  let service: OnboardingdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
