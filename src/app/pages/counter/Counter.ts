import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Router } from "@angular/router";

@Component({
  imports: [MatSlideToggleModule],
  templateUrl: './index.html',
  styleUrls: ['./styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  counter = 0;
  stringInicial = 'Valor inicial:';

  constructor(private router: Router) {
    setInterval(() => {
      this.counter += 1;
      this.sumarSignal();
    }, 1000);
  }

  counterSignal = signal(10);

  sumarSignal() {
    this.counterSignal.update((value) => value + 1);
  }
  resetSignal = () => {
    this.counterSignal.set(0);
  }

  suma = (value: number) => {
    this.stringInicial = `Valor + ${value}: `;
    this.counter = this.counter + value;
  }
  resta = (value: number) => {
    this.stringInicial = `Valor - ${value}: `;
    this.counter = this.counter - value;
  }
  reset = () => {
    this.stringInicial = 'Valor inicial:';
    this.counter = 0;
  }

  goToHeroPage() {
    this.router.navigate(['/hero']);
  }
}

