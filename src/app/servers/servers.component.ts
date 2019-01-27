import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    addNewServer = false;
    serverCreationStatus =  'No new server can be added now' ;

    constructor(){
      setTimeout(()=>{
        this.addNewServer = true;
      },10000)
    }

    onAddServer(){
      this.serverCreationStatus = 'New server added';
    }

}

