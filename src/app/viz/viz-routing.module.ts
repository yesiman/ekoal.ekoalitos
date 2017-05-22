import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VizComponent } from './components/viz.component';

const routes: Routes = [
  {
    path: '',
    component: VizComponent,
    data: {
      title: 'Repositories'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VizRoutingModule {}
