import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./pages/components/shared/navbar/navbar";

@Component({
  /**
   * El selector 'app-root' permite usar este componente en el HTML como <app-root></app-root>. Y renderizar la plantilla y la lógica de este componente en ese lugar.
   */
  selector: 'app-root',
  imports: [RouterOutlet, Navbar], // Importa RouterOutlet para manejar rutas hijas
  templateUrl: './app.html', // Ruta de referencia al archivo de plantilla HTML app.html
  // styleUrl: './app.css' // Ruta de referencia al archivo de estilos CSS app.css
})



export class App {
  protected readonly title = signal(`Jovani Hernandez`);
}
