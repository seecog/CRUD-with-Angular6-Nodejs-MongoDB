import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrudproductComponent } from './crudproduct/crudproduct.component';
import { CruddoctorComponent } from './cruddoctor/cruddoctor.component';
import { FormsModule } from '@angular/forms';
import { AssetcomponentsComponent } from './assetcomponents/assetcomponents.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    CrudproductComponent,
    CruddoctorComponent,
    AssetcomponentsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
