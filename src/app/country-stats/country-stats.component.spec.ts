import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatsComponent } from './country-stats.component';
import {IndicatorService} from '../indicator.service';
import {HttpClient, HttpHeaders,HttpHandler} from '@angular/common/http';

describe('CountryStatsComponent', () => {
  //let component: CountryStatsComponent;
  //let fixture: ComponentFixture<CountryStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStatsComponent ],
	  providers: [IndicatorService,HttpClient,HttpHandler]
    })
    .compileComponents();
  }));
/*
  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/
	it('should create', () => {
		const fixture = TestBed.createComponent(CountryStatsComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
