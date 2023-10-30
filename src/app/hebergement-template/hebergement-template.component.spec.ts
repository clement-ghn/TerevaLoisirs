import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementTemplateComponent } from './hebergement-template.component';

describe('HebergementTemplateComponent', () => {
  let component: HebergementTemplateComponent;
  let fixture: ComponentFixture<HebergementTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HebergementTemplateComponent]
    });
    fixture = TestBed.createComponent(HebergementTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
