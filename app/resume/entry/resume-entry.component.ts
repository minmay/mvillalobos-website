import { Component, Input } from '@angular/core';
import { ResumeEntry } from './resume-entry.model';

@Component({
    selector: 'resume-entry',
    templateUrl: 'app/resume/entry/resume-entry.html'
})
export class ResumeEntryComponent {

    @Input()
    entry: ResumeEntry;

}