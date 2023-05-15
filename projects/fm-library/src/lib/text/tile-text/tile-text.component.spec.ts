import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileTextComponent } from './tile-text.component';

describe('TileTextComponent', () => {
  let component: TileTextComponent;
  let fixture: ComponentFixture<TileTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
