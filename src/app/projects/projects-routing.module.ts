import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
     
import { ProjectsDashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Project'
    },
    children: [
      {
        path: ':pkey',
        component: ProjectsDashboardComponent,
        data: {
          title: ':lib'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
