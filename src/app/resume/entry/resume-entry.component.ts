import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import { ResumeEntry } from './resume-entry.model';

@Component({
  selector: 'app-resume-entry',
  standalone: true,
  imports: [CommonModule],
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
