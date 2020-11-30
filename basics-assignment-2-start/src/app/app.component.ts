import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ""
  flag = (this.username.length == 0)
  resetUsername(){
    this.username = ""
    this.flag = true
  }
  changeinput($event){
    this.flag = (this.username.length == 0)
  }
}
