import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PresentationsComponent } from './resume/presentations/presentations.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
