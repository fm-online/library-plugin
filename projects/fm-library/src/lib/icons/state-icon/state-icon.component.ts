import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-state-icon',
  templateUrl: './state-icon.component.html',
  styleUrls: ['./state-icon.component.scss']
})
export class StateIconComponent {
  @Input() state: string = 'warning';

}
