import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetadatavaluesComponent } from './components/metadatavalues/metadatavalues.component';
import { BusinessDomainsComponent } from './components/business-domains/business-domains.component';
import { dbConfigs } from './components/dbconfigs/db-configs.component';
import { AddBusinessDomainComponent } from './components/add-business-domain/add-business-domain.component';
import { LoginComponent } from './modules/auth/login/login.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dbConfigs',component:dbConfigs},
  {path:"metadatavalues/:id",component:MetadatavaluesComponent},
  {path:"businessdomains",component:BusinessDomainsComponent},
  {path:"addbusinessdomain",component:AddBusinessDomainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
