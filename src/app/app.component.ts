import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ResumeService } from "./resume/resume.service";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ResumeService],
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mvillalobos-website';
}
