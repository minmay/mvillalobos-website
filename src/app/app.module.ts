import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PresentationsComponent } from './resume/presentations/presentations.component';
import { ResumeEntryComponent } from './resume/entry/resume-entry.component';
import { ResumeService } from './resume/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    PresentationsComponent,
    ResumeEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent],
  exports: [
    AboutComponent,
    ResumeComponent,
    PresentationsComponent,
    ResumeEntryComponent
  ]
})
export class AppModule { }
