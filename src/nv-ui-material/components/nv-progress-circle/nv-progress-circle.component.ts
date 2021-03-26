import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nv-progress-circle',
  templateUrl: './nv-progress-circle.component.html',
  styleUrls: ['./nv-progress-circle.component.scss']
})
export class NvProgressCircleComponent implements OnInit {
  @Input() progress1 = 0;
  @Input() progress2 = 0;
  @Input() public set radius(value: number) {
    this._radius = value ? +value : 0;
    this.maximumProgress = 2 * Math.PI * this._radius;
  }
  public get radius(): number {
    return this._radius;
  }
  public maximumProgress!: number;
  private _radius!: number;
  public rotatedStartPoint = -90;
  constructor() { }

  ngOnInit(): void {
  }

}
