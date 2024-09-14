import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(){
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 200,
    });
    }
  title = 'Portfolio';
  disable () {
    if (window.innerWidth <= 992) {
      AOS.refreshHard(); // Resets all animations
      AOS.init({
        disable: true // Disable AOS animations
      });
    } else {
      AOS.init({
        disable: false // Enable AOS animations
      });
    }
  }
}
