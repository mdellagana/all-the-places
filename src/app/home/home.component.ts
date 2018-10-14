import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  // toggle webcam on/off
  // public showWebcam = true;
  // public allowCameraSwitch = true;
  // public multipleWebcamsAvailable = false;
  // public deviceId: string;
  // public videoOptions: MediaTrackConstraints = {
  // 	// width: {ideal: 1024},
  // 	// height: {ideal: 576}
  // };
  // public errors: WebcamInitError[] = [];

  // latest snapshot
  // public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  // private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  // private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();


  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  public ngOnInit(): void {
    // WebcamUtil.getAvailableVideoInputs()
    // 	.then((mediaDevices: MediaDeviceInfo[]) => {
    // 		this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    // 	});
  }

  // public triggerSnapshot(): void {
  // 	this.trigger.next();
  // }

  // public toggleWebcam(): void {
  // 	this.showWebcam = !this.showWebcam;
  // }

  // public handleInitError(error: WebcamInitError): void {
  // 	this.errors.push(error);
  // }

  // public showNextWebcam(directionOrDeviceId: boolean | string): void {
  // 	// true => move forward through devices
  // 	// false => move backwards through devices
  // 	// string => move to device with given deviceId
  // 	this.nextWebcam.next(directionOrDeviceId);
  // }

  // public handleImage(webcamImage: WebcamImage): void {
  // 	console.log('received webcam image', webcamImage);
  // 	this.webcamImage = webcamImage;
  // }

  // public cameraWasSwitched(deviceId: string): void {
  // 	console.log('active device: ' + deviceId);
  // 	this.deviceId = deviceId;
  // }

  // public get triggerObservable(): Observable<void> {
  // 	return this.trigger.asObservable();
  // }

  // public get nextWebcamObservable(): Observable<boolean | string> {
  // 	return this.nextWebcam.asObservable();
  // }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
