import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
     
import { ProjectsDashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projects'
    },
    children: [
      {
        path: 'dash/:projectKey',
        component: ProjectsDashboardComponent,
        data: {
          title: 'Nouveau'
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
