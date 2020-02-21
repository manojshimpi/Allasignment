import { TestBed } from '@angular/core/testing';

import { FiluploadService } from './filupload.service';

describe('FiluploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiluploadService = TestBed.get(FiluploadService);
    expect(service).toBeTruthy();
  });
});
