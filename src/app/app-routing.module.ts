import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './components/billing/billing.component';
import { MaterialModule } from './material/material.module';
import { PatientComponent } from './components/patient/patient.component';
import { PhysicianComponent } from './components/physician/physician.component';
import { ReviewComponent } from './components/review/review.component';
import { SpecimenComponent } from './components/specimen/specimen.component';

const routes: Routes = [
  { path: '', redirectTo: 'patient', pathMatch: 'full' },
  { path: 'patient', component: PatientComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'physician', component: PhysicianComponent },
  { path: 'specimen', component: SpecimenComponent },
  { path: 'review', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
