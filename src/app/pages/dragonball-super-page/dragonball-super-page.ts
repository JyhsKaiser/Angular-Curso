import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterList } from '../components/character-list/character-list';
import { Character } from '../../interfaces/character';
import { CharacterAdd } from '../components/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CommonModule, CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuperPage {

  /**
   * En el constructor inyectamos el servicio DragonballService
   * Esta es la forma tradicional de consumir un servicio en Angular
   * @param dragonballService
   */
  // constructor(private dragonballService: DragonballService) { }


  /**
   * Forma moderna de inyectar un servicio en Angular
   * @see https://angular.io/guide/signals#injecting-services-with-signals
   */
  public dragonballService = inject(DragonballService);


}

