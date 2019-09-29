import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { DonateComponent } from './donate/donate/donate.component';
import { ContactComponent } from './contact/contact/contact.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';


const routes: Routes = [
  { path: 'mobile/privacy', component: PrivacyComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate/:donationType', component: DonateComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
