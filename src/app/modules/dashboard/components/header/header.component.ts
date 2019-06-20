import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material";
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }
/**
 * logout function clears the storage and navigates to login page
 */
  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);

  }


}
