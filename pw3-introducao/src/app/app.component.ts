import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-introducao';
  logo ="favicon.ico";

  biscoito="../assets/biscoito.png";
  frases = ['Me chama de lagartixa e me taca na parede', 'Me chama de thor e pega no meu martelo', 'Me chama de astronauta e me deixa viajar até o ceu da sua boca']

  public nome = 'Ana';
  public sobrenome = 'Baptista';
  public idade = '06'

  nomeCompleto(){
    return this.nome + " " + this.sobrenome;
  }

  ocultar = true;
  desabilitarB = false;

  exibirOcultar(){
    if (this.ocultar){
      this.ocultar = false;
    }
    else{
      this.ocultar = true;
    }
  }

  sorteio(){
    var index =Math.floor((Math.random() * this.frases.length));
    return this.frases[index];
  }
  obterAlerta(){
    alert("hoje é terça-feira");
  }

  public frase = '';



  x = Math.floor((Math.random() * 3) + 1);
  quebrarBiscoito(){
    this.biscoito ="../assets/biscoito-aberto.png";
    this.ocultar = false;
    this.desabilitarB = true;
  }




}
