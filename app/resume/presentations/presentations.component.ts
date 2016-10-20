import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume.model';
import { Presentation } from '../presentation.model';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'presentations',
    templateUrl: 'app/resume/presentations/presentations.html',
    providers: [ResumeService]
})
export class PresentationsComponent implements OnInit {

    presentations: Presentation[];
    selectedPresentation: Presentation;
    mediaUrl: SafeUrl;
    showSlides: boolean;
    showVideo: boolean;

    constructor (
        private resumeService: ResumeService,
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit(): void {
        this.getPresentations();
    }

    getPresentations(): void {
        this.resumeService
            .findResume()
            .then(resume => this.presentations = resume.presentations);
    }

    onSelectPresentation(presentation: Presentation): void {
        this.selectedPresentation = presentation;
        this.onSelectSlides();
    }

    onSelectSlides() : void {
        this.mediaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPresentation.slides);
        this.showSlides = true;
        this.showVideo = false;
    }

    onSelectVideo(): void {
        this.mediaUrl = this.selectedPresentation.video ? this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPresentation.video) : null;
        this.showSlides = false;
        this.showVideo = true;
    }
}
