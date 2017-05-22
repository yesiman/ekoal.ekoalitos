import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';



import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise';

import { VizService } from '../services/viz.service';
import { SharedService } from '../../shared/services/shared.service';

declare var vis: any;

@Component({
  templateUrl: 'viz.component.html',
  providers: [ VizService ],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class VizComponent implements OnInit {
  
  private network=null;
  constructor(private reposService:VizService,private sharedService:SharedService,private element: ElementRef) {
    this.sharedService.vizLayout = true;  
  }

  private resizeMe(w,h)
  {
    this.network.setOptions({height: h-210,width: w});
  }

  onResize(event){
     this.resizeMe(event.target.innerWidth,event.target.innerHeight);
   }
    
  //}

  ngOnInit(): void {
  
    var DIR = 'img/soft-scraps-icons/';

    var nodes = null;
    var edges = null;
    

    
      // create people.
      // value corresponds with the age of the person
      var DIR = '../img/indonesia/';
      nodes = [
        {id: 1,  shape: 'circularImage', image: DIR + '1.png'},
        {id: 2,  shape: 'circularImage', image: DIR + '2.png'},
        {id: 3,  shape: 'circularImage', image: DIR + '3.png'},
        {id: 4,  shape: 'circularImage', image: DIR + '4.png', label:"pictures by this guy!"},
        {id: 5,  shape: 'circularImage', image: DIR + '5.png'},
        {id: 6,  shape: 'circularImage', image: DIR + '6.png'},
        {id: 7,  shape: 'circularImage', image: DIR + '7.png'},
        {id: 8,  shape: 'circularImage', image: DIR + '8.png'},
        {id: 9,  shape: 'circularImage', image: DIR + '9.png'},
        {id: 10, shape: 'circularImage', image: DIR + '10.png'},
        {id: 11, shape: 'circularImage', image: DIR + '11.png'},
        {id: 12, shape: 'circularImage', image: DIR + '12.png'},
        {id: 13, shape: 'circularImage', image: DIR + '13.png'},
        {id: 14, shape: 'circularImage', image: DIR + '14.png'},
        {id: 15, shape: 'circularImage', image: DIR + 'missing.png', brokenImage: DIR + 'missingBrokenImage.png', label:"when images\nfail\nto load"},
        {id: 16, shape: 'circularImage', image: DIR + 'anotherMissing.png', brokenImage: DIR + '9.png', label:"fallback image in action"}
      ];

      // create connections between people
      // value corresponds with the amount of contact between two people
      edges = [
        {from: 1, to: 2},
        {from: 2, to: 3},
        {from: 2, to: 4},
        {from: 4, to: 5},
        {from: 4, to: 10},
        {from: 4, to: 6},
        {from: 6, to: 7},
        {from: 7, to: 8},
        {from: 8, to: 9},
        {from: 8, to: 10},
        {from: 10, to: 11},
        {from: 11, to: 12},
        {from: 12, to: 13},
        {from: 13, to: 14},
        {from: 9, to: 16}
      ];

      // create a network
      var container = document.getElementById('visualization');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
        nodes: {
          borderWidth:4,
          size:30,
	      color: {
            border: '#222222',
            background: '#666666'
          },
          font:{color:'#eeeeee'}
        },
        edges: {
          color: 'lightgray'
        }
      };
      this.network = new vis.Network(this.element.nativeElement, data, options);
      this.network.on("click", function (params) {
            alert('onclick');
        });

  }
 
}
