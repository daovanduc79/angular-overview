import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public numberOne: number;
  public numberTwo: number;
  public result: number;
  public operator = '+';
  public background = '#00e067';

  constructor() { }

  onChangeNumberOne(value: number) {
    this.numberOne = Number(value);
  }

  onChangeNumberTwo(value: number) {
    this.numberTwo = Number(value);
  }

  onSelectChange(value: string) {
    this.operator = value;
  }

  onChangeBackground(value: string)
  {
    this.background = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.numberOne + this.numberTwo;
        break;
      case '-':
        this.result = this.numberOne - this.numberTwo;
        break;
      case '*':
        this.result = this.numberOne * this.numberTwo;
        break;
      case '/':
        this.result = this.numberOne / this.numberTwo;
        break;
    }
  }


  ngOnInit(): void {
  }

}
