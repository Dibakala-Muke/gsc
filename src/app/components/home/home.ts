import { Component } from '@angular/core';
import { Hero } from "../sections/hero/hero";
import { Values } from "../sections/values/values";
import { VisionMission } from "../sections/vision-mission/vision-mission";
import { Realisations } from "../sections/realisations/realisations";
import { Cta } from "../sections/cta/cta";

@Component({
  selector: 'app-home',
  imports: [Hero, Values, VisionMission, Realisations, Cta],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
