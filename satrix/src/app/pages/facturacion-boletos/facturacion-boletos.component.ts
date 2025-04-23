import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsistenteVirtualComponent } from '../../components/asistente-virtual/asistente-virtual.component';

@Component({
  selector: 'app-facturacion-boletos',
  standalone: true,
  imports: [CommonModule, FormsModule, AsistenteVirtualComponent], // ✅ solo una vez
  templateUrl: './facturacion-boletos.component.html',
  styleUrls: ['./facturacion-boletos.component.css']
})
export class FacturacionBoletosComponent {
  rfc: string = '';
  token: string = '';

  rfcInvalid: boolean = false;
  tokenInvalid: boolean = false;

  mensajeAsistente: string = ''; // ✅ Para el componente del asistente

  mostrarEjemplo: boolean = false;

  enviarFormulario() {
    this.rfcInvalid = !(this.rfc.length === 12 || this.rfc.length === 13);
    this.tokenInvalid = this.token.trim() === '';

    if (this.rfcInvalid || this.tokenInvalid) {
      this.mensajeAsistente = 'Ups... revisa bien tu RFC o el token 🧐';
      return; // Detiene el formulario si hay errores
    }

    // Si pasa validación
    console.log('Formulario válido 🎉');
    this.mensajeAsistente = ''; // Ocultar al asistente si no hay errores
  }
}
