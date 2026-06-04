import { Component, Input } from '@angular/core';

import { ResumeEntry } from './resume-entry.model';

@Component({
    selector: 'app-resume-entry',
    imports: [],
    templateUrl: './resume-entry.component.html',
    styleUrls: ['./resume-entry.component.css']
})
export class ResumeEntryComponent {

  @Input()
  entry: ResumeEntry = {
    id: '',
    name: '',
    location: '',
    logo: '',
    start: '',
    end: '',
    title: '',
    description: []
  };

}
