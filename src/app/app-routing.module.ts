import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDatabasesComponent } from './Components/select-databases/select-databases.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { OrderComponent } from './Components/order/order.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { BusinessDomainsComponent } from './Components/business-domains/business-domains.component';
const routes: Routes = [
  {path:'',component:SelectDatabasesComponent},
  {path:"sidenav",component:SideNavComponent},
  {path:"businessdomains",component:BusinessDomainsComponent},
  {path:"orders",component:OrderComponent},
  {path:"projects",component:ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
