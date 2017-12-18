import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NoContentComponent } from './pages/no-content.component';
import { SoftwareComponent } from './pages/services/software.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
