/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilesdataService } from './filesdata.service';

describe('Service: Filesdata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesdataService]
    });
  });

  it('should ...', inject([FilesdataService], (service: FilesdataService) => {
    expect(service).toBeTruthy();
  }));
});
