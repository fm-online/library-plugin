import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() autoWidth: boolean = false;
  @Input() light: boolean = false;
  @Input() content!: TemplateRef<any>;

  constructor(
    public screen: HelperService
  ) { }

  ngOnInit(): void {
  }

}
