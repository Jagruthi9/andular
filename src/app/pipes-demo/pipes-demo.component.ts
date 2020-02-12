import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
  strtData:string;
  numData:number;
  date:Date;

  constructor() {
    this.strtData="Hello! welcome to world";
    this.numData=Math.PI;
    this.date=new Date();
   }

  

}
