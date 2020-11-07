import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'place-booker';
  public date = new Date();

  constructor() { }

  public changeDate(type: string): void {
    const date = this.date;
    const day = date.getDate();
    if (type === 'plus') {
      date.setDate( day + 1);
    } else if (type === 'minus') {
      date.setDate(day - 1);
    }
    this.date = new Date(date);
  }
}
