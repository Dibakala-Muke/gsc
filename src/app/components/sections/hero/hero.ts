import { Component } from '@angular/core';
import { fadeInUp } from '../../../animations/fade/fade';

@Component({
  selector: 'app-hero',
  imports: [],
  animations: [fadeInUp],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}

