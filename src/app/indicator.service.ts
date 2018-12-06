import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IndicatorService {

	constructor(
		private _http: HttpClient,
	) { }
    
	private headers: HttpHeaders = new HttpHeaders({
    });
	private apiUrl = 'https://api.worldbank.org/v2';

	public findIndicator( country,indicator ): Observable<any>{
		const endpoint = `${this.apiUrl}/countries/${country}/indicators/${indicator}/?format=json`;

		return this._http
			.get( endpoint,{ headers: this.headers} ).map( data => {
				return data;
			});
	}
}
