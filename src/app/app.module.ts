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

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    BillingComponent,
    PhysicianComponent,
    SpecimenComponent,
    ReviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
