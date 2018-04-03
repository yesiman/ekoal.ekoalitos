import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { ReposService } from '../../ekit/repositories/services/repositories.service';

@Component({
  templateUrl: 'dashboard.component.html',
  providers: [ ]
})
export class ProjectsDashboardComponent implements OnInit {

  private pkey:string;

  constructor(private route: ActivatedRoute,private router: Router, public shar:SharedService,public reposService:ReposService) {
    this.route
        .params
        .subscribe(params => {
            this.pkey = params['projectKey'];
        });
      //CHARGEMENT PROJET
        this.reposService.get("projects",this.pkey)
            .subscribe(
                data  => {
                  this.shar.currentProject = data;
                },
                error =>  console.log(error));
  }
  ngOnInit(): void {
    //load poject aggreation counts
  }
  showRepo(repo) {
    this.router.navigate(['/'+repo+'/list/']);
  }
}
