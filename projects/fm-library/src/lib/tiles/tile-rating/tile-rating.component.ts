import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-tile-rating',
  templateUrl: './tile-rating.component.html',
  styleUrls: ['./tile-rating.component.scss'],
})

export class TileRatingComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() name: string = 'name';
  @Input() stars: number = 5;
  @Input() icon: string = 'assets/images/circleCheck.svg';
  @Input() info:  string = '';
  success!: boolean;
  rating: number = 0;
  @Output() public ratingValue:EventEmitter<any> = new EventEmitter<any>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  getValue(e: any) {
    const name = this.name;
    const rating = e.rating;
    this.success = true;
    this.ratingValue.emit({rating, name});
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
