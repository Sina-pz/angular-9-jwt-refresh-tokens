import { Assignee } from './../../../app/models/models-data/assignee';
import { Component, Input, OnInit } from '@angular/core';

export interface IAssignee {
  name: string;
  avatarUrl: string;
}
@Component({
  selector: 'app-nv-avatar',
  templateUrl: './nv-avatar.component.html',
  styleUrls: ['./nv-avatar.component.scss']
})
export class NvAvatarComponent implements IAssignee, OnInit {
  @Input() public set assignee(value: Assignee) {
    this.hasUrl = value?.avatarUrl ? true : false;
    this.name = value?.name;
    this.avatarUrl = value?.avatarUrl;
  }
  public hasUrl: boolean;
  public name: string;
  public avatarUrl: string;


  constructor() { }


  ngOnInit(): void {
  }

}
