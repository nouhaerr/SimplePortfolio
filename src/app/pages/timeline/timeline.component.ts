import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true, // 👈 this line
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  currentSection: 'studies' | 'experiences' = 'studies';

  showSection(section: 'studies' | 'experiences') {
    this.currentSection = section;
  }
}
