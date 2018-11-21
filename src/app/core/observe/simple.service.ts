import { Injectable } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

@Injectable()
export class SimpleService {
  observationSource = new Subject<Object>();
  sourceObservable = this.observationSource.asObservable();

  initiateObservation(index: number): void {
    const count = 4;
    let currentIndex = 0;
    const awesomeInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex % 2 === 0) {
        this.observationSource.next(`Ping triggered by ${index}`);
      } else {
        this.observationSource.next(`Ping triggered by ${index}`);
      }
      if (currentIndex === count) {
        this.observationSource.next(`${index}: Complete`);
        clearInterval(awesomeInterval);
      }
    }, 1000);
  }
}
