import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { BillingComponent } from './components/billing/billing.component';
import { PhysicianComponent } from './components/physician/physician.component';
import { SpecimenComponent } from './components/specimen/specimen.component';
import { ReviewComponent } from './components/review/review.component';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyInputComponent } from './components/Commons/my-input/my-input.component';
import { FormsModule } from '@angular/forms';
import { MySelectComponent } from './components/Commons/my-select/my-select.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    BillingComponent,
    PhysicianComponent,
    SpecimenComponent,
    ReviewComponent,
    MyInputComponent,
    MySelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
