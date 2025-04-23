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

  cerrarAsistente() {
    this.mostrarAsistente = false;
  }

  abrirAsistente() {
    this.mostrarAsistente = true;
  }
}
