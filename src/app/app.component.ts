import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importation de CommonModule
import { NgxParticlesModule } from '@tsparticles/angular';  // Importation du module correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxParticlesModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nouhaila';
}
