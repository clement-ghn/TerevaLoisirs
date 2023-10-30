import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { CarriereComponent } from './carriere/carriere.component';
import { HebergementTemplateComponent } from './hebergement-template/hebergement-template.component';
import { Hebergement1Component } from './hebergement1/hebergement1.component';
import { Hebergement2Component } from './hebergement2/hebergement2.component';


const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent, pathMatch: 'full' },
  { path: 'carriere', component: CarriereComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'hebergements',
    component: HebergementTemplateComponent,
    children: [
      { path: 'hebergement1', component: Hebergement1Component },
      { path: 'hebergement2', component: Hebergement2Component }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
