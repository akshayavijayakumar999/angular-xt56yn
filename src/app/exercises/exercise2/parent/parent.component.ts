import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  parentVal: string;

  parentToChildVal: string = '';

  ngOnInit(): void {}
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.parentVal = '';
  }

  parentToChildData() {
    this.parentToChildVal = this.parentVal;
    // this.changeDetectorRef.detectChanges();
  }
}
