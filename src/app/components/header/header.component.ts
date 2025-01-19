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
}
}
