import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume.model';
import { Presentation } from '../presentation.model';
import { OnInit } from '@angular/core';

@Component({
    selector: 'presentations',
    templateUrl: 'app/resume/presentations/presentations.html',
    providers: [ResumeService]
})
export class PresentationsComponent implements OnInit {

    presentations: Presentation[];

    constructor (private resumeService: ResumeService) {

    }

    ngOnInit(): void {
        this.getPresentations();
    }

    getPresentations(): void {
        this.resumeService
            .findResume()
            .then(resume => this.presentations = resume.presentations);
    }
}
