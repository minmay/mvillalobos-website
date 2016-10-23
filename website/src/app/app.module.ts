import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import './rxjs-extensions';
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
    FormsModule,
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
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
