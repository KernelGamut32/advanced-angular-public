import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor() { }

  doWork(value: string, delayDuration: number): Observable<string> {
    // Simulate long-running service
    console.log(`Running with ${value}`);
    return of(`Complete: ${value}`).pipe(
      delay(delayDuration)
    );
  }

}
