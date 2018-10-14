import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../core/moment.service';
import { Moment } from '../../core/moment.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public latitude = 51.5678;
  public longitude = 0.1201;
  public moments: Array<Moment> = [];

  constructor(private momentService: MomentService) {}

  ngOnInit() {
    this.getMoments();
  }

  public async getMoments() {
    console.log('this happens');
    try {
      this.moments = await this.momentService.getMoments().toPromise();
    } catch (error) {
      console.error('get moments', error);
    }
  }

  public async addMoment(latitude, longitude, momentTitle) {
    const moment = { latitude, longitude, momentTitle };
    try {
      await this.momentService.addMoment(moment);
      this.moments.push(moment);
    } catch (error) {
      console.error('add moment', error);
    }
  }
}
