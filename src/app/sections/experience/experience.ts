import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  protected readonly roles = [
    { role: 'Intern', company:'Accenture Philippines', period: 'January 2024 - April 2024', 
      focus: 'Learning the Basic Web Development and Angular Framework. Under Accenture Technology Academy(ATA).' },
   
      { role: 'Associate Software Engineer', company:'Accenture Philippines', period: 'August 2024 - March 2026', 
      focus: `Assisted in the development and maintenance of web applications using Angular and .NET C#. 
      Supported backend API development, performed PostgreSQL database operations, and participated in testing, 
      debugging, and issue resolution. Worked in an Agile environment using Azure DevOps for work item tracking, 
      version control, and collaboration.` },
    
      { role: 'Package App Analyst', company:'Accenture Philippines', period: 'March 2026 - Present', 
      focus: `Developed and maintained web applications using
            Angular for front-end development and .NET C# for
            backend services. Worked with PostgreSQL databases
            and AWS Lambda integrations while collaborating with
            cross-functional teams to deliver application
            enhancements. Participated in Agile ceremonies and
            used Azure DevOps to manage User Stories, Bugs,
            Tasks, source control, code reviews, and pull requests
            throughout the software development lifecycle.` }
  ];
}