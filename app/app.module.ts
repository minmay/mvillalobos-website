import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeEntryComponent } from './resume/entry/resume-entry.component';
import { ResumeService } from './resume/resume.service';
import { PresentationsComponent } from './resume/presentations/presentations.component'
import { AboutComponent } from './about/about.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: ResumeComponent
            },
            {
                path: 'presentations',
                component: PresentationsComponent
            },
            {
                path: 'about',
                component: AboutComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        ResumeComponent,
        ResumeEntryComponent,
        PresentationsComponent,
        AboutComponent
    ],
    providers: [ResumeService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
