import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {}

  @Input() childVal: string = '';
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.childVal = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['childVal']) {
      this.changeDetectorRef.markForCheck();
    }
  }
}
