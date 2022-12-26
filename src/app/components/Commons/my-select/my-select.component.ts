import { Component, Input, OnInit } from '@angular/core';
import { PaymentMethod } from '../PaymentMethod';

@Component({
  selector: 'my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css'],
})
export class MySelectComponent implements OnInit {
  @Input() title: String;

  selectedValue: String;
  payments: PaymentMethod[];
  constructor() {
    this.title = '';
    this.payments = [
      { value: 'type-1', viewValue: 'Type 1' },
      { value: 'type-2', viewValue: 'Type 2' },
      { value: 'type-3', viewValue: 'Type 3' },
      { value: 'type-4', viewValue: 'Type 4' },
    ];
    this.selectedValue = this.payments[0].value;
  }

  ngOnInit(): void {}
}
