import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickcolor',
  templateUrl: './pickcolor.component.html',
  styleUrls: ['./pickcolor.component.css']
})
export class PickcolorComponent implements OnInit {
background = '#00e067';
  constructor() { }
onChange(value) {
    this.background = value;
}
  ngOnInit() {
  }

}
