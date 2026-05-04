import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  @Output() closeMenu = new EventEmitter<void>();

  linkClicked() {
    this.closeMenu.emit();
  }
}
