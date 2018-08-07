import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { WebcamModule } from 'ngx-webcam';

import { HomeComponent } from '../../pages/home/home.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD1U1IGXORTC5dLCwiS1GHpYYZEcoAV7fs'
		}),
		WebcamModule
	],
	declarations: [
		HomeComponent
	],
	exports: [HomeComponent]
})
export class HomeModule { }
