import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  item =[
      {
        title :"phone",
        value :"+01125686634",
        icon: "bi bi-phone",
        color:"#E93B81"
      },
      {
        title :"Email",
        value :"@ahmed20015510",
        icon: "bi bi-envelope-paper",
        color:"#6AB5B9"
      },
      {
        title :"Location",
        value :"cairo",
        icon: "bi bi-geo-alt-fill",
        color:"#FD7590"
      },
      {
        title :"Birthday",
        value :"May 5, 2001",
        icon: "bi bi-calendar2-week",
        color:"#C17CEB"
      }
  ]
  trackByFn(index: number, item: any): number {
    return item.id;
  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Ahmed Salah.pdf';
    link.download = 'Ahmed Salah.pdf';
    link.click();
  }
}
