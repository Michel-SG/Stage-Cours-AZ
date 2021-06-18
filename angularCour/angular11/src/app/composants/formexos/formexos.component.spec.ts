import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormexosComponent } from './formexos.component';

describe('FormexosComponent', () => {
  let component: FormexosComponent;
  let fixture: ComponentFixture<FormexosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormexosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormexosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
