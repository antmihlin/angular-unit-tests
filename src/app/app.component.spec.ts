import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { IndicatorService } from './indicator.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
		CountryStatsComponent
      ],
	imports: [
	  BrowserModule,
	  HttpClientModule,
	  HttpModule,
	],
	providers: [IndicatorService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
	it('should have as a title "Angular Unit Tests"', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component.title).toEqual('Angular Unit Tests');
	}));
	it('should render a title in h1 tag', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const component = fixture.debugElement.nativeElement;
		expect(component.querySelector('h1').textContent).toContain('Welcome to Angular Unit Tests');
	}));
});
