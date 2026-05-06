import { Component, signal, afterNextRender } from '@angular/core'; // 1. Ajoutez afterNextRender
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true, // Assurez-vous qu'il est bien en standalone si besoin
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
  protected readonly title = signal('gsc');

  constructor() {
    afterNextRender(() => {
      initFlowbite();
    });
  }
}