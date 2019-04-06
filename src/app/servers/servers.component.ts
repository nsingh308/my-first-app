import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  addNewServer=false;
  serverCreationStatus='No Server Created.';
  serverName='';
  serverCreated=false;
  

  constructor() { 

    setTimeout(() => {
        this.addNewServer=true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateNewServer(){
    this.serverCreated=true;
    this.serverCreationStatus =`New Server Created. Server Name is ${this.serverName}`;
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  
}
