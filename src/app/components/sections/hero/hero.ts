import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { Kpi } from "../../kpi/kpi";
import { GsapSlideDirective } from "../../../directives/gsap-slide-directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  imports: [Kpi, GsapSlideDirective, RouterLink],
  animations: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}

