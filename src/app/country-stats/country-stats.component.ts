import { Component, OnInit } from '@angular/core';

import {IndicatorService} from '../indicator.service';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {

	gdp: Array<any>;

  constructor(
	private _indicator:IndicatorService
  ) { }

  ngOnInit() {
	  this._indicator.findIndicator('rus','NY.GDP.MKTP.CD').subscribe( data=>{
		  this.gdp = data;
	  });
  }

}
