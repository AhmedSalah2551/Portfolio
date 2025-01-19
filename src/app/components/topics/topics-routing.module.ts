import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"", component:AboutComponent},
  {path:"resume", component: ResumeComponent},
  {path:"contact", component: ContactComponent},
  {path:"works", component: WorksComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
