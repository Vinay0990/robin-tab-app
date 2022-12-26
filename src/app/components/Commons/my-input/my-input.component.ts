import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
})
export class MyInputComponent implements OnInit {
  value: string;

  @Input() title: String;
  @Input() type: String;
  constructor() {
    this.title = '';
    this.value = '';
    this.type = 'text';
  }

  ngOnInit(): void {}
}
