import { Directive, ElementRef, afterNextRender } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class Scroll {
  constructor(private el: ElementRef) {
    afterNextRender(() => {
      // On cible les articles directement à l'intérieur du conteneur
      const cards = this.el.nativeElement.querySelectorAll('article');

      if (cards.length === 0) return;

      // Initialiser les éléments avec les valeurs de départ
      gsap.set(cards, { opacity: 0, y: 30 });

      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: 'power3.out'
          });
          observer.unobserve(this.el.nativeElement);
        }
      }, { threshold: 0.05 }); // Très bas pour déclencher facilement

      observer.observe(this.el.nativeElement);
    });
  }
}
