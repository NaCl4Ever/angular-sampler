import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText = 'Click Me';
  hasButtonBeenClicked = false;
  numberOfClicks = 0;
  exampleButtonClick() {
    if (this.hasButtonBeenClicked !== true) {
      this.hasButtonBeenClicked = true;
      this.buttonText = `Don't click me anymore please.`;
    } else {
      this.buttonText = `Really you are going to click me? You aren't tired after doing it ${this.numberOfClicks} times?`;
    }
    this.numberOfClicks++;
  }
}
