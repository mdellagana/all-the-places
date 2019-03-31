import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MomentService } from '../core/moment.service';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WebcamModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmfs51bV-1YoB5LdL0zPit5Uh9nDJkzDs'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [MomentService]
})
export class MapModule {}
