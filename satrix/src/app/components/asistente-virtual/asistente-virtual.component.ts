import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asistente-virtual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asistente-virtual.component.html',
  styleUrls: ['./asistente-virtual.component.css']
})
export class AsistenteVirtualComponent {
  @Input() mensaje: string = '';
  mostrarAsistente: boolean = true;
  cerrandoAsistente: boolean = false;

  cerrarAsistente() {
    this.cerrandoAsistente = true;
    setTimeout(() => {
      this.mostrarAsistente = false;
      this.cerrandoAsistente = false;
    }, 300);
  }

  abrirAsistente() {
    this.mostrarAsistente = true;
  }
}