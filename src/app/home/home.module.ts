import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MapModule } from '../map/map.module';

@NgModule({
  imports: [CommonModule, MapModule, AngularMaterialModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
