import { Component, computed, inject, signal } from '@angular/core';
import { InputComponent } from "../components/shared/input/input";
import { CommonModule } from '@angular/common';
import { Button } from '../components/shared/button/button';
import { DragonballService } from '../../services/dragonball.service';


interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPage {
  // items = signal([1, 2, 3, 4, 5]);

  name = signal('Goku');
  power = signal(9000);

  public dragonballService = inject(DragonballService); // Inyectamos el servicio

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9000 },
  //   { id: 2, name: 'Vegeta', power: 8500 },
  //   { id: 3, name: 'Piccolo', power: 7000 },
  //   { id: 4, name: 'Yamcha', power: 500 },
  //   { id: 5, name: 'Frieza', power: 9500 },
  // ])

  constructor() { }

  powerStyles(index: number) {
    // const char = this.characters()[index];
    const char = this.dragonballService.characters()[index];
    if (char.power >= 9000) return 'color: red;';
    if (char.power < 9000) return 'color: gray;';
    return 'color: gray;';
  }

  onSave() {
    const dataForm = {
      id: this.dragonballService.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    // this.characters.update(() => [...this.characters(), dataForm]);
    this.dragonballService.characters.update(() => [...this.dragonballService.characters(), dataForm]);
  }

  onCancel() {
    console.log('Acción cancelada.');
  }

  onDelete() {
    // Esto nunca se ejecutará porque el botón está [disabled]="true"
    console.log('Eliminando...');
  }

}
