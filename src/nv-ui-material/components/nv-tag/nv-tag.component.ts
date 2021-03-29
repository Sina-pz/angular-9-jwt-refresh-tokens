import { NvColor } from './../../../app/_models/view/nv-color';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-tag',
  templateUrl: './nv-tag.component.html',
  styleUrls: ['./nv-tag.component.scss']
})
export class NvTagComponent implements OnInit {

  @Input() public text: string;
  @Input() public color: NvColor;

  constructor() { }

  ngOnInit(): void {
  }

}
