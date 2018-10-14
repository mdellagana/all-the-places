import { Component, OnInit } from '@angular/core';
import { MomentService } from '../core/moment.service';
import { Moment } from '../core/moment.interface';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public latitude = 51.5678;
  public longitude = 0.1201;
  public moments: Array<Moment> = [];
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  public allowCameraSwitch = true;
  public deviceId: string;
  public showWebcam = true;
  public errors: WebcamInitError[] = [];
  public multipleWebcamsAvailable = false;
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();
  public videoOptions: MediaTrackConstraints = {
    width: { ideal: 1024 },
    height: { ideal: 576 }
  };

  constructor(private momentService: MomentService) {}

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );

    this.getMoments();
  }

  public async getMoments() {
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

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
}
