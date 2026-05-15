import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fadeInUp } from '../../../animations/fade/fade';
import { initFlowbite } from 'flowbite';
import { Kpi } from "../../kpi/kpi";
import { GsapSlideDirective } from "../../../directives/gsap-slide-directive";

@Component({
  selector: 'app-hero',
  imports: [Kpi, GsapSlideDirective],
  animations: [fadeInUp],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}

