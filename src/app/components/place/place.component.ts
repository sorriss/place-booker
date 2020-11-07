import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  @Input() index: number;
  public checked: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public check(): void {
    this.checked = !this.checked;
  }

}
