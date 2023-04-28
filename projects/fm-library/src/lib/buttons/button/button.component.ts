import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <div class="da-button-single">
    <button 
        (click)="getValue()" 
        [ngClass]="[light ? 'light' : '', iconButton ? 'short' : '']" 
        #target
    >
        <fa-icon 
            *ngIf="iconLeft"
            class="da-button-icon left" 
            [icon]="iconLeft" 
        ></fa-icon>
        <span class="da-button-label" *ngIf="value">{{ value }}</span> 
        <fa-icon 
            *ngIf="icon"
            class="da-button-icon main" 
            [icon]="icon" 
        ></fa-icon>
        <fa-icon 
            *ngIf="iconRight"
            class="da-button-icon right" 
            [icon]="iconRight" 
        ></fa-icon>
    </button>
    <div *ngIf="icon" class="da-button-icon-label" [ngClass]="{'light' : light}">{{label}}</div>
</div>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() iconButton: boolean = false;
  @Input() light: boolean = false;
  @Input() type!: string;
  @Input() value!: string;
  @Input() label!: string;
  @Input() icon: any;
  @Input() iconLeft: any;
  @Input() iconRight: any;
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<string>();

  constructor() { }

  getValue() {
    this.buttonValue.emit(this.type);
  }

}
