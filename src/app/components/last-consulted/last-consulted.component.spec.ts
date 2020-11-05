import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastConsultedComponent } from './last-consulted.component';

describe('LastConsultedComponent', () => {
  let component: LastConsultedComponent;
  let fixture: ComponentFixture<LastConsultedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastConsultedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastConsultedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
