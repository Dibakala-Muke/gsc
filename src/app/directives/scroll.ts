import { Directive, ElementRef, afterNextRender } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class Scroll {
  constructor(private el: ElementRef) {
    afterNextRender(() => {
      // On cible les articles directement à l'intérieur du conteneur grid
      const cards = this.el.nativeElement.querySelectorAll('article');

      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.20,
            stagger: 0.3, // Délai de 0.2s entre chaque article
            ease: 'power3.out'
          });
          observer.unobserve(this.el.nativeElement); // On anime qu'une seule fois
        }
      }, { threshold: 0.2 });

      observer.observe(this.el.nativeElement);
    });
  }
}
