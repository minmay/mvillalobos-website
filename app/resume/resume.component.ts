import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResumeService } from './resume.service';
import { Resume } from './resume.model';
import { OnInit } from '@angular/core';

@Component({
    selector: 'resume',
    templateUrl: 'app/resume/resume.html',
    providers: [ResumeService]
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
