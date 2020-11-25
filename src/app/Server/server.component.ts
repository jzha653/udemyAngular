import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  status = "fatdogs";
  num = 10;
  constructor() {
  this.status = Math.random() > 0.5 ? 'fat fat dog' : 'fatdog';
  }

  getColor(){
    return this.status === 'fat fat dog' ? 'green':'red'
  }
}
