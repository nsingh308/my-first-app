import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'

})
export class ServerComponent{
    
    
    serverId:Number=23;
    serverStatus:String='online';

   

    getServerStatus():String{
        return this.serverStatus;
    }

}