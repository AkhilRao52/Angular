import { Component, OnInit } from '@angular/core';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

// export class ServersComponent {
//     addNewServer = false;
//     serverCreationStatus =  false ;
//     serverName = '';
//     serverList = [];

//     constructor(){
//       setTimeout(()=>{
//         this.addNewServer = true;
//       },2000)
//     }

//     onAddServer(){
//       this.serverCreationStatus = true ;
//       this.serverList.push(this.serverName);
//       this.serverName = '';
//     }

//     // onAddInput(event){
//     //    this.serverName = event.target.value ;
//     // }
// }

export class ServersComponent {
  displayP = false;
  logs = [];

  onDisplayClick(){
    this.displayP = !this.displayP;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
