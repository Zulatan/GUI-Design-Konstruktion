import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListerPage } from './lister.page';

const routes: Routes = [
  {
    path: '',
    component: ListerPage
  },
  {
    path: 'lister',
    loadChildren: () => import('../lister/lister.module').then( m => m.ListerPageModule),
    data: { 'app-nav-compontent': false }, // Add this line

  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListerPageRoutingModule {}
