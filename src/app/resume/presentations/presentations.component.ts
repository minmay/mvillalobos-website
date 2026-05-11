import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {} from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import { ResumeService } from '../resume.service';
import { Presentation } from '../presentation.model';
import {parse} from "yaml";

@Component({
    selector: 'app-presentations',
    imports: [CommonModule,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        HttpClientModule],
    providers: [ResumeService],
    templateUrl: './presentations.component.html',
    styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  presentations: Presentation[] = [];
  hasSelectedPresentation: boolean = false;
  selectedPresentation: Presentation;
  mediaUrl: SafeResourceUrl;
  showSlides: boolean = false;
  showVideo: boolean = false;

  constructor (
    private resumeService: ResumeService,
    private sanitizer: DomSanitizer
  ) {
    this.mediaUrl = sanitizer.bypassSecurityTrustResourceUrl('');
    this.selectedPresentation = {
      id: '',
      name: '',
      description: '',
      link: '',
      slides: '',
      video: ''
    };
  }

  ngOnInit(): void {
    this.getPresentations();
  }

  getPresentations(): void {
    this.resumeService.loadResume()
      .subscribe(resume => this.presentations = parse(resume).presentations);
  }

  onSelectPresentation(presentation: Presentation): void {
    this.hasSelectedPresentation = true;
    this.selectedPresentation = presentation;
    this.onSelectSlides();
  }

  onSelectSlides(): void {
    this.mediaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPresentation.slides);
    this.showSlides = true;
    this.showVideo = false;
  }

  onSelectVideo(): void {
    this.mediaUrl = this.selectedPresentation.video ? this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedPresentation.video) : this.sanitizer.bypassSecurityTrustResourceUrl('');
    this.showSlides = false;
    this.showVideo = true;
  }

}
