import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
  styleUrls: ['./inverted-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvertedParentComponent implements OnInit {
  ngOnInit(): void {}

  InvertedparentValue: string = '';
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  InvertedchildToParentValuePass(value: string): void {
    this.InvertedparentValue = value;
    this.changeDetectorRef.detectChanges();
  }
}
