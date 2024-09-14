import { Component } from '@angular/core';
import * as AOS from 'aos';
import {MatDialog} from '@angular/material/dialog'
import { DetailsComponent } from './details/details.component';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  selectedFilter: string = 'all';
  result :any[] = []
  data : any[] = [
    {
      id:1,
      name:"crud",
      img:"https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fwork%2Fwork-img-1.png&w=384&q=75",
      repositery:"https://github.com/",
      preview:"http://localhost:4200/works",
      tools:"angular",
      content:"this is my portifilo page i enhased it from https://bostami-bootstrap-nextjs.vercel.app/home-3 wbsite i used angular"
    },
    {
      id:2,
      name:"ToDo",
      img:"https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fwork%2Fwork-img-1.png&w=384&q=75",
      repositery:"https://github.com/",
      preview:"http://localhost:4200/about",
      tools:"angular",
      content:"this is my portifilo page i enhased it from https://bostami-bootstrap-nextjs.vercel.app/home-3 wbsite i used angular" 
    },
    {
      id:3,
      name:"ecommerce",
      img:"https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fwork%2Fwork-img-1.png&w=384&q=75",
      repositery:"https://github.com/",
      preview:"http://localhost:4200/resume",
      tools:"angular",
      content:"this is my portifilo page i enhased it from https://bostami-bootstrap-nextjs.vercel.app/home-3 wbsite i used angular" 
    },
    {
      id:4,
      name:"mcq",
      img:"https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fwork%2Fwork-img-1.png&w=384&q=75",
      repositery:"https://github.com/",
      preview:"http://localhost:4200/contact",
      tools:"js",
      content:"this is my portifilo page i enhased it from https://bostami-bootstrap-nextjs.vercel.app/home-3 wbsite i used angular" 
    },
    {
      id:5,
      name:"dashboard",
      img:"https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fwork%2Fwork-img-1.png&w=384&q=75",
      repositery:"https://github.com/",
      preview:"https://bostami-bootstrap-nextjs.vercel.app/resume",
      tools:"js",
      content:"this is my portifilo page i enhased it from https://bostami-bootstrap-nextjs.vercel.app/home-3 wbsite i used angular" 
    },
  ]
  constructor(private dialogRef : MatDialog){}

  openDialog(id:number){
    this.dialogRef.open(DetailsComponent, {
      width: '800px',
      height: '90%',
      data:  this.data[id] 
    });
  }
  ngOnInit(){
    console.log(this.data[0]);
    
    this.filter(this.selectedFilter);
    
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 200
    });
    }
trackByFn(index: number, item: any): number {
  return item.id;
}
    filter(category: string) {
      this.selectedFilter = category;
      if (category === 'all') {
        this.result = [...this.data]; 
      } else {
        this.result = this.data.filter(item => item.tools === category);
      }
    }
}