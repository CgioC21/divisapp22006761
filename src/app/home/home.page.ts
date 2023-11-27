import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cantidadEnQuetzales: number = 0; // Inicializa con un valor predeterminado
  resultado: number | undefined; // Marca como opcional usando `undefined`

  constructor() {}

  convertirDivisa() {
    // Utilizamos la tasa de cambio de 8 quetzales por dólar
    const tasaCambio = 8;
    this.resultado = this.cantidadEnQuetzales / tasaCambio;
  }
}
