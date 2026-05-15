import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Scroll } from "../../directives/scroll";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, Scroll],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {

}
