import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsistenteVirtualComponent } from '../../components/asistente-virtual/asistente-virtual.component';

@Component({
  selector: 'app-facturacion-boletos',
  standalone: true,
  imports: [CommonModule, FormsModule, AsistenteVirtualComponent],
  templateUrl: './facturacion-boletos.component.html',
  styleUrls: ['./facturacion-boletos.component.css']
})
export class FacturacionBoletosComponent {
  rfc: string = '';
  token: string = '';

  rfcInvalid: boolean = false;
  tokenInvalid: boolean = false;

  mensajeAsistente: string = '';
  mostrarEjemplo: boolean = false;

  // 💬 NUEVO: control del asistente flotante
  asistenteVisible: boolean = false;

  // ✅ Cambiar visibilidad del asistente
  toggleAsistente() {
    this.asistenteVisible = !this.asistenteVisible;
  }

  // ✅ Botón "¿No conoces tu RFC?"
  accionRFC() {
    this.mensajeAsistente = "Un RFC válido en México tiene 12 o 13 caracteres. Si no lo conoces, puedes consultarlo en el SAT: https://www.sat.gob.mx";
  }

  // ✅ Botón "¿No encuentras el token?"
  accionToken() {
    this.mensajeAsistente = "Lo que ves es una imágen de tu ticket donde he señalado el token";
    this.mostrarEjemplo = true
  }

  // ✅ Validación de formulario
  enviarFormulario() {
    this.rfcInvalid = !(this.rfc.length === 12 || this.rfc.length === 13);
    this.tokenInvalid = this.token.trim() === '';

    if (this.rfcInvalid || this.tokenInvalid) {
      this.mensajeAsistente = 'Ups... revisa bien tu RFC o el token 🧐';
      this.mostrarEjemplo = true;
      this.asistenteVisible = true; // opcional: abrir automáticamente el asistente
      return;
    }

    this.mensajeAsistente = '';
    this.mostrarEjemplo = false;
    console.log('Formulario válido 🎉');
  }
}
