import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  templateUrl: 'dashboard.component.html',
  providers: [ ]
})
export class ProjectsDashboardComponent implements OnInit {

  private pkey:string;

  constructor(private route: ActivatedRoute,private router: Router, public shar:SharedService) {
    this.route
        .params
        .subscribe(params => {
            this.pkey = params['projectKey'];
        });
      this.shar.currentProject = {id:this.pkey}; 
  }

  ngOnInit(): void {

    
    //load poject aggreation counts
    
  }
  showRepo(repo) {
    
    this.router.navigate(['/'+repo+'/list/']);

  }

}
