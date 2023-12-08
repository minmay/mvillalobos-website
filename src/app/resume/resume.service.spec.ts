/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResumeService } from './resume.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('Service: Resume', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResumeService]
    });
  });

  it('should ...', inject(
    [HttpTestingController, ResumeService],
    (httpMock: HttpTestingController, service: ResumeService
    ) => {
    expect(service).toBeTruthy();
  }));
});
