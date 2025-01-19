import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(){
    this.disable();
    AOS.init({
      offset: 400,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 400,
    });
  }
  disable () {
  //   if (window.innerWidth <= 992) {
  //     AOS.refreshHard(); // Resets all animations
  //     AOS.init({
  //       disable: true // Disable AOS animations
  //     });
  //   } else {
      AOS.init({
        disable: false // Enable AOS animations
      });
    }
  }
// }
