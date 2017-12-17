import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'eh-no-content',
  template: `
    <mat-card class="mat-elevation-z5">
        <mat-card-header>
            <mat-card-title><h1 class="mat-display-1">Error: 404</h1></mat-card-title>
            <mat-card-subtitle>(Page Not Found)</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>The page you were looking for was either lost, stolen, never existed, or was a figment of your imagination.</p>
          <p>Either way, you may go back and try again if you wish.</p>
        </mat-card-content>
        <mat-card-actions>
          <mat-toolbar fxLayoutAlign="center center" color="primary" style="align-items: center">
            <button mat-button class="mat-elevation-z5" (click)="goBack()">Back</button>
            <button mat-button class="mat-elevation-z5" routerLink="/">Home</button>
          </mat-toolbar>
        </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent {
  location: Location;

  constructor(location: Location) { this.location = location; }

  goBack() {
    this.location.back();
  }
}
