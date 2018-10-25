import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttonText = 'Click Me';
  hasButtonBeenClicked = false;
  numberOfClicks = 0;
  exampleButtonClick() {
    this.numberOfClicks++;
    if (this.hasButtonBeenClicked !== true) {
      this.hasButtonBeenClicked = true;
      this.buttonText = `Don't click me anymore please.`;
    } else {
      this.buttonText = `Really you are going to click me? You aren't tired after doing it ${this.numberOfClicks} times?`;
    }
  }
}
