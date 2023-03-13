import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() isOpen = new EventEmitter<boolean>();

  sideMenuState = false;

  toggleSideMenu() {
    this.sideMenuState = !this.sideMenuState;
    this.isOpen.emit(this.sideMenuState);
  }
}
