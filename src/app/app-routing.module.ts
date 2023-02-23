import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanListComponent } from './audit_plan/plan-list/plan-list.component';
import { AnualPlanListComponent } from './components/audit-plan/anual-plan-list/anual-plan-list.component';
import { AnualPlanComponent } from './components/audit-plan/anual-plan/anual-plan.component';
import { PlanDetailsComponent } from './components/audit-plan/plan-details/plan-details.component';
import { HomeComponent } from './layout/home/home.component';
import { MainContentWrapperComponent } from './layout/main-content-wrapper/main-content-wrapper.component';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent}, 
  {path:'Plan',component:AnualPlanComponent},
  {path:'planlist',component:PlanListComponent},
  {path:'login',component:LoginComponent},
  {path:'detail/:id',component:PlanDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
