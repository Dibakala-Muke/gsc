import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParternsMarquee } from './parterns-marquee';

describe('ParternsMarquee', () => {
  let component: ParternsMarquee;
  let fixture: ComponentFixture<ParternsMarquee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParternsMarquee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParternsMarquee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
