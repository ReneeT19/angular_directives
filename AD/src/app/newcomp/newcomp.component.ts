import { FRUITS } from './../fruit-list';
import { Fruit } from './../fruit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {

  fruits = FRUITS;
  selectedFruit: Fruit;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(fruit: Fruit): void {
    this.selectedFruit=fruit;
  }
}
