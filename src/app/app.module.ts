import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './components/about/about.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent }  from './components/search/search.component';


const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent }
]

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, AboutComponent,NavbarComponent,SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
