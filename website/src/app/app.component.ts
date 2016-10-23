import { Component } from '@angular/core';

import { ResumeService } from './resume/resume.service';
import { Resume } from './resume/resume.model';
import { ResumeEntry } from './resume/entry/resume-entry.model'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
