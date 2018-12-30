import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { CostComponent } from './cost/cost.component';
import { ReportComponent } from './report/report.component';
import { AuthenticationComponent} from './authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatInput, MatError} from '@angular/material';

@NgModule({
  declarations: [
    AuthenticationComponent,
    AppComponent,
    CountComponent,
    CostComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
