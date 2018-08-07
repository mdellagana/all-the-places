import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { nullSafeIsEquivalent } from '../../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

	public lat: number = null;
	public lng: number = null;
	public markers: Array<any> = [];


	constructor() { }

	public async ngOnInit() { }


	public mapClicked(e) {
		this.markers.push({
			lat: e.coords.lat,
			lng: e.coords.lng
		});
	}

}
