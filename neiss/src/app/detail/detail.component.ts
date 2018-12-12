import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.services';
import { ActivatedRoute } from '@angular/router';
import { Body } from 'src/models/body';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private body: Body;
  constructor(
    private jobService: JobService,
    private route: ActivatedRoute
  ) { }
  public ngOnInit(): void {
    this.getJob();
  }
  private getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJSON().subscribe(job => {
      this.body = job.body.find(body => body.id === id.toString());
    });
  }
}
