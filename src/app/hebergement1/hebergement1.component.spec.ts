import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hebergement1Component } from './hebergement1.component';

describe('Hebergement1Component', () => {
  let component: Hebergement1Component;
  let fixture: ComponentFixture<Hebergement1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hebergement1Component]
    });
    fixture = TestBed.createComponent(Hebergement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
