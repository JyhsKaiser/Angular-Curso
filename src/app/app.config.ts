import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/**
 * Configuración principal de la aplicación Angular.
 * Proporciona los proveedores necesarios para la gestión de errores globales y el enrutamiento.
 * Incluye la configuración de las rutas definidas en app.routes.ts. 
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Proveedor para manejar errores globales en el navegador
    provideRouter(routes) // Proveedor para configurar el enrutador con las rutas definidas
  ]
};
