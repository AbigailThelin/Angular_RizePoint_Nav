import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rizepoint';
  menu = [
    {
    title: 'Define',
    children: ['tbd', 'tbd', 'tbd'],
    img: '../assets/2C.svg'
    },
    {
      title: 'Gather',
      children: ['Forms', 'Audits', 'Legacy Forms', 'Print Blank Form'],
      img: '../assets/clipboard-list.svg'
    },
    {
      title: 'See',
      children: ['tbd', 'tbd'],
      img: '../assets/calendar.svg'
    },    
    {
      title: 'Act',
      children: ['tbd', 'tbd', 'tbd'],
      img: '../assets/user.svg'
    },
    {
      title: 'Admin',
      children: ['tbd', 'tbd', 'tbd'],
      img: '../assets/cog.svg'
    }
  ];
  togglers = {};
  openChildren(i){
    this.togglers[i] =! this.togglers[i];
    console.log(this.togglers)
  }
}