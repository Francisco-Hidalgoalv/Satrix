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
  {
    path: 'facturacion-envios',
    loadComponent: () =>
      import('./pages/facturacion-envios/facturacion-envios.component').then(m => m.FacturacionEnviosComponent)
  },
  {
    path: 'facturacion-alimentos',
    loadComponent: () =>
      import('./pages/facturacion-alimentos/facturacion-alimentos.component').then(m => m.FacturacionAlimentosComponent)
  },
  {
    path: 'recuperacion-ttur',
    loadComponent: () =>
      import('./pages/recuperacion-ttur/recuperacion-ttur.component').then(m => m.RecuperacionTTURComponent)
  },
  {
    path: 'recuperacion-envios',
    loadComponent: () =>
      import('./pages/recuperacion-envios/recuperacion-envios.component').then(m => m.RecuperacionEnviosComponent)
  },
  {
    path: 'recuperacion-flecha',
    loadComponent: () =>
      import('./pages/recuperacion-flecha/recuperacion-flecha.component').then(m => m.RecuperacionFlechaComponent)
  },
  {
    path: 'recuperacion-boletos',
    loadComponent: () =>
      import('./pages/recuperacion-boletos/recuperacion-boletos.component').then(m => m.RecuperacionBoletosComponent)
  },
  {
    path: 'recuperacion-alimentos',
    loadComponent: () =>
      import('./pages/recuperacion-alimentos/recuperacion-alimentos.component').then(m => m.RecuperacionAlimentosComponent)
  },
];
