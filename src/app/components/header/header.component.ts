import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  newMode:boolean=false;
  ngOnInit(): void {
    AOS.init({
      offset: 100,
      duration: 100,
      easing: 'ease-in-out',
      delay: 0,
    });
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.newMode = JSON.parse(savedDarkMode);
    }
}

toggleDarkMode() {
    this.newMode = !this.newMode;
    localStorage.setItem('darkMode', JSON.stringify(this.newMode));
    console.log(this.newMode);
}
}
