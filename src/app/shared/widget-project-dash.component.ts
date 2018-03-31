import { Component,Input } from '@angular/core';

@Component({
  selector: 'widgetprojectdash',
  template: `
      <div class="card">
        <div class="card-block p-1 clearfix">
          <i class="{{icon}} {{class}} p-1 font-2xl mr-1 float-left"></i>
          <div class="h5 text-primary mb-0 mt-h">0</div>
          <div class="text-muted text-uppercase font-weight-bold font-xs">{{lib}}</div>
        </div>
        <div class="card-footer px-1 py-h">
          <a class="font-weight-bold font-xs btn-block text-muted" routerLink="/{{repo}}/list/{{projectKey}}">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
        </div>
      </div>
          `
})
export class WidgetProjectDashComponent {
  //
  @Input() class: string;
  @Input() icon: string;
  @Input() lib: string;
  @Input() repo: string;
  @Input() projectKey: string;

  constructor() {
    
  }
  //
}
