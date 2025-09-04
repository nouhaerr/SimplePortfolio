import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxParticlesModule } from '@tsparticles/angular'; // le bon package V3
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxParticlesModule],  // TRÈS IMPORTANT !!
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  particlesOptions = {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      links: {
        enable: true,
        distance: 150
      },
      move: { enable: true, speed: 2 }
    }
  };
  mottoText: string = 'Code with purpose. Design with passion.';

  constructor() { }
  
  ngOnInit(): void {
    this.initializeAnimations();
  }


    private initializeAnimations(): void {
    }

    updateMotto(newMotto: string): void {
      this.mottoText = newMotto;
    }

    // Optional: Method to handle scroll-based animations
    onScroll(event: any): void {
      // Add scroll-based effects if needed
    }
}
