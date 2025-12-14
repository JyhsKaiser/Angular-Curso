import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})

export class CharacterList {
  listTitle = input.required<string>();
  characters = input.required<Character[]>();
  constructor() {

  }


  powerStyles(index: number) {
    const char = this.characters()[index];
    if (char.power >= 9000) return 'color: red;';
    if (char.power < 9000) return 'color: gray;';
    return 'color: gray;';
  }



}
