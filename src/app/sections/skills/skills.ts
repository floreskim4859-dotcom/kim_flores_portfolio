import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  protected readonly skills = [
    { name: 'Angular Developer', level: 82 },
    { name: 'TypeScript', level: 78 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'PostgreSQL', level: 68 },
    { name: 'Azure DevOps', level: 65 },
    { name: 'UI / UX', level: 72 },
    { name: 'GitHub Copilot', level: 88 },
    { name: 'Agile', level: 80 }
  ];
}