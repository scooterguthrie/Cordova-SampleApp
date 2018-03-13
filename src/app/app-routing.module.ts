import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DropdownLink1Component } from './components/dropdown-link1/dropdown-link1.component';
import { DropdownLink2Component } from './components/dropdown-link2/dropdown-link2.component';
import { DropdownLink3Component } from './components/dropdown-link3/dropdown-link3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'dropdown/link1',
    component: DropdownLink1Component
  },
  {
    path: 'dropdown/link2',
    component: DropdownLink2Component
  },
  {
    path: 'dropdown/link3',
    component: DropdownLink3Component
  },
  {
    path: 'contact',
    component: ContactPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
