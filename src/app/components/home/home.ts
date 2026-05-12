import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from "../sections/hero/hero";
import { About } from "../sections/about/about";
import { Values } from "../sections/values/values";
import { Services } from "../sections/services/services";
import { VisionMission } from "../sections/vision-mission/vision-mission";
import { Realisations } from "../sections/realisations/realisations";
import { Cta } from "../sections/cta/cta";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Values, Services, VisionMission, Realisations, Cta, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
