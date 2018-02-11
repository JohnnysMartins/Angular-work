import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  curso = true;
  urlDaImagem = 'http://lorempixel.com/400/200/sports/Dummy-Text/';
  valorAtual: string;
  valorSalvo: string;

  isMouseOver = false;

  nome = 'abc';
  username = 'adson';

  nomeCurso = 'Angular';

  valorInicial = 15;

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return false;
  }

  botaoClicado() {
    console.log('btn clicak');

  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvar(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
