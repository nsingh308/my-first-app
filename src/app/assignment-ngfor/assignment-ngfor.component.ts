import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-ngfor',
  templateUrl: './assignment-ngfor.component.html',
  styleUrls: ['./assignment-ngfor.component.css'],
  styles:['.fontWhite{color:white}']
})
export class AssignmentNgforComponent implements OnInit {


  displayParagraph:Boolean;
  toggleParaRecords:Array<String>=[];

  constructor() { 

    this.displayParagraph=true;

  }

  ngOnInit() {
  }

  onBtnClick(){
    const dt= new Date();
    
    this.toggleParaRecords.push(dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()+'.'+dt.getMilliseconds())
    console.log(this.toggleParaRecords.toString())
  }

}
