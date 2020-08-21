import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau1Component } from './cau1.component';

describe('Cau1Component', () => {
  let component: Cau1Component;
  let fixture: ComponentFixture<Cau1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cau1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
