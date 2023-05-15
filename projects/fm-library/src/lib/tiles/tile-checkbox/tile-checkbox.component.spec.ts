import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCheckboxComponent } from './tile-checkbox.component';

describe('TileCheckboxComponent', () => {
  let component: TileCheckboxComponent;
  let fixture: ComponentFixture<TileCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
