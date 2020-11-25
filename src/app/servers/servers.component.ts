import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNew = false
  dogcount = "10 dogs"
  create = false
  servers = ['test1','test2'];
  constructor() {
    setTimeout(()=>{this.allowNew = true;},2000)
  }

  ngOnInit(): void {
  }
  changeDogCount(){
    this.create = true
    this.servers.push(this.dogcount)
  }

}
