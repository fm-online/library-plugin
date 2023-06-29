import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleVerticalComponent } from './toggle-vertical.component';

describe('ToggleComponent', () => {
  let component: ToggleVerticalComponent;
  let fixture: ComponentFixture<ToggleVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
