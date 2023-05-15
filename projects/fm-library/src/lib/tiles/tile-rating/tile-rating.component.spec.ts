import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileRatingComponent } from './tile-rating.component';

describe('TileRatingComponent', () => {
  let component: TileRatingComponent;
  let fixture: ComponentFixture<TileRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
