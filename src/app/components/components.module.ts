import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';

import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { CapaComponent } from './main/capa/capa.component';
import { PlanosComponent } from './main/planos/planos.component';
import { VantagensComponent } from './main/vantagens/vantagens.component';
import { ContratarComponent } from './main/contratar/contratar.component';
import { FooterComponent } from './main/footer/footer.component';




@NgModule({
  declarations:
   [
     MainComponent,
     CapaComponent,
     PlanosComponent,
     VantagensComponent,
     ContratarComponent,
     FooterComponent
   ],
  imports:
   [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ComponentsRoutingModule,
    NgBrazil,
    TextMaskModule

  
  ]
})
export class ComponentsModule { }
