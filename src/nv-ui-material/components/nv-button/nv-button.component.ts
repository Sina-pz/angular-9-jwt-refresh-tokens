import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nv-button',
  templateUrl: './nv-button.component.html',
  styleUrls: ['./nv-button.component.less']
})
export class NvButtonComponent implements OnInit {
  @Input() label: string;
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.buttonClick.emit();
  }
}
