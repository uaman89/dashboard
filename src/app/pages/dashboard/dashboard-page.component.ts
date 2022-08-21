import { Component, OnInit } from '@angular/core';
import { SIDEBAR_ITEMS } from '../../enttities/sidebar/sidebar.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  readonly sidebarItems = SIDEBAR_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
