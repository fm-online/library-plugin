import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tile-text',
  templateUrl: './tile-text.component.html',
  styleUrls: ['./tile-text.component.scss']
})
export class TileTextComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() light: boolean = false;
  @Input() size: string = '16px';

  constructor() { }

  ngOnInit(): void {
  }

}
