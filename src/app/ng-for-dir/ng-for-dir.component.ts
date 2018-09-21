import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-dir',
  templateUrl: './ng-for-dir.component.html',
  styleUrls: ['./ng-for-dir.component.css']
})
export class NgForDirComponent implements OnInit {

  ourServices : string[]=["IT Staffing", "Recruitment Process Oursourcing", "Staff Augmentation", "Contract Staffing", "Flexible Staffing", "Direct Placement"]
  toggleServicesMenu :boolean=true;
  selectedServices:string;
  myStyle:{}; 
  toggleStyle:{};
  color:string;
  inputColor:string;
  currentClass:string="text-primary";
  changeCssClass(){
    if(this.currentClass=="text-primary"){
      this.currentClass="text-danger"
    }
    else{
      this.currentClass="text-primary"
    }
  }
  
  styleToggleFlag:boolean=true;

  newStyle(){
    this.toggleStyle={
      "font-weight" :this.styleToggleFlag?"bold" : "italic",
      "font-size":this.styleToggleFlag?"20pt":"24pt",
      "color":this.styleToggleFlag?"#FF6600":"#66ff00"
    }
    this.styleToggleFlag = !this.styleToggleFlag
  }

  setStyle(){
    this.myStyle={
      "font-weight": "bold",
      "font-size" : "24pt",
      "color": this.setRandomColor(),
    }
  }
  setRandomColor(){
    this.color = "#";
     var letters =["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    for (let i=0; i<6; i++){
      this.color += letters[Math.floor(Math.random()*16)]
    }
    return this.color
  }

selectService(service){
  this.selectedServices=service;
}
  toggleServices(){
    this.toggleServicesMenu = !this.toggleServicesMenu
  }
  
  constructor() { }

  ngOnInit() {

  }

}
