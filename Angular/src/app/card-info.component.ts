import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

@Input() info:string[];
@Input() destinationName:string;


constructor() { }

ngOnInit(): void {
  }

}
