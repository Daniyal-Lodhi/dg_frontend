import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetadatavaluesComponent } from './Components/metadatavalues/metadatavalues.component';
import { BusinessDomainsComponent } from './Components/business-domains/business-domains.component';
import { dbConfigs } from './Components/dbconfigs/db-configs.component';
const routes: Routes = [
  {path:'dbConfigs',component:dbConfigs},
  {path:"metadatavalues",component:MetadatavaluesComponent},
  {path:"businessdomains",component:BusinessDomainsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
