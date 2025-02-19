import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList : string[] = ["Tunis", "Jerba", "Beja", "Nabeul", "Sousse"];
  employeeArray : any[] = [
    {empId:11, name:'Ahmed', city:'Beja', contactNo: '25846987'},
    {empId:12, name:'Abir', city:'Tunis', contactNo: '90584765'},
    {empId:13, name:'Ali', city:'Nabeul', contactNo: '27859412'},
    {empId:14, name:'Mouhamed', city:'Sousse', contactNo: '95876125'},
    {empId:15, name:'Sonia', city:'Tunis', contactNo: '28456321'},
  ]

}
