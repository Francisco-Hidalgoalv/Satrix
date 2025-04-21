import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router) {}

  irAFacturacion() {
    this.router.navigate(['/facturacion-boletos']);
  }
  irAFacturacionEnvios() {
    this.router.navigate(['/facturacion-envios']);
  }
  irAFacturacionAlimentos() {
    this.router.navigate(['/facturacion-alimentos']);
  }
  irARecuperacionTTUR() {
    this.router.navigate(['/recuperacion-ttur']);
  }
  irARecuperacionEnvios() {
    this.router.navigate(['/recuperacion-envios']);
  }
  irARecuperacionFlecha() {
    this.router.navigate(['/recuperacion-flecha']);
  }
  irARecuperacionBoletos() {
    this.router.navigate(['/recuperacion-boletos']);
  }
  irARecuperacionAlimentos() {
    this.router.navigate(['/recuperacion-alimentos']);
  }
}
