import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise';

import { ProjectsDashboardService } from './services/dashboard.service';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  templateUrl: 'dashboard.component.html',
  providers: [ ProjectsDashboardService ]
})
export class ProjectsDashboardComponent implements OnInit {

  private pkey:string;

  constructor(private projectsDashboardService:ProjectsDashboardService,private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
          this.pkey = params['pkey'];
      });
    //load poject aggreation counts
    
  }

}
