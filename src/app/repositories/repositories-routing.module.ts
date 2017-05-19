import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ReposEditComponent } from './components/repositories-edit.component';
import { ReposListComponent } from './components/repositories-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Repositories'
    },
    children: [
      {
        path: 'edit',
        component: ReposEditComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'list',
        component: ReposListComponent,
        data: {
          title: 'Liste'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule {}
