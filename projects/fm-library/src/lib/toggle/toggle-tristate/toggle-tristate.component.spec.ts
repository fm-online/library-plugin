import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTristateComponent } from './toggle-tristate.component';

describe('ToggleTristateComponent', () => {
  let component: ToggleTristateComponent;
  let fixture: ComponentFixture<ToggleTristateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleTristateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTristateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
