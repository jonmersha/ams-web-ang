import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { AuditPlanService } from 'src/app/services/audit-paln/audit-plan.service';


@Component({
  selector: 'app-anual-plan-list',
  templateUrl: './anual-plan-list.component.html',
  styleUrls: ['./anual-plan-list.component.sass']
})
export class AnualPlanListComponent implements OnInit{
  plan:any;

  constructor(private planListServiec:AuditPlanService){

  }
  ngOnInit(){
   this.planListServiec.getData().subscribe(resp=>{
    this.plan=resp.data;
    console.log(this.plan);

   })
   
  }
  getString(data:any){
    return JSON.stringify(data)
  }

}
