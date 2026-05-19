import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { GsapSlideDirective } from "../../../directives/gsap-slide-directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-realisations',
  imports: [GsapSlideDirective, RouterLink],
  templateUrl: './realisations.html',
  styleUrls: ['./realisations.css'],
})
export class Realisations implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
