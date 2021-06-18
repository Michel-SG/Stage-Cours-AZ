import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetteGroupComponent } from './calculette-group.component';

describe('CalculetteGroupComponent', () => {
  let component: CalculetteGroupComponent;
  let fixture: ComponentFixture<CalculetteGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculetteGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculetteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
