import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import  PinCard  from './pincard.component';
import  Header  from './header.component';
import  Footer  from './footer.component';
import Home from './routeComponents/Home';
import PageNotFound from './routeComponents/PageNotFound';
import Profile from './routeComponents/Profile';
import FilterPins from './filterPinsPipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import Student from './components/Student';

//import StudentService from './services/StudentService';
   
@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  ReactiveFormsModule,
                  NgbModule.forRoot(),
                  RouterModule.forRoot([
                      { path: '', component: Home }, /* prazna ruta koristi Home komponentu*/
                      { path: 'home', component: Home }, /* home ruta koristi Home komponentu*/
                      { path: 'profile', component: Profile },
                     { path: '**', component: PageNotFound } /*Sve ostale rute koriste PageNotFound komponentu*/
                    ])
                ],
  declarations: [ AppComponent, PinCard, Header ,Home, PageNotFound,Footer,Profile, FilterPins],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }