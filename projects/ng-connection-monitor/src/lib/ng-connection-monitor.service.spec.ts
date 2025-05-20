import { TestBed } from '@angular/core/testing';

import { NgConnectionMonitorService } from './ng-connection-monitor.service';

describe('NgConnectionMonitorService', () => {
  let service: NgConnectionMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgConnectionMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
