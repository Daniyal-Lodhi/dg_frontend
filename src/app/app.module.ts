import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SideNavComponent } from './Components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { dbConfigs } from './components/dbconfigs/db-configs.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MetadatavaluesComponent } from './components/metadatavalues/metadatavalues.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BusinessDomainsComponent } from './components/business-domains/business-domains.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {AsyncPipe} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBusinessDomainComponent } from './components/add-business-domain/add-business-domain.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './modules/auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    dbConfigs,
    // SideNavComponent,
    MetadatavaluesComponent,
    BusinessDomainsComponent,
    NavbarComponent,
    AddBusinessDomainComponent,
    LoginComponent,
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
    AsyncPipe,
    MatSnackBarModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
