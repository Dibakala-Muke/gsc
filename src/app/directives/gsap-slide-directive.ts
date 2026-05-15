import { Directive, ElementRef, Input, afterNextRender } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appGsapSlide]',
  standalone: true,
})
export class GsapSlideDirective {
  @Input('appGsapSlide') direction: 'left' | 'right' | 'top' | 'bottom' | 'zoom' = 'left';

  constructor(private el: ElementRef) {
    afterNextRender(() => {
      const element = this.el.nativeElement;
      let offsetX = 0;
      let offsetY = 0;
      let initialScale = 0.95;
      let initialOpacity = 0;

      switch (this.direction) {
        case 'left':
          offsetX = -150;
          break;
        case 'right':
          offsetX = 150;
          break;
        case 'top':
          offsetY = -150;
          break;
        case 'bottom':
          offsetY = 150;
          break;
        case 'zoom':
          initialScale = 0.8;
          break;
      }

      gsap.set(element, { opacity: initialOpacity, x: offsetX, y: offsetY, scale: initialScale });

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 2,
                ease: 'power4.out',
                overwrite: true,
              });
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(element);
    });
  }
}
