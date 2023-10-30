import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TilbudPageRoutingModule } from './tilbud-routing.module';

import { TilbudPage } from './tilbud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TilbudPageRoutingModule
  ],
  declarations: [TilbudPage]
})
export class TilbudPageModule {}
