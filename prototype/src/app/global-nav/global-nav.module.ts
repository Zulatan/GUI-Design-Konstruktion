import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalNavPageRoutingModule } from './global-nav-routing.module';

import { GlobalNavPage } from './global-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalNavPageRoutingModule
  ],
  declarations: [GlobalNavPage]
})
export class GlobalNavPageModule {}
