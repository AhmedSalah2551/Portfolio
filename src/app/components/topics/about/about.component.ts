import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  item=[
    {
      head:"High performance Website",
      text:"I can create high-performance website which optimized for speed, efficiency, and user experience.",
      icon:"bi bi-lightbulb",
      color:"#d566ff"
    },
    {
      head:"SEO friendly",
      text:"I can create a SEO-friendly website optimized for search engine visibility, ensuring your site attracts more visitors",
      icon:"bi bi-code-slash",
      color:"#dda10c"
    },
    {
      head:"Responsive website",
      text:"I can create a responsive website that adapts seamlessly to any device or screen size, providing an optimal viewing experience for all users",
      icon:"bi bi-camera",
      color:"#ff6080"
    },
    {
      head:"Clean Code",
      text:"I can deliver clean, well-documented code that is easy to maintain, scalable, and enhances overall website performance and reliability.",
      icon:"bi bi-laptop",
      color:"#269fff"
    }
  ]
  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
