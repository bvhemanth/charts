import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdelivered',
  templateUrl: './orderdelivered.component.html',
  styleUrls: ['./orderdelivered.component.scss']
})
export class OrderdeliveredComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['ontime', 'fast', 'Delay'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ],
              hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ]
          }]
      };
  }

}
