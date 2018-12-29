import { Component, Input } from '@angular/core';
import { ResumeEntry } from './resume-entry.model';

@Component({
  selector: 'app-resume-entry',
  templateUrl: './resume-entry.component.html',
  styleUrls: ['./resume-entry.component.css']
})
export class ResumeEntryComponent {

  @Input()
  entry: ResumeEntry;

}
