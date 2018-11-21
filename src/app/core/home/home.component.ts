import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  links = [
    {
      title: 'Sample',
      desc: 'Simple little sample page',
      buttons: [
        {text: 'Check it out!', link: '/sample', iconClass: 'fa fa-binoculars'}
      ]
    },
    {
      title: 'Observables',
      desc: 'Observe the magic of observables, I promise they are fun!',
      buttons: [
        { text: 'Observe!', link: '/observe', iconClass: 'fa fa-eye' }
      ]
    }
  ];
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
