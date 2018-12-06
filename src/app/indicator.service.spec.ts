import { TestBed, inject } from '@angular/core/testing';

import { IndicatorService } from './indicator.service';
import {HttpClient, HttpHeaders,HttpHandler} from '@angular/common/http';

describe('IndicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicatorService,HttpClient,HttpHandler]
    });
  });

  it('should be created', inject([IndicatorService], (service: IndicatorService) => {
    expect(service).toBeTruthy();
  }));
});
