import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeEntryComponent } from './resume/resume-entry.component';
import { ResumeService } from './resume/resume.service';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [
        AppComponent,
        ResumeComponent,
        ResumeEntryComponent
    ],
    providers: [ResumeService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
