import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsapSlideDirective } from "../../directives/gsap-slide-directive";

@Component({
  selector: 'app-after-navbar',
  standalone: true,
  imports: [CommonModule, GsapSlideDirective],
  templateUrl: './after-navbar.html',
  styleUrls: ['./after-navbar.css'],
})
export class AfterNavbar {
  title = input.required<string>();
  backgroundImage = input.required<string>();
}