import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepdashboardComponent } from './step/stepdashboard/stepdashboard.component';
import { StepCoursesComponent } from './step/step-courses/step-courses.component';
import { StepAccomodationsComponent } from './step/step-accomodations/step-accomodations.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StepdashboardComponent,
    StepCoursesComponent,
    StepAccomodationsComponent,
    MainHeaderComponent,
    MainFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
