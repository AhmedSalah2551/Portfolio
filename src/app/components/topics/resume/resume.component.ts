import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  education = [
    {
      date: "2019-2023",
      field: "Computer Science in 10th Of Ramadn ",
      location: "10th of Ramadan"
    },
    {
      date: "2023-2024",
      field: "Military service certificate ",
      location: "ِAswan-Egypt"
    },
    {
      date: "2019-now",
      field: "Html, Css, Bootstrap, Tailwind, Js, Ts, Git&Github",
      location: "Elzero Web School"
    },
    {
      date: "2019-now",
      field: "Angular, RxJs, Angular Material, Primeng, RestfulApi, ",
      location: "Freecodemap"
    },
    {
      date: "2023-now",
      field: "NodeJs, ExpressJs, MongoDB, Mongoose",
      location: "CodeZone"
    },
    {
      date: "2024-now",
      field: "Nestjs, TypeORM, PostgreSQL, Prisma, Microservices",
      location: "Udemy"
    }
  ];
  experience = [
    {
      date: "2022-2023",
      field: "Graduation project",
      location: "10th Of Ramadan"
    },
    {
      date: "2019-now",
      field: "Making Projects",
      location: "Any Where"
    },
    {
      date: "2025-may - 2026-April",
      field: "Front End Angular - Full Time",
      location: "marsa waves"
    }
  ];
  knowledges = [
    { skill: "html" },
    { skill: "css" },
    { skill: "sass" },
    { skill: "Bootstrap" },
    { skill: "Tailwind" },
    { skill: "javascript" },
    { skill: "Typescript" },
    { skill: "angular" },
    { skill: "angular-Material" },
    { skill: "Primeng" },
    { skill: "rxjs" },
    { skill: "unit testing" },
    { skill: "lazy loading" },
    { skill: "Restful Api" },
    { skill: "NodeJs" },
    { skill: "ExpressJs" },
    { skill: "MongoDB" },
    { skill: "Mongoose" },
    { skill: "Nestjs" },
    { skill: "TypeORM" },
    { skill: "PostgreSQL" },
    { skill: "Prisma" },
    { skill: "Microservices" },
    { skill: "Middlewares" },
    { skill: "WebSockets" },
    { skill: "RESTful Services" },
    { skill: "GraphQL" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Figma" },
    { skill: "Authorization" },
    { skill: "Authentication" },
    { skill: "JWT" },
    { skill: "OOP" },
    { skill: "Design Patterns" },
    { skill: "Data Structures" },
    { skill: "Algorithms" },
    { skill: "Responsive Design" },
    { skill: "Agile Methodology" },
    { skill: "Jira" },
    { skill: "Scrum" },
    { skill: "Slack" },
  ];
  skills = [
    {
      title: "Performance",
      class: "progress-bar progress-bar-striped"
    },
    {
      title: "Best Practices",
      class: "progress-bar progress-bar-striped bg-success"
    },
    {
      title: "Accessibilty",
      class: "progress-bar progress-bar-striped bg-warning"
    },
    {
      title: "Seo",
      class: "progress-bar progress-bar-striped bg-danger",
    },
  ]
  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
