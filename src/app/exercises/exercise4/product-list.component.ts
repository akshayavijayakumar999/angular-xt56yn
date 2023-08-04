import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product List</h2>
    <div style="position: fixed; top: 0; right: 0; background: black; color: white;">
      <div >Number of viewChecked: {{viewCheckedCount}}</div>
      <div>Highest number of product initialized: {{highestNumberOfProductInitialized}}</div>
      <div>Time spent on page: {{timer | date:'HH:mm:ss'}}</div>
    </div>

    <ul>
      <li *ngFor="let product of products;trackBy: trackByProductId">
        <app-product [product]="product" 
        (initializedCount)="updateHighestNumberOfProductInitialized($event)"></app-product>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  viewCheckedCount = 0;
  highestNumberOfProductInitialized = 0;
  timer = new Date(0, 0, 0);

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   let documentHeight = document.body.scrollHeight;
  //   let currentScroll = window.scrollY + window.innerHeight;
  //   let buffer = 200;
  //   if(currentScroll + buffer > documentHeight) {
  //     this.loadProducts();
  //     this.cdRef.detectChanges(); // Manually trigger change detection after loading new products
  //   }
  // }
  onScroll() {
    if (this.atBottom()) {
      this.loadProducts();
      ++this.viewCheckedCount;
    }
  }

  atBottom(): boolean {
    let buffer = 200;
    let documentHeight = document.body.scrollHeight; // total height of the entire web page
    let currentScroll = window.scrollY + window.innerHeight;
    return currentScroll + buffer > documentHeight;
  }

  ngOnInit() {
    this.loadProducts();
    const delay = 100;
    let timeSpent = 0;
    setInterval(() => {
      this.timer = new Date(0, 0, 0);
      timeSpent += delay;
      this.timer.setSeconds(timeSpent / 1000);
      this.changeDetectorRef.detectChanges();
    }, delay);
  }

  updateHighestNumberOfProductInitialized(count: number) {
    this.highestNumberOfProductInitialized = Math.max(
      this.highestNumberOfProductInitialized,
      count
    );
  }

  loadProducts() {
    // DO NOT CHANGE THIS FUNCTION
    const start = this.products.length;
    const newProducts = Array(10)
      .fill('')
      .map((o, i) => ({
        id: (i + start).toString(),
        description: `mock product description ${i + start}`,
      }));
    this.products = this.products.concat(...newProducts).map((p) => ({ ...p }));
  }

  ngAfterViewChecked(): void {
    //  ++this.viewCheckedCount;
    // this.cdRef.detectChanges();
  }

  // ngAfterViewInit(): void {
  //    ++this.viewCheckedCount;
  //   }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}

export interface Product {
  id: string;
  description: string;
}
