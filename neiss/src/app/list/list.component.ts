import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.services';
import { Job } from 'src/models/job';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private job: Job;
  constructor(
    private jobService: JobService
  ) { }
  public ngOnInit(): void {
    this.getJob();
  }
  private getJob(): void {
    this.jobService.getJSON().subscribe(job => {
      this.job = job;
    });
  }

}
