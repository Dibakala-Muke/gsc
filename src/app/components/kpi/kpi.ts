import { Component, signal, OnInit, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { GsapSlideDirective } from "../../directives/gsap-slide-directive";

interface KpiItem {
  target: number;
  current: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-kpi',
  imports: [GsapSlideDirective],
  templateUrl: './kpi.html',
  styleUrls: ['./kpi.css'],
})
export class Kpi implements OnInit {
  kpiSection = viewChild.required<ElementRef>('kpiSection');

  kpis = signal<KpiItem[]>([
    { target: 5000, current: 0, suffix: '+', label: 'Participants formés' },
    { target: 50, current: 0, suffix: '+', label: 'Événements organisés' },
    { target: 20, current: 0, suffix: '+', label: 'Partenaires mobilisés' }
  ]);

  constructor() {
    afterNextRender(() => {
      this.initIntersectionObserver();
    });
  }

  ngOnInit() {
  }

  private initIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.kpiSection().nativeElement);
  }


  private animateCounters() {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.kpis.update(items =>
        items.map(item => ({
          ...item,
          current: Math.floor(easeOut * item.target)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.kpis.update(items =>
          items.map(item => ({ ...item, current: item.target }))
        );
      }
    };

    requestAnimationFrame(animate);
  }
}