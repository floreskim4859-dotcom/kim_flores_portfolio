import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  protected readonly skills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'Azure DevOps', level: 70 },
    { name: 'UI / UX', level: 90 },
    { name: 'C#.Net', level: 60 },
    { name: 'GitHub Copilot', level: 88 },
    { name: 'Agile', level: 80 }
  ];
}