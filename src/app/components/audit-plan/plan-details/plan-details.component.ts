import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.sass']
})
export class PlanDetailsComponent implements OnInit{

  object: any;
  js:any;

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(){
    this.object=this.route.snapshot.paramMap.get('id');
     this.js=JSON.parse(this.object)
    console.log(this.js)


  }

}
