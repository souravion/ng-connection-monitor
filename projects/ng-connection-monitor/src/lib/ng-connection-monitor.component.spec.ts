import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgConnectionMonitorComponent } from './ng-connection-monitor.component';

describe('NgConnectionMonitorComponent', () => {
  let component: NgConnectionMonitorComponent;
  let fixture: ComponentFixture<NgConnectionMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgConnectionMonitorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgConnectionMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
