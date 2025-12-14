import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

function loadFromLocalStorage(): Character[] {
  const data = localStorage.getItem('characters');
  return data ? JSON.parse(data) : [];
}


@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage())


  saveToLocalStorage = effect(() => {
    console.log(`Character count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update(list => [...list, newCharacter]);
  }


}
