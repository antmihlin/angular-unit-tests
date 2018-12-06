import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { IndicatorService } from './indicator.service';


@NgModule({
  declarations: [
    AppComponent,
    CountryStatsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	HttpModule,
  ],
  providers: [IndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
