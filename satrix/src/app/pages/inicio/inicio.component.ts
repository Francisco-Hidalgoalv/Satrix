import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsistenteVirtualComponent } from '../../components/asistente-virtual/asistente-virtual.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, AsistenteVirtualComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mensajeAsistente: string = 'Bienvenido a Satrix\nPresiona los botones de facturación para facturar un ticket de un servicio\nPresiona los botones de recuperación para recuperar un ticket de un servicio';
  asistenteAbierto: boolean = false;
  pantallaGrande: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.detectarPantalla();
      window.addEventListener('resize', () => this.detectarPantalla());
    }
  }
  

  detectarPantalla() {
    this.pantallaGrande = window.innerWidth >= 768;
    if (this.pantallaGrande) {
      this.asistenteAbierto = false;
    }
  }

  manejarClickBurbuja() {
    if (!this.pantallaGrande) {
      this.asistenteAbierto = !this.asistenteAbierto;
    }
  }

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
