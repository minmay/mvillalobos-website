import { Routes } from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {PresentationsComponent} from "./resume/presentations/presentations.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {
    path: '',
    component: ResumeComponent
  },
  {
    path: 'resume',
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
];
