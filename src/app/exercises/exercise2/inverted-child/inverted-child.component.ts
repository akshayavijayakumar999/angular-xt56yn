import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  styleUrls: ['./inverted-child.component.css']
})
export class InvertedChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() childEvent = new EventEmitter();
  buttonClick(value: string) {
     this.childEvent.emit(value);
  }

}
