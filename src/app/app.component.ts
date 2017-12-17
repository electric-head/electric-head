import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation/navigation.service';
import { Navigation } from './navigation/navigation';

@Component({
  selector: 'eh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ NavigationService ]
})
export class AppComponent implements OnInit {
  title = 'Electric-Head';
  links: Navigation[];

  constructor(private  navigationService: NavigationService) {}

  getLinks(): void {
    this.navigationService.getLinks().then(links => this.links = links);
  }

  ngOnInit(): void {
    this.getLinks();
  }
}
