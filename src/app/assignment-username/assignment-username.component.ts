/**
 * Section 2 : Assignment 2
 * Test you skills for following:
 * 1) Two Way Event binding, 2) String interpolation 
 * 3) Property Binding
 * 
 */
import { Component } from '@angular/core';


@Component({
    selector:'assignment-2-username',
    templateUrl:'./assignment-username.component.html'
})

/**
 * To do:
 * 
 * 1) Button should be enabled only when username has value
 * 2) username string interpolation should work
 */
export class AssignmentUsernameComponent{
    username:String='';
    
    constructor(){
    }

    getUsername():String{
        return this.username;
    }

    
    onResetUsername(){
        this.username="";
        
    }
    


}