import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { User } from "../../../enttities/users/users.interface";

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() gridData: User[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email'];

  constructor() {
  }

  onPageChanged($event: PageEvent) {
    // todo: dispatch action
  }

  onSort($event: Sort) {
    // todo: dispatch action
  }
}
