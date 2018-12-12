import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

import { JobService } from './job.services';

describe('JobService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[
            HttpClientTestingModule,
          ],
      providers: [JobService]
    });
  }));

  it('should be created', inject([JobService], (service: JobService) => {
    expect(service).toBeTruthy();
  }));

});
