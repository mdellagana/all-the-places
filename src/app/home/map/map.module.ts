import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MomentService } from '../../core/moment.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1U1IGXORTC5dLCwiS1GHpYYZEcoAV7fs'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [MomentService]
})
export class MapModule {}
