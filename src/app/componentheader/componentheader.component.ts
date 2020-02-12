import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentheader',
  templateUrl: './componentheader.component.html',
  styleUrls: ['./componentheader.component.css']
})
export class ComponentheaderComponent {
  webTitle:String;
  welcomeImage:string;
  welcomeText:string
  constructor() { 
  this.webTitle="angular SPA Demo App";
  this.welcomeText="hai angular demo";
  this.welcomeImage="assets/images/doll.jpg";

  }

}
