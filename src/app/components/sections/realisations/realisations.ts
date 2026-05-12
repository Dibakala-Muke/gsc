import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Scroll } from '../../../directives/scroll';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-realisations',
  imports: [Scroll],
  templateUrl: './realisations.html',
  styleUrl: './realisations.css',
})
export class Realisations implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
