import { ButtonThemeColor } from './../components/nv-button/button-theme-color';
import { ButtonType } from './../components/nv-button/button-type';
import { Component, OnInit } from '@angular/core';

enum EvMaterial {
  Button,
  ProgressCircle,
  Avatar,
  Table

}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  public selectedItem: EvMaterial = EvMaterial.Button;
  public materials = EvMaterial;
  // ProgressCircle
  public progress1: number = mockProgressCircle().progress1;
  public progress2: number = mockProgressCircle().progress2;
  public radius: number = mockProgressCircle().radius;
  // Button
  public label: string = mockButtonComponent().label;
  public type: ButtonType = mockButtonComponent().type;
  public color: ButtonThemeColor = mockButtonComponent().color;
  constructor() { }

  ngOnInit(): void {
  }

  public onItemClick(selectedItem: EvMaterial): void {
    this.selectedItem = selectedItem;
  }

}

function mockProgressCircle() {
  const nvProgressCircle = {
    progress1: 0.7,
    progress2: 0.3,
    radius: 24
  }
  return nvProgressCircle;
}

function mockButtonComponent() {
  const nvButton = {
  label: 'Select',
  type: ButtonType.Raised,
  color: ButtonThemeColor.Accent
  }
  return nvButton;
}

function mockTableComponent() {}
