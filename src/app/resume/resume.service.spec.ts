/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResumeService } from './resume.service';

describe('Service: Resume', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeService]
    });
  });

  it('should ...', inject([ResumeService], (service: ResumeService) => {
    expect(service).toBeTruthy();
  }));
});
