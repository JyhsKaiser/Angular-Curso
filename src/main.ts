import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Función principal que arranca la aplicación Angular.
 * Utiliza bootstrapApplication para inicializar el componente raíz (App) con la configuración proporcionada (appConfig).
 * Maneja cualquier error que pueda ocurrir durante el arranque e imprime el error en la consola.
 * 
 */
bootstrapApplication(App, appConfig) // Inicia la aplicación Angular con el componente raíz y la configuración especificada
  .catch((err) => console.error(err));
