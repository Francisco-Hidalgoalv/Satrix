import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio.component').then(m => m.InicioComponent),
  },
  {
    path: 'aviso',
    loadComponent: () =>
      import('./pages/aviso/aviso.component').then(m => m.AvisoComponent),
  },
  {
    path: 'preguntas',
    loadComponent: () =>
      import('./pages/preguntas/preguntas.component').then(m => m.PreguntasComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
  },
  {
    path: 'conecta',
    loadComponent: () =>
      import('./pages/conecta/conecta.component').then(m => m.ConectaComponent),
  },
  {
    path: 'facturacion-boletos',
    loadComponent: () =>
      import('./pages/facturacion-boletos/facturacion-boletos.component').then(m => m.FacturacionBoletosComponent)
  },
];
