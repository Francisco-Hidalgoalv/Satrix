import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 IMPORTANTE

@Component({
  selector: 'app-facturacion-boletos',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 AÑADIDO AQUÍ
  templateUrl: './facturacion-boletos.component.html',
  styleUrls: ['./facturacion-boletos.component.css']
})
export class FacturacionBoletosComponent {
  rfc: string = '';
  token: string = '';

  enviarFormulario() {
    console.log('RFC:', this.rfc);
    console.log('Token:', this.token);
  }
}
