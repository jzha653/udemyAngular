import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNew = false
  dogcount = "10 dogs"
  constructor() {
    setTimeout(()=>{this.allowNew = true;},2000)
  }

  ngOnInit(): void {
  }
  changeDogCount(){
    this.dogcount = "20 dogs"
  }
  changeinput(event: any){
    this.dogcount = (<HTMLInputElement>event.target).value

  }
}
