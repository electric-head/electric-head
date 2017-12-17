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
             Welcome to the Electric-Head! We specialize in web development &amp; design, but also provide
              computer repair services and, to some extent technical support for PCs. Also, we can provide
              services for graphics design. For more information, visit our <a routerLink="services">Services</a>
              page!
           </p>
           <p>
             We proudly support the open source community and try our hardest to use only open-sourced software.
             We believe this helps keep <i>your</i> cost as minimal as possible. For a list of software we are currently
             using, please click <a routerLink="sofware">here</a>.
           </p>
        </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Electric-Head';
}
