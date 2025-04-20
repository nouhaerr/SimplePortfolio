import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';  // Ajout de l'importation de NgModule
import { BrowserModule } from '@angular/platform-browser';  // Importation du module BrowserModule nécessaire pour Angular
import { NgxParticlesModule } from '@tsparticles/angular';  // Le module correct

@NgModule({
  imports: [BrowserModule, NgxParticlesModule],
  schemas: [NO_ERRORS_SCHEMA],  // Ignorer les erreurs si nécessaire
})
export class AppModule {}
