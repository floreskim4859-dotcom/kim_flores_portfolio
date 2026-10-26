import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  protected readonly projects = [
    {
      number: '01',
      title: 'StoreTrack',
      type: 'Inventory management',
      description: 'Inventory management system for convenience stores.',
      image: 'photo-1460925895917-afdab827c52f',
      link: 'https://storetrack711kim.vercel.app/'
    },
    {
      number: '02',
      title: 'Project two',
      type: 'Product design',
      description: null,
      image: 'photo-1558655146-d09347e92766',
      link: null
    },
    {
      number: '03',
      title: 'Project three',
      type: 'Data & systems',
      description: null,
      image: 'photo-1551288049-bebda4e38f71',
      link: null
    }
  ];
}