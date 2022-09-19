import { navbarData } from './nav-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nlz-sidebar',
  templateUrl: './nlz-sidebar.component.html',
  styleUrls: ['./nlz-sidebar.component.css']
})
export class NlzSidebarComponent   {

  constructor() { }

  collapsed = true;
  navData = navbarData;
}
