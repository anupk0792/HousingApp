import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any> =[
    {
      "Id":1,
      "Name": "Birla House",
      "Type": "House",
      "Price":12000
    },
    {
      "Id":2,
      "Name": "Erose Villa",
      "Type": "Villa",
      "Price":22000
    },{
      "Id":3,
      "Name": "Ambani House",
      "Type": "House",
      "Price":2000
    },{
      "Id":4,
      "Name": "Kumar House",
      "Type": "House",
      "Price":7500
    },{
      "Id":5,
      "Name": "Kabri Mahal",
      "Type": "House",
      "Price":192000
    },{
      "Id":6,
      "Name": "Sweet Home",
      "Type": "House",
      "Price":4100
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
