import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 1;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
