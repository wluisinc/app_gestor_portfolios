import { Component, OnInit } from '@angular/core';
import { injectable } from ''
@injectable()

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css']
})
export class FormBajaComponent implements OnInit {

  constructor() { }
  console.log("<<< creando servicio >>>");
  ngOnInit() {
  }

}
