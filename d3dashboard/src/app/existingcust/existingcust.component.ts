import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existingcust',
  templateUrl: './existingcust.component.html',
  styleUrls: ['./existingcust.component.scss']
})
export class ExistingcustComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['Online','Offline','Deactivate'],
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
