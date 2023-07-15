import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';

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
  @Input() rating: number = 0;
  @Input() success!: boolean;
  @Output() public ratingValue:EventEmitter<any> = new EventEmitter<any>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor(
    public screen: HelperService
  ) {}

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
