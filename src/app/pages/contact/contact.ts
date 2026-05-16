import { Component } from '@angular/core';
import { AfterNavbar } from "../../components/after-navbar/after-navbar";
import { Cta } from "../../components/sections/cta/cta";
import { GsapSlideDirective } from "../../directives/gsap-slide-directive";

@Component({
  selector: 'app-contact',
  imports: [AfterNavbar, Cta, GsapSlideDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {

}
