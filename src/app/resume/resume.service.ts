import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resume } from './resume.model';

@Injectable()
export class ResumeService {

  private resumeUrl = 'assets/resume/MVillalobosWorkHistory.json';

  constructor(private httpClient: HttpClient) {
  }

  findResume(): Observable<Resume> {
    return this.httpClient.get<Resume>(this.resumeUrl);
  }

}
