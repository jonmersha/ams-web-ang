import { Component } from '@angular/core';
import { FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-anual-plan',
  templateUrl: './anual-plan.component.html',
  styleUrls: ['./anual-plan.component.css']
})
export class AnualPlanComponent {
  // audit_subject=new FormControl('', Validators.required);
  // auditees= new FormControl();

  audit_subject= new FormControl(Validators.required);
  auditees= new FormControl(Validators.required);
  team_id= new FormControl(Validators.required); 
  audit_type= new FormControl(Validators.required); 
  audit_year= new FormControl(Validators.required); 
  risk_score= new FormControl(Validators.required); 
  risk_level= new FormControl(Validators.required);
 


 // myControl=new FormControl('');

 registerAnnualPlan(){
  
 }
  }


