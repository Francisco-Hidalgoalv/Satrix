import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  filtro: string = '';

  preguntas = [
    {
      categoria: 'Facturación',
      pregunta: '¿Dónde puedo elaborar mi factura?',
      respuesta: 'En el portal www.facturaelectronicagfa.mx o enviando el boleto escaneado y tus datos fiscales a cfdiboletoprimeraplus@flecha-amarilla.com si no tiene token.'
    },
    {
      categoria: 'Facturación',
      pregunta: '¿Qué necesito para poder elaborar mi factura?',
      respuesta: 'Correo electrónico, boletos y datos fiscales completos: Razón social, RFC, dirección y C.P.'
    },
    {
      categoria: 'Facturación',
      pregunta: '¿Puedo elaborar una factura de varios boletos?',
      respuesta: 'Sí, el portal permite ingresar hasta 19 boletos (tokens) por factura.'
    },
    {
      categoria: 'Facturación',
      pregunta: '¿Qué es un token?',
      respuesta: 'Es el código identificador del boleto para generar la factura.'
    },
    {
      categoria: 'Facturación',
      pregunta: '¿Cuál es el plazo para poder elaborar mi factura?',
      respuesta: 'Debes facturar dentro del mes en que realizaste tu compra.'
    },
    {
      categoria: 'Recuperación de factura',
      pregunta: '¿Cómo puedo recuperar mi factura si no me llegó al correo?',
      respuesta: 'Ingresa al portal y usa la opción Recuperar CFDI, llena RFC y token, y descarga tu factura.'
    },
    {
      categoria: 'Token incompleto',
      pregunta: '¿Cómo puedo verificar el token si no es visible o está incompleto?',
      respuesta: 'Envía correo a cfdiboletoprimeraplus@flecha-amarilla.com con origen, destino, fecha, horario, nombre del pasajero, asiento y número de servicio.'
    },
    {
      categoria: 'Correcciones',
      pregunta: '¿Si tiene algún error mi factura, puedo corregirlo?',
      respuesta: 'Sí, si es error en RFC (como O por 0), manda folio, número de factura y datos fiscales al correo. No se permiten cambios de razón social.'
    }
  ];

  // 🔠 Normaliza el texto quitando acentos y convirtiendo a minúsculas
  normalizar(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  // 🔍 Filtro avanzado con normalización
  get filtradas() {
    const filtroNormalizado = this.normalizar(this.filtro);
    return this.preguntas.filter(p =>
      this.normalizar(p.pregunta).includes(filtroNormalizado) ||
      this.normalizar(p.respuesta).includes(filtroNormalizado) ||
      this.normalizar(p.categoria).includes(filtroNormalizado)
    );
  }
}
