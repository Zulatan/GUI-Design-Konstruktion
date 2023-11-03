import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavComponentComponent } from './nav-component/nav-component.component';
import { AddListComponent } from './add-list/add-list.component';
import { AddListModalComponent } from './add-list-modal/add-list-modal.component';

@NgModule({
  declarations: [AppComponent, NavComponentComponent, AddListComponent, AddListModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
