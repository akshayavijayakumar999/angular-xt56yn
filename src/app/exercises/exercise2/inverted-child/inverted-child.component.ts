import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  styleUrls: ['./inverted-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvertedChildComponent implements OnInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {}

  InvertedChildVal: string = '';
  @Output() InvertedchildToParentEvent = new EventEmitter<string>();

  InvertedChildToParent(): void {
    this.InvertedchildToParentEvent.emit(this.InvertedChildVal);
  }
}
