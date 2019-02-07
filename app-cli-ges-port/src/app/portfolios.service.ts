import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable()
export class PortfoliosService {
  lista: Array<Portfolio>;

  constructor() {
  console.log ("<<< Creando servicio >>>");
  this.lista = new Array<Portfolio>();
}
public alta(nombre : string, desc : string, fich: string) : void {
  console.log("<<< Alta portfolio: " + nombre + ">>>")
}
}