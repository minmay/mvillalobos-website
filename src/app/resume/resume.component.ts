import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {} from '@angular/common/http';

import { ResumeService } from './resume.service';
import { Resume } from './resume.model';
import { PresentationsComponent } from './presentations/presentations.component';
import { ResumeEntryComponent } from './entry/resume-entry.component';
import { parse } from "yaml";

@Component({
    selector: 'app-resume',
    imports: [CommonModule,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        HttpClientModule, ResumeEntryComponent, PresentationsComponent],
    providers: [ResumeService],
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume = {
    name: '',
    introduction: '',
    objective: '',
    email: '',
    mobile: '',
    history: [],
    education: [],
    skills: [],
    presentations: [],
    affiliations: []
  };

  constructor (private resumeService: ResumeService) {
  }

  ngOnInit(): void {
    this.getResume();
  }

  getResume(): void {
    this.resumeService.loadResume()
      .subscribe(resume => {
        this.resume = parse(resume);
        //console.log(resume);
        //console.log(this.resume);
      });
  }

}
