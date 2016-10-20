import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Presentation } from '../../presentation.model';

@Component({
    selector: 'presentation',
    templateUrl: 'app/resume/presentations/presentation/presentation.html'
})
export class PresentationComponent implements OnInit {

    @Input()
    presentation: Presentation;

    slidesUrl: SafeUrl;
    videoUrl: SafeUrl;


    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.buildVideoUrl();
        this.buildSlidesUrl();
    }

    buildVideoUrl(): void {
        this.videoUrl = this.presentation.video ? this.sanitizer.bypassSecurityTrustResourceUrl(this.presentation.video) : null;
    }

    buildSlidesUrl(): void {
        this.slidesUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.presentation.slides);
    }

}