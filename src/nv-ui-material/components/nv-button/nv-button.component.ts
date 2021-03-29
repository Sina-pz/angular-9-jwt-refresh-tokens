import { ButtonType } from './button-type';
import { ButtonThemeColor } from './button-theme-color';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nv-button',
  templateUrl: './nv-button.component.html',
  styleUrls: ['./nv-button.component.scss']
})
export class NvButtonComponent implements OnInit {
  public themeColors: ButtonThemeColor;
  public buttonTypes: ButtonType;
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();
  @Input() public label: string;
  @Input() public type: ButtonType;
  @Input() public color: ButtonThemeColor;


  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.buttonClick.emit();
  }
}
