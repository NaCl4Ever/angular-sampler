import { Component, OnInit } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css'],
  providers: [SimpleService]
})
export class ObserveComponent implements OnInit {
  resultText: Array<string> = [];
  observations = 0;
  constructor(private simpleService: SimpleService) { }

  ngOnInit() {
    this.simpleService.sourceObservable.subscribe((res: string) => {
      this.resultText.push(res);
    });
  }

  initiateObservation() {
    this.simpleService.initiateObservation(this.observations);
    this.observations++;
  }
}
