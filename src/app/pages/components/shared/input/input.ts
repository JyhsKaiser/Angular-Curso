import { Component, Input, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-input',
  styleUrl: './input.css',
  templateUrl: './input.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
})

export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() initialValue: string = '';


  public value: string = '';
  ngOnInit() {
    // 2. Asignación segura del valor inicial DESPUÉS de que el Padre lo pasa
    this.value = this.initialValue;
  }
}
