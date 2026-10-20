import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about';
import { ContactComponent } from './sections/contact/contact';
import { EducationComponent } from './sections/education/education';
import { ExperienceComponent } from './sections/experience/experience';
import { HeroComponent } from './sections/hero/hero';
import { NavbarComponent } from './sections/navbar/navbar';
import { ProjectsComponent } from './sections/projects/projects';
import { SkillsComponent } from './sections/skills/skills';
import { PortfolioChatComponent } from './portfolio-chat';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, EducationComponent, SkillsComponent, ProjectsComponent, ContactComponent, PortfolioChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}