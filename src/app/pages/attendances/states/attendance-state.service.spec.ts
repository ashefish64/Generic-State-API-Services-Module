import { TestBed } from '@angular/core/testing';

import { AttendanceStateService } from './attendance-state.service';

describe('AttendanceStateService', () => {
  let service: AttendanceStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
