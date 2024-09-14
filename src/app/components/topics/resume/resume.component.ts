import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  education = [
    {
      date:"2021-2023",
      field:"Ph.D In Horriblensess ",
      name:"- University",
      location:"Los Angeles, CA"
    },
    {
      date:"2017-2021",
      field:"Computer Science ",
      name:"- Imperialize,",
      location:"Technical Institute"
    },
    {
      date:"2017-2021",
      field:"Computer Science ",
      name:"- Imperialize,",
      location:"Technical Institute"
    }
  ];
  experience = [
    {
      date:"2021-2023",
      field:"Ph.D In Horriblensess",
      location:"Los Angeles, CA"
    },
    {
      date:"2017-2021",
      field:"Computer Science",
      location:"Technical Institute"
    },
    {
      date:"2017-2021",
      field:"Computer Science",
      location:"Technical Institute"
    }
  ];
  knowledges = [
    {skill:"html"},
    {skill:"css"},
    {skill:"javascript"},
    {skill:"angular"},
    {skill:"rxjs"},
    {skill:"sass"},
    {skill:"unit testing"},
    {skill:"lazy loading"},
    {skill:"seo"}
  ];
  skills=[
    {
      title:"Web Design",
      value:"100%",
      class:"progress-bar progress-bar-striped",
    },
    {
      title:"Web Design",
      value:"100%",
      class:"progress-bar progress-bar-striped bg-success",
    },
    {
      title:"Web Design",
      value:"100%",
      class:"progress-bar progress-bar-striped bg-warning",
    },
    {
      title:"Web Design",
      value:"100%",
      class:"progress-bar progress-bar-striped bg-danger",
    },
  ]
  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
