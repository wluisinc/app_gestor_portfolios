import { Component, OnInit } from '@angular/core';
import {PorfoliosService, Portfolio} from 'app/portfolio';
import { PortfoliosService } from 'app/portfolios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
  providers: [PorfoliosService]
})
export class ListaComponent implements OnInit {
  arrayPortfolios : Array<Portfolio>;

  constructor(private servicioP : PortfoliosService) { }

  ngOnInit() {
  }

}
