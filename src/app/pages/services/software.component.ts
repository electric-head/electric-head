import { Component } from '@angular/core';

@Component({
  selector: 'eh-software',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h1 class="mat-display-1">Software we utilize</h1>
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            Text content
        </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent {
}
