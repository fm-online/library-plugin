import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCheckboxGroupComponent } from './tile-checkbox-group.component';

describe('TileCheckboxGroupComponent', () => {
  let component: TileCheckboxGroupComponent;
  let fixture: ComponentFixture<TileCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCheckboxGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
