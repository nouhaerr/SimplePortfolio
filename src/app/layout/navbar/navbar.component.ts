import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen: boolean = false;
  constructor(private router: Router) {}

  toggleMenu() {
    console.log('Toggling menu ', this.menuOpen);  // Log the menu state
    this.menuOpen = !this.menuOpen;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.navbar') !== null;
    if (!clickedInside) {
      this.menuOpen = false;
    }
  }
  closeMenu() {
    this.menuOpen = false;
  }
}
