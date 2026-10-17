import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  protected readonly roles = [
    { role: 'Intern', company:'Accenture Philippines', period: 'January 2024 - April 2024', focus: 'Learning, contributing, and building a strong foundation.' },
    { role: 'Associate Software Engineer', company:'Accenture Philippines', period: 'August 2024 - March 2026', focus: 'Collaborating across teams to deliver thoughtful work.' },
    { role: 'Package App Analyst', company:'Accenture Philippines', period: 'March 2026 - Present', focus: 'Turning information into clear, useful direction.' }
  ];
}