import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);

  isHomeActive(): boolean {
    const url = this.router.url;
    return url === '/' || url === '/home' || url === '/home#hero';
  }
}
