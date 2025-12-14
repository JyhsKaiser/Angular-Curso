import { Component, output, signal, input } from '@angular/core';
import { Button } from '../shared/button/button';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-character-add',
  imports: [Button],
  templateUrl: './character-add.html',
  styleUrl: './character-add.css',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  // characters = input.required<Character[]>();

  newCharacter = output<Character>();

  addCharacter() {

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power()
    }
    // console.log('Datos:', { newCharacter });

    this.newCharacter.emit(newCharacter);
    this.resetFields();
    // console.log(this.characters());
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }


}
