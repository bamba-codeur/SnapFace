import { TestBed } from '@angular/core/testing';

import { FaceSnapsServiceService } from './face-snaps-service.service';

describe('FaceSnapsServiceService', () => {
  let service: FaceSnapsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceSnapsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
