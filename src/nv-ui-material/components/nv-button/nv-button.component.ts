
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonThemeColor } from './button-theme-color';
import { ButtonType } from './button-type';

export enum INvButton {
  A,
  B,
  C
}

@Component({
  selector: 'app-nv-button',
  templateUrl: './nv-button.component.html',
  styleUrls: ['./nv-button.component.scss']
})
export class NvButtonComponent implements OnInit {


  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();
  @Input() public label!: string;
  @Input() public type!: ButtonType;
  @Input() public color!: ButtonThemeColor;


  constructor() { }

  ngOnInit(): void {
    console.log(this.type);
   }
  onClick() {
    this.buttonClick.emit();
  }
}
