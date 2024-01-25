import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() label: string = '';
  @Input() icons: any = [];
  @Input() button: boolean = false;
  @Input() buttonDisabled: boolean = false;
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public checkboxValue:EventEmitter<any> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
