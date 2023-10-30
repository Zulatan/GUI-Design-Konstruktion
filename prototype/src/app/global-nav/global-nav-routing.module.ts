import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalNavPage } from './global-nav.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalNavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalNavPageRoutingModule {}
