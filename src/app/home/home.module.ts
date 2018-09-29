import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';

import { HomeComponent } from './home.component';
import { MapModule } from './map/map.module';


@NgModule({
	imports: [
		CommonModule,
		WebcamModule,
		MapModule
	],
	declarations: [HomeComponent],
	exports: [HomeComponent],
})
export class HomeModule { }
