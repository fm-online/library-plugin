import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleHorizontalComponent } from './toggle-horizontal.component';

describe('ToggleHorizontalComponent', () => {
  let component: ToggleHorizontalComponent;
  let fixture: ComponentFixture<ToggleHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
