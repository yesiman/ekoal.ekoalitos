import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts

import { LoginComponent } from './login/components/login.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'viz',
        loadChildren: './viz/viz.module#VizModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'prototypes',
        loadChildren: './ekit/repositories/repositories.module#ReposModule'
      },
      {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsDashboardModule'
      },
      {
        path: 'properties',
        loadChildren: './ekit/repositories/repositories.module#ReposModule'
      },
      {
        path: 'objects',
        loadChildren: './ekit/repositories/repositories.module#ReposModule'
      },
      {
        path: 'users',
        loadChildren: './ekit/repositories/repositories.module#ReposModule'
      },
      {
        path: 'datatypes',
        loadChildren: './ekit/repositories/repositories.module#ReposModule'
      },
      {
        path: 'langs',
        loadChildren: './ekit/repositories/repositories.module#ReposModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
