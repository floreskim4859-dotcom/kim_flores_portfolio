import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  protected readonly projects = [
    { number: '01', title: 'Project one', type: 'Web experience', image: 'photo-1460925895917-afdab827c52f' },
    { number: '02', title: 'Project two', type: 'Product design', image: 'photo-1558655146-d09347e92766' },
    { number: '03', title: 'Project three', type: 'Data & systems', image: 'photo-1551288049-bebda4e38f71' }
  ];
}