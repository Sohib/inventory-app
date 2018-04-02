import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-dispaly',
  template: `
  <div class="price-display">\${{ price }}</div>
  `,
})
export class PriceDispalyComponent implements OnInit {
  @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
