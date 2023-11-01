import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndkoebPageRoutingModule } from './indkoeb-routing.module';

import { IndkoebPage } from './indkoeb.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndkoebPageRoutingModule,
    

  ],
  declarations: [IndkoebPage, ]
})
export class IndkoebPageModule {}
