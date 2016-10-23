import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResumeService } from './resume.service';
import { Resume } from './resume.model';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor (private resumeService: ResumeService) {
  }

  ngOnInit(): void {
    this.getResume();
  }

  getResume(): void {
    this.resumeService
      .findResume()
      .then(resume => this.resume = resume);
  }

}
