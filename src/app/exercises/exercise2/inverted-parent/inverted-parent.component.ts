import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
  styleUrls: ['./inverted-parent.component.css']
})
export class InvertedParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  names = [];
  addName(value: string) {
     this.names.push(value);
  }
}
