import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:['.onlineText{color:white}']

})
export class ServerComponent{
    
    
    serverId:Number=23;
    serverStatus:String='online';
    

    constructor(){
        this.serverStatus= Math.random()>0.5 ?'online':'offline';
    }

    getServerStatus():String{
        return this.serverStatus;
    }

    getColor():String{
        return this.serverStatus==='online'?'green':'red';
    }

}