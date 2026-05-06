import { Directive, ElementRef, afterNextRender } from '@angular/core'; // 1. Importez afterNextRender
import { gsap } from 'gsap';

@Directive({
  selector: '[appGsapScroll]',
  standalone: true 
})
export class GsapScroll { 
  constructor(private el: ElementRef) {
    afterNextRender(() => {
      const element = this.el.nativeElement;

      gsap.set(element, { opacity: 0, y: 40 });

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(element, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
          }
        });
      }, { threshold: 0.2 });

      observer.observe(element);
    });
  }
}
