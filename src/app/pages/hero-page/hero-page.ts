import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
  // standalone: true,
})
export class HeroPage {
  name = signal('Iron Man')
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()} years old`;
    return description;
  });

  constructor(private router: Router) { }

  getHeroDescription() {
    return `${this.name()} is ${this.age()} years old`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Iron Man');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }


  goToCounterPage() {
    this.router.navigate(['']);
  }
}
