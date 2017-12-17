import { Component } from '@angular/core';

@Component({
  selector: 'eh-home',
  template: `
    <mat-card class="mat-elevation-z5">
        <mat-card-header>
          <mat-card-title><h1 class="mat-display-1">{{title}}</h1></mat-card-title>
        </mat-card-header>
        <mat-card-content class="mat-content">
           <p>
             Welcome to the Electric-Head! We specialize in web development &amp; design, but also provide computer repair services and,
              to some extent technical support for PCs. Also, we can provide services for graphics design. For more information, visit our
              <a routerLink="services">Services</a> page!
           </p>
        </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Electric-Head';
}
