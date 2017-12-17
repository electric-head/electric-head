import { Injectable } from '@angular/core';
import { Navigation } from './navigation';
import { NAVIGATION } from './nav.links';

@Injectable()
export class NavigationService {
  getLinks(): Promise<Navigation[]> {
    return Promise.resolve(NAVIGATION);
  }
}
