import { Component } from '@angular/core';
import { Scroll } from "../../../directives/scroll";
import { GsapSlideDirective } from "../../../directives/gsap-slide-directive";

@Component({
  selector: 'app-cta',
  imports: [Scroll, GsapSlideDirective],
  templateUrl: './cta.html',
  styleUrls: ['./cta.css'],
})
export class Cta {

}
