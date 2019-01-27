import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
    addNewServer = false;
    serverCreationStatus =  false ;
    serverName = '';
    serverList = [];

    constructor(){
      setTimeout(()=>{
        this.addNewServer = true;
      },2000)
    }

    onAddServer(){
      this.serverCreationStatus = true ;
      this.serverList.push(this.serverName);
      this.serverName = '';
    }

    // onAddInput(event){
    //    this.serverName = event.target.value ;
    // }
}

