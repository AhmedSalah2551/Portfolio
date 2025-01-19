import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './works/details/details.component';
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    ContactComponent,
    WorksComponent,
    ResumeComponent,
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class TopicsModule { }
