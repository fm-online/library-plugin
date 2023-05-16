import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-tile-text',
  templateUrl: './tile-text.component.html',
  styleUrls: ['./tile-text.component.scss']
})
export class TileTextComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() light: boolean = false;
  @Input() info: string = '';
  @Input() size: string = '16px';

  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getInfo(e: string) {
    console.log(e);
    this.infoValue.emit(e);
  }

}
