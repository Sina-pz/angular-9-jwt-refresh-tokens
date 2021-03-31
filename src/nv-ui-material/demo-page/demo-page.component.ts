import { NvColor } from './../../app/_models/view/nv-color';
import { Assignee } from '../../app/_models/assignee';
import { ButtonThemeColor } from './../components/nv-button/button-theme-color';
import { ButtonType } from './../components/nv-button/button-type';
import { Component, OnInit } from '@angular/core';

enum EvMaterial {
  Button,
  ProgressCircle,
  Avatar,
  Tag,
  Table

}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  public selectedItem: EvMaterial = EvMaterial.ProgressCircle;
  public materials = EvMaterial;
  // ProgressCircle
  public progress1: number = mockProgressCircle().progress1;
  public progress2: number = mockProgressCircle().progress2;
  public radius: number = mockProgressCircle().radius;
  // Button
  public label: string = mockButtonComponent().label;
  public type: ButtonType = mockButtonComponent().type;
  public color: ButtonThemeColor = mockButtonComponent().color;
  public type1: ButtonType = mockButtonComponent().type1;
  public color1: ButtonThemeColor = mockButtonComponent().color1;
  public type2: ButtonType = mockButtonComponent().type2;
  public color2: ButtonThemeColor = mockButtonComponent().color2;
  // Avatar
  public assignee: Assignee = mockAvatarComponent();
  // Tag
  public tagColor: NvColor = mockNvTagComponent().color;
  public text: string = mockNvTagComponent().text;

  constructor() { }

  ngOnInit(): void {
  }

  public onItemClick(selectedItem: EvMaterial): void {
    this.selectedItem = selectedItem;
  }

}

function mockProgressCircle() {
  const nvProgressCircle = {
    progress1: 0.5,
    progress2: 0.3,
    radius: 48
  }
  return nvProgressCircle;
}

function mockButtonComponent() {
  const nvButton = {
  label: 'Select',
  type: ButtonType.Basic,
  color: ButtonThemeColor.Basic,
  type1: ButtonType.Raised,
  color1: ButtonThemeColor.Primary,
  type2: ButtonType.Stroked,
  color2: ButtonThemeColor.Accent
  }
  return nvButton;
}

function mockAvatarComponent() {
  const assignee = {
    id: 1,
    name: 'Sina pasha',
    // avatarUrl: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png',
     avatarUrl: '',
  } as Assignee;
  return assignee;
}

function mockNvTagComponent() {
  const nvTagProps = {
    text: 'Novatek Inc. at Cote saint luc ',
    color: NvColor.Color01
  };
  return nvTagProps;
}

function mockTableComponent() {}
