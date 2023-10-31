import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CarriereComponent } from './carriere/carriere.component';
import { HebergementTemplateComponent } from './hebergement-template/hebergement-template.component';
import { Hebergement1Component } from './hebergement1/hebergement1.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Hebergement2Component } from './hebergement2/hebergement2.component'

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    CarriereComponent,
    HebergementTemplateComponent,
    Hebergement1Component,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    Hebergement2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
