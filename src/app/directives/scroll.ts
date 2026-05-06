// src/app/directives/scroll.directive.ts
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.el.nativeElement);
  }
}