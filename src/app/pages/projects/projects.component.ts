import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Angular and Spring Boot.',
      image: 'assets/projects/portf.png',
      link: 'https://your-portfolio-link.com'
    },
    {
      title: 'Pong Connect',
      description: 'Retro-inspired game with local multiplayer and tournament mode — no online gameplay, just fun with friends on one machine.',
      image: 'assets/projects/pongConn.jpg',
      link: 'https://github.com/nouhaerr/PongConnect'
    },
    {
      title: 'PureServe',
      description: 'Custom HTTP server built in C++ supporting GET/POST/DELETE.',
      image: 'assets/projects/serv.png',
      link: 'https://github.com/nouhaerr/WebServ'
    },
    {
      title: 'ContainFlow',
      description: 'Docker-based system orchestration project.',
      image: 'assets/projects/contain.png',
      link: 'https://github.com/nouhaerr/inceptionBonus'
    },
    {
      title: 'ShellCraft',
      description: 'A mini shell CLI tool written in C.',
      image: 'assets/projects/oo.png',
      link: 'https://github.com/nouhaerr/Minishell_1337'
    }
  ];
}
