import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Nombre
  public Title : string = 'Enxebre Vivenda Comunitaria'
  // Población
  public Population : string = 'Rodeiro, Pontevedra'
  
  // Array de imágenes a mostrar en el carrousel
  public ImagesAndText = [
    { Image: 'assets/img/1366x768/exterior.png', Text: 'Fotografía del exterior' },
    { Image: 'assets/img/1366x768/entrada.png', Text: 'Fotografía de la entrada' },
    { Image: 'assets/img/1366x768/salon.png', Text: 'Fotografía del salón' },
  ];

  // Si se cambia esta propiedad hay que cambiarla también en el DOM (data-bs-interval)
  private _carrouselInterval: number = 5000;

  constructor() {
    //TODO Quinteiro: Solución temporal hasta ver por qué no arranca el carrousel de forma automática
    setTimeout(() => {
      const button = document.getElementById('nextImageButton');
      button?.click();
    }, this._carrouselInterval);
  }

}
