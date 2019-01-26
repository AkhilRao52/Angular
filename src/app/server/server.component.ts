import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent{
  serverID = 10;
  serverName = 'LocalHost';
  serverStatus = 'Online';

  serverStatusChange(){
    return this.serverStatus;
  }
}
