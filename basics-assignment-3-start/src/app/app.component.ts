import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  create = false;
  list = [];
  count = 1;
  toggle() {
    this.count++;
    this.create = !this.create;
    this.list.push(this.list.length + 1);
  }

  getColor() {
    return this.count > 5 ? 'blue' : '';
  }

  getTextColor() {
    return this.count > 5 ? 'white' : '';
  }
}
