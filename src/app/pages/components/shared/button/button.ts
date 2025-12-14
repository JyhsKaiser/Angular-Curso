import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Tipos permitidos para el estilo (solo para mejor tipado)
type ButtonStyle = 'primary' | 'secondary' | 'danger' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  // Atributos de Entrada (@Input)

  /** Texto que se mostrará dentro del botón. */
  @Input() label: string = '';

  /** Estilo predefinido (determina los colores). */
  @Input() stylee: ButtonStyle = 'primary';

  /** Tamaño del botón (sm, md, lg). */
  @Input() size: ButtonSize = 'md';

  /** Deshabilita el botón. */
  @Input() disabled: boolean = false;

  /** Hace que el botón ocupe el 100% del ancho del contenedor. */
  @Input() fullWidth: boolean = false;

  // Evento de Salida (@Output)

  /** Evento emitido al hacer clic en el botón. */
  @Output() clicked = new EventEmitter<void>();

  /** * Genera las clases CSS basadas en las propiedades del botón.
   */
  getClass(): string {
    let classes = `btn btn-${this.stylee} btn-${this.size}`;
    if (this.fullWidth) {
      classes += ' btn-full-width';
    }
    return classes;
  }

  /** * Maneja el clic y emite el evento solo si no está deshabilitado.
   */
  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
