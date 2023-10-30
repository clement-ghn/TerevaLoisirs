import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hebergement2Component } from './hebergement2.component';

describe('Hebergement2Component', () => {
  let component: Hebergement2Component;
  let fixture: ComponentFixture<Hebergement2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hebergement2Component]
    });
    fixture = TestBed.createComponent(Hebergement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
