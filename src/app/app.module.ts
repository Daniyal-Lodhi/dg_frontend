import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { dbConfigs } from './Components/dbconfigs/db-configs.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MetadatavaluesComponent } from './Components/metadatavalues/metadatavalues.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BusinessDomainsComponent } from './Components/business-domains/business-domains.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {AsyncPipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    dbConfigs,
    SideNavComponent,
    MetadatavaluesComponent,
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
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
