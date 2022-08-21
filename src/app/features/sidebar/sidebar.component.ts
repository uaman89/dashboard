import { Component, Input } from '@angular/core';
import { SidebarItem } from '../../enttities/sidebar/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() items: SidebarItem[] = [];

  constructor() { }

}
