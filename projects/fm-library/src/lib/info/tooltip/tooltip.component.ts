import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() text: string = '';
  @Input() icon: string = 'assets/images/circleExclamation.svg';
  @Input() autoWidth: boolean = false;
  @Input() light: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
