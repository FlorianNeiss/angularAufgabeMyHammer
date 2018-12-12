import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from 'src/models/job';
import { HttpClient } from '@angular/common/http';
import { Body } from 'src/models/body';


@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private http: HttpClient) {   }
  public getJSON(): Observable<Job> {
    // TO-DO change encoding from WINDOWS1252 to UTF8
    return this.http.get<Job>('./assets/jobs.json');
  }
}