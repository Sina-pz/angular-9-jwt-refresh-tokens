import { Component, OnInit } from '@angular/core';

enum EvMaterial {
  Button,
  Table

}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.less']
})
export class DemoPageComponent implements OnInit {

  public selectedItem: EvMaterial = EvMaterial.Button;
  materials = EvMaterial;

  constructor() { }

  ngOnInit(): void {
  }

  public onItemClick(selectedItem: EvMaterial): void {
    this.selectedItem = selectedItem;
  }
  onBottonClick() {
    console.log('on nv button clicked');
  }

}

function mockButtonComponent() {

}
function mockTableComponent() {

}
