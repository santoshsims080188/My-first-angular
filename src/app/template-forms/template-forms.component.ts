import { Component, OnInit } from '@angular/core';
import { User } from '../user'
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  detailsList : User[]=[]; 
  addDetails(details){
   // detailsList=myFr
    var detail : User;
    detail=details.value;
    this.detailsList.push(detail);
    // console.log(details.value)
  }
  constructor() { }

  ngOnInit() {
  }

}
