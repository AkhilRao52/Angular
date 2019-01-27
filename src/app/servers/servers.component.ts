import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
// export class ServersComponent {
//     addNewServer = false;
//     serverCreationStatus =  'No new server can be added now' ;
//     serverName = ' ';
//     constructor(){
//       setTimeout(()=>{
//         this.addNewServer = true;
//       },10000)
//     }

//     onAddServer(){
//       this.serverCreationStatus = 'New server added, Server name is ' + this.serverName ;
//     }

//     onAddInput(event){
//        this.serverName = event.target.value ;
//     }
// }

export class ServersComponent {
  userName = '';
  addDisabled = 'false';

  onAddClick(){
    this.userName = '';
  }

  addButtonDisabled(){
    if(this.userName === ''){
       return true;
    } else {
      return false;
    }
  }
}
