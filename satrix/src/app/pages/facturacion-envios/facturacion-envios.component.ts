import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facturacion-envios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturacion-envios.component.html',
  styleUrl: './facturacion-envios.component.css'
})

export class FacturacionEnviosComponent {
  rfc: string = '';
  token: string = '';

  rfcInvalid: boolean = false;
  tokenInvalid: boolean = false;

  enviarFormulario() {
    this.rfcInvalid = !(this.rfc.length === 12 || this.rfc.length === 13);
    this.tokenInvalid = this.token.trim() === '';

    if (this.rfcInvalid || this.tokenInvalid) {
      return; // Detiene el formulario si hay errores
    }

    console.log('Formulario válido 🎉');
    // Aquí iría la navegación o lógica siguiente
  }
  
  mostrarEjemplo: boolean = false;
}