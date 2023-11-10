import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SelectDatabasesComponent } from './Components/select-databases/select-databases.component';
import { OrderComponent } from './Components/order/order.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProjectsComponent } from './Components/projects/projects.component';
import { BusinessDomainsComponent } from './Components/business-domains/business-domains.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SelectDatabasesComponent,
    OrderComponent,
    SideNavComponent,
    ProjectsComponent,
    BusinessDomainsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatButtonModule, 
    BrowserAnimationsModule, 
    MatTreeModule, 
    MatButtonModule, 
    MatIconModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
