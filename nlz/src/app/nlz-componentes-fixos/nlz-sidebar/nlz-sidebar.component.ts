import { navbarData } from './nav-data';
import { Component, EventEmitter, Output } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-nlz-sidebar',
  templateUrl: './nlz-sidebar.component.html',
  styleUrls: ['./nlz-sidebar.component.css']
})
export class NlzSidebarComponent   {

  constructor() { }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  navData = navbarData;
  screenWidth = 0;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
}
