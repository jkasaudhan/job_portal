import { TestBed, inject } from '@angular/core/testing';

import { JobApplyService } from './job-apply.service';

describe('JobApplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobApplyService]
    });
  });

  it('should ...', inject([JobApplyService], (service: JobApplyService) => {
    expect(service).toBeTruthy();
  }));
});
