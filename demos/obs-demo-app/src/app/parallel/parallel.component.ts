import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Subscription } from 'rxjs';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.css']
})
export class ParallelComponent implements OnInit, OnDestroy {

  taskOneInput: string;
  taskOneDuration: number;
  taskTwoInput: string;
  taskTwoDuration: number;
  taskThreeInput: string;
  taskThreeDuration: number;

  result1: string;
  result2: string;
  result3: string;

  subscription: Subscription;

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  doWork(): void {
    this.subscription = forkJoin([
      this.workerService.doWork(this.taskOneInput, this.taskOneDuration),
      this.workerService.doWork(this.taskTwoInput, this.taskTwoDuration),
      this.workerService.doWork(this.taskThreeInput, this.taskThreeDuration)
    ]).subscribe(results => {
      this.result1 = results[0];
      this.result2 = results[1];
      this.result3 = results[2];
    });
  }

}
